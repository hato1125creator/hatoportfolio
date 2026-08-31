import type { ReactNode } from "react";

type Slide = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  metrics?: string[];
  image?: string;
};

const slides: Slide[] = [
  {
    id: "theme",
    eyebrow: "01 / THEME",
    title: <>情報は、<br />置くだけでは<br /><em>届かない。</em></>,
    body: "梨花祭と生徒会活動で、情報が理解され、行動につながるところまでを設計してきました。",
  },
  {
    id: "problem",
    eyebrow: "02 / PROBLEM",
    title: <>問題は情報不足ではなく、<br /><em>情報の経路</em>にあった。</>,
    body: "情報は存在していても、場所・形式・時期が分散すると、確認、提出、受付、判断が止まります。",
  },
  {
    id: "qr",
    eyebrow: "03 / FLAGSHIP 01",
    title: <>QR入場管理</>,
    body: "受付だけを電子化せず、学校メールでの認証、招待、QR発行、複数端末での照合、集計までを同じデータで接続しました。課題発見から最終判断までを担い、当日は生徒会・実行委員と運用しました。",
    metrics: ["1,422 予約", "1,043 入場", "991 登録生徒"],
    image: "/evidence/qr-reception-field.jpg",
  },
  {
    id: "portal",
    eyebrow: "04 / FLAGSHIP 02",
    title: <>梨花祭 統合管理ポータル</>,
    body: "単なる提出フォームでは最新版と差し戻しの管理が残ります。そこで、54団体・5種類の紙提出を、履歴、審査、Drive整理、他団体の企画閲覧まで含む共有フローへ変えました。",
    metrics: ["32 クラス", "22 部活動", "2026.04—07 運用"],
    image: "/evidence/portal-admin.jpeg",
  },
  {
    id: "other",
    eyebrow: "05 / OTHER WORKS",
    title: <>同じ問いを、<br />別の場面でも扱った。</>,
    body: "中夜祭では先着予約と入場を、生徒会では長期間検索できるDiscord情報基盤を設計しました。",
    metrics: ["中夜祭 560人入場", "Discord 44人", "Botで日程通知"],
  },
  {
    id: "reflection",
    eyebrow: "06 / REFLECTION",
    title: <>一元化しても、<br /><em>見ない人は残った。</em></>,
    body: "QR予約379件が未入場だった理由も、一元化後に情報を見なかった理由も区別できていません。技術で経路は整えられても、人の選択を説明する調査設計が不足していました。",
  },
  {
    id: "future",
    eyebrow: "07 / WHY MUSASHI",
    title: <>情報と行動の間を、<br /><em>社会調査とデータ</em>で研究する。</>,
    body: "聞き取り、利用データ、比較実験を通して、情報が参加につながる条件を明らかにし、学校外にも移せる仕組みを作りたいです。",
  },
];

export default function PresentationPage() {
  return (
    <main className="presentation-page">
      <header className="presentation-header">
        <a href="/">← ポートフォリオへ戻る</a>
        <span>PRESENTATION ROUTE / 07 SCENES</span>
      </header>
      <nav className="slide-nav" aria-label="発表セクション">
        {slides.map((slide, index) => <a href={`#${slide.id}`} key={slide.id}>{String(index + 1).padStart(2, "0")}</a>)}
      </nav>
      {slides.map((slide, index) => (
        <section className="presentation-slide" id={slide.id} key={slide.id}>
          <div className="slide-number">{String(index + 1).padStart(2, "0")}</div>
          <div className="slide-copy">
            <p>{slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <div className="slide-body">{slide.body}</div>
            {slide.metrics && <ul>{slide.metrics.map(metric => <li key={metric}>{metric}</li>)}</ul>}
          </div>
          {slide.image && <figure><img src={slide.image} alt="作品の実画面または当日運用の記録" /><figcaption>ACTUAL EVIDENCE</figcaption></figure>}
          <a className="slide-next" href={index === slides.length - 1 ? "/" : `#${slides[index + 1].id}`}>{index === slides.length - 1 ? "PORTFOLIO ↗" : "NEXT ↓"}</a>
        </section>
      ))}
    </main>
  );
}
