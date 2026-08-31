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
    body: "梨花祭と生徒会活動で、情報が理解され、実際の行動につながるところまでを設計してきました。",
  },
  {
    id: "problem",
    eyebrow: "02 / PROBLEM",
    title: <>問題は情報不足だけでなく、<br /><em>情報の経路</em>にあった。</>,
    body: "情報が存在していても、場所・形式・時期が分散すると、確認、提出、受付、判断が止まります。そこで、運用やルールまで含めて情報の流れを作り直しました。",
  },
  {
    id: "qr",
    eyebrow: "03 / FLAGSHIP 01",
    title: <>QR入場管理</>,
    body: "紙チケットと名簿照合で例年長い列ができていた入場管理を、学校メールでの認証、招待、QR発行、複数端末での受付、集計まで一つにつなげました。2年生で一度実現できなかった案を、安全性と利用者への配慮から再設計して導入しました。",
    metrics: ["1,422 招待", "1,043 実来場", "991 登録生徒"],
    image: "/evidence/qr-reception-field.jpg",
  },
  {
    id: "portal",
    eyebrow: "04 / FLAGSHIP 02",
    title: <>梨花祭 統合管理ポータル</>,
    body: "32クラスと22部活動の提出を一つの入口に集め、提出、差し戻し、再提出、審査、進捗確認を同じ画面で追えるようにしました。提出状況そのものを共有できる情報へ変えた作品です。",
    metrics: ["54 団体", "5 種類の書類", "約3.5か月運用"],
    image: "/evidence/portal-admin.jpeg",
  },
  {
    id: "site",
    eyebrow: "05 / PUBLIC INFORMATION",
    title: <>梨花祭2026<br />特設Webサイト</>,
    body: "紙パンフレットでは載せきれず、印刷後に変更できない情報を、検索、カテゴリー、構内図、タイムライン、お知らせとしてWeb化しました。当日も価格や実施時間を更新し、情報を探して受け取れる入口を作りました。",
    metrics: ["本番 1,091人", "TOP 17,294表示", "MAP 857表示"],
    image: "https://raw.githubusercontent.com/chiba-eiwa-seitokai/rikasai2026.site.tokusetu/main/public/hero.png",
  },
  {
    id: "reflection",
    eyebrow: "06 / REFLECTION",
    title: <>仕組みを整えても、<br /><em>見ない人は残った。</em></>,
    body: "説明を用意しても使い方が分からない人や、そもそも情報を見ない人は残りました。『見つけられない』『理解できない』『理解しても行動しない』は別の問題だと考えるようになりました。",
  },
  {
    id: "future",
    eyebrow: "07 / WHY MUSASHI",
    title: <>学校で見つけた問いを、<br /><em>地域・行政へ。</em></>,
    body: "武蔵大学では、行政情報を普段見ない人にも必要な情報が届き、背景を理解した上で意見を表明できる仕組みを、社会調査、データ分析、制作を往復しながら検証したいです。卒業後は民間企業から行政と住民をつなぐ情報サービスの設計・開発に携わりたいです。",
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
