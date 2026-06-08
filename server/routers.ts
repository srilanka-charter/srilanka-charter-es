import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER || "";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || "";
const NOTIFY_EMAILS = ["srilanka.41032@gmail.com", "contact@gohellolanka.com"];

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    sendInquiry: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1),
          country: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          startDate: z.string().optional(),
          endDate: z.string().optional(),
          startLocation: z.string().optional(),
          adults: z.string().optional(),
          children: z.string().optional(),
          vehicleType: z.string().optional(),
          currency: z.string().optional(),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const transporter = createTransporter();

        const bodyLines = [
          `NOMBRE COMPLETO: ${input.fullName}`,
          `PAÍS: ${input.country}`,
          `CORREO ELECTRÓNICO: ${input.email}`,
          `NÚMERO DE TELÉFONO: ${input.phone || "-"}`,
          `FECHA DE INICIO: ${input.startDate || "-"}`,
          `FECHA DE FIN: ${input.endDate || "-"}`,
          `LUGAR DE INICIO DEL CHARTER: ${input.startLocation || "-"}`,
          `Nº DE ADULTOS: ${input.adults || "-"}`,
          `Nº DE NIÑOS: ${input.children || "0"}`,
          `TIPO DE VEHÍCULO: ${input.vehicleType || "-"}`,
          `MONEDA PREFERIDA: ${input.currency || "-"}`,
          `DESTINOS / NOTAS DE ITINERARIO: ${input.notes || "-"}`,
        ];

        const htmlBody = `
<html>
<body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 30px; border: 1px solid #e0e0e0;">
    <h2 style="color: #C9A84C; margin-bottom: 20px;">🇱🇰 Nueva Consulta de Charter — SLTCS (ES)</h2>
    <table style="width:100%; border-collapse: collapse;">
      ${bodyLines
        .map(
          line =>
            `<tr>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 12px; width: 40%;">${line.split(": ")[0]}</td>
              <td style="padding: 8px 12px; border-bottom: 1px solid #f0f0f0; color: #222; font-size: 14px;">${line.split(": ").slice(1).join(": ")}</td>
            </tr>`
        )
        .join("")}
    </table>
    <p style="margin-top: 20px; font-size: 12px; color: #aaa;">Enviado desde es.srilanka-charter.com</p>
  </div>
</body>
</html>`;

        await transporter.sendMail({
          from: `"SLTCS Charter ES" <${GMAIL_USER}>`,
          to: NOTIFY_EMAILS.join(", "),
          replyTo: input.email,
          subject: `[SLTCS ES] Nueva consulta de ${input.fullName} (${input.country})`,
          html: htmlBody,
          text: bodyLines.join("\n"),
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
