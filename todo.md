# Project TODO - srilanka-charter-es

- [x] プロジェクト初期化（srilanka-charter-es）
- [x] 全17枚の画像アップロード（ヒーロー・スライド・目的地・口コミ・車両）
- [x] メインページ（Home.tsx）作成：ナビゲーション、ヒーロー、WhySection（6 Razones）、懸念事項、プラン、イテラリー、目的地、車両、口コミ、FAQ、お問い合わせフォーム、フッター
- [x] First View直下にコンタクトフォーム追加
- [x] 1st viewタイトル「Alquiler de coche con conductor en Sri Lanka」に変更
- [x] 左上ロゴ「SLTCS｜Alquiler de coche con conductor en Sri Lanka」に変更
- [x] ヘッダーのCONSULTA GRATISボタン削除
- [x] フォームボタン上に英語対応注記追加
- [x] 「6 Razones」修正・SVGアイコン刷新
- [x] Thanksページ（/gracias）作成・フォーム送信後遷移
- [x] バックエンド追加（tRPC + Express）・nodemailerでGmail SMTP経由メール送信実装
- [x] meta descriptionを158文字に修正（SEO対応）
- [x] Google Analytics（G-VLVRL9HNBK）タグ追加
- [x] hreflangに7言語追加（es/en/fr/ru/de/nl/ja）・Gitコンフリクト解消
- [x] 言語切り替えプルダウン追加（CONTACTOの横・地球儀SVGアイコン・Spanishをゴールドハイライト）
- [x] /priceページ（Pricing.tsx）作成・ナビにPRECIO追加・トップページにFlat-Rate Price Listセクション追加
- [x] /priceページのSEOメタタグ・JSON-LD追加
- [x] FAQPage.tsx（/faqページ）作成完了（15問のスペイン語FAQ・アコーディオン・JSON-LD FAQPage schema）
- [x] App.tsxに/faqルート追加
- [x] NavbarのFAQリンクをCONTACTOの右に移動・/faqページへのリンクに変更（デスクトップ・モバイル両方）
- [x] トップページのFAQセクション（FaqSection）を削除
- [x] Pricing.tsxのuseEffect重複エラー修正（Viteキャッシュクリア・サーバー再起動）
- [x] トップページデザインを英語版GitHubと同じ構造に変更（Home.tsx完全書き換え・index.css英語版CSSシステム適用）
- [x] ヒーロー統計数値を400+/4.9/30+に変更
- [x] ヘッダーにINFORMACIÓNプルダウンを追加（PRECIO→INFORMACIÓN→CONTACTO→FAQの順）
- [x] ArticleNavコンポーネント作成（記事ページ共通ナビゲーション）
- [x] 記事1: /information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka（6/4公開）
- [x] 記事2: /information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa（6/4公開）
- [x] 記事3: /information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico（6/4公開）
- [x] 全3記事にhreflang（es/en/x-default）とcanonical設定
- [x] インフォグラフィック「Lo Que Cubre Tu Tarifa Diaria」スペイン語版生成
- [x] 記事4: /information/guia-costes-reserva/contratar-conductor-sri-lanka-costes-seguridad-checklist（6/5公開）
- [x] 記事5: /information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos（6/5公開）
- [x] 記事6: /information/itinerarios/itinerario-sri-lanka-4-noches-5-dias（6/5公開）
- [x] カテゴリーページ: /information/guia-costes-reserva
- [x] カテゴリーページ: /information/viajes-familia-grupos
- [x] カテゴリーページ: /information/itinerarios
- [x] INFORMACIÓNプルダウンに3カテゴリーを追加（Home.tsx・ArticleNav.tsx・Navbar.tsx）
- [x] 記事4: カテゴリーページにアイキャッチ付きカード表示・表デザイン改善・価格表に問い合わせリンク追加
- [x] 記事5: 英語版スペイン語訳版として全面リライト（写真・表デザイン改善・価格表に問い合わせリンク追加）
- [x] 記事6: 英語版スペイン語訳版として写真追加・表デザイン改善・価格表に問い合わせリンク追加
- [x] INFORMACIÓNプルダウンからITINERARIOSを削除（Home.tsx・ArticleNav.tsx・Navbar.tsx）
- [x] ヘッダーのITINERARIOSドロップダウンに記事6（4 Noches/5 Días）リンクを追加

## 6月6日分 記事作成（Itinerariosカテゴリー）

- [x] 記事7: /information/itinerarios/itinerario-sri-lanka-5-noches-6-dias（5泊6日）
- [x] 記事8: /information/itinerarios/itinerario-sri-lanka-6-noches-7-dias（6泊7日）
- [x] 記事9: /information/itinerarios/ruta-triangulo-cultural-sri-lanka（スリランカ三角形ルート）
- [x] App.tsxに3記事のルーティングを追加
- [x] Navbar・Home・ArticleNavのITINERARIOSドロップダウンに3記事リンクを追加
- [x] ItinerariosCategory.tsxの「Próximamente」カードをリンク付きに更新

## 6月11日分 記事リライト（写真追加）

- [x] 記事7（5泊6日）: 英語版から収集した写真6枚をアップロード・記事に挿入（Ella列車・Sigiriya頂上・9アーチ橋・Yalaファミリージープ・ルートマップ）
- [x] 記事8（6泊7日）: 英語版から収集した写真9枚をアップロード・記事に挿入（Kandy寺院・Sigiriya観光客・Sigiriyaドライバー・紅茶農園・9アーチ橋・Yalaジープ）
- [x] 記事9（三角形ルート）: 英語版から収集した写真6枚をアップロード・記事に挿入（Sigiriya空撮・頂上グループ・Minneriyaジープ・サファリ家族・Kandy寺院湖）
- [x] ItinerariosCategory.tsxの記事7・8・9のサムネイル画像URLを新しいwebp URLに更新

## 6月11日分 記事10新規作成

- [x] 記事10（10日間/2週間ルート）: 英語版から写真4枚収集・アップロード（バン+海岸道路・10日間ルートマップ・9アーチ橋列車・ミリッサビーチ空撮）
- [x] Itinerary10Days.tsx 新規作成（写真4枚・10日間日程・延長オプション表・SEOメタタグ・hreflang・CTA）
- [x] App.tsxに記事10のルート追加（/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas）
- [x] Navbar.tsxのITINERARIOSドロップダウンに記事10のリンクを追加（「Próximamente」を解除）
- [x] ItinerariosCategory.tsxの記事10カードを「Próximamente」から通常リンクカードに変更
