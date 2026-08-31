const works = [
  {
    id: "qr",
    number: "01",
    label: "ENTRANCE SYSTEM",
    title: "QR入場管理",
    statement: "紙中心の入場管理を再設計し、受付の長い列を減らす。",
    tier: "MAIN CASE / 01",
    primary: true,
    period: "2025.09 — 2026.07",
    role: "課題発見・企画・要件整理・UI設計・実装・DB設計・当日運用",
    metrics: ["1,422 招待", "1,043 実来場", "991 登録生徒"],
    challenge: "従来は、生徒が紙に招待者名を書き、実行委員が入力、生徒会が集計し、当日は紙チケットと名簿を照合していた。バス到着時には長い列ができ、7月の炎天下での待機や、部活動の発表時間に間に合わない来場者が例年発生していた。",
    decision: "高校2年時の招待コード方式は、個人情報、安全運用、誰でも使えるかという懸念から実現しなかった。3年時に、学校メールで生徒を認証し、生徒が招待者名を登録、招待者はリンクを開くだけでQRを表示できる方式へ再設計した。スマートフォンを持たない人には印刷対応も残した。",
    reason: "受付だけを電子化しても、登録、招待、当日照合、集計が分かれたままでは問題が残る。学校側の安全管理と利用者側の使いやすさを同時に満たすため、情報の入口から入場記録までを一つの流れとして設計した。",
    result: "本番では大きなシステム障害はなく、保護者・OB・中学生を除く実来場者1,043人を記録した。例年発生していた長い受付列はほぼ見られなくなり、これまで曖昧だった実来場者数もデータとして残せるようになった。",
    limitation: "Instagramなどで説明動画を公開していても、当日にQRコードの表示方法が分からない来場者がいた。また379件の招待は未使用だったが、その理由を区別できていない。情報を出すことと、相手に伝わり実際に使えることは別だと分かった。",
    tech: "HTML / CSS / JavaScript / Node.js / Express / PostgreSQL（Supabase） / Vercel",
    techReason: "予約・認証・QR照合を一つのWebアプリで処理し、複数端末から同じ記録へアクセスできるよう、データベースを集約した。",
    flow: ["生徒認証", "招待者を登録", "招待リンク・QR発行", "複数端末で受付", "入場記録・集計"],
    images: [
      ["/evidence/qr-student-dashboard-login.webp", "学校メールで認証コードを受け取る生徒用ログイン画面", "生徒認証"],
      ["/evidence/qr-admin-dashboard.jpg", "予約数、入場数、未入場数を集計する管理ダッシュボード", "集計・管理"],
      ["/evidence/qr-reception-field.jpg", "保護者と招待者の受付を分けて設営した当日の入場受付", "当日の受付"],
    ],
  },
  {
    id: "portal",
    number: "02",
    label: "SUBMISSION WORKFLOW",
    title: "梨花祭 統合管理ポータル",
    statement: "紙の提出を、状態と履歴が見える審査フローへ変える。",
    tier: "MAIN CASE / 02",
    primary: true,
    period: "2026.03 — 2026.07",
    role: "課題発見・企画・要件定義・実装・運用設計（AI支援）",
    metrics: ["54 団体", "5 書類", "約3.5か月運用"],
    challenge: "32クラスと22部活動が複数の書類を提出しており、回収、確認、差し戻し、再提出の管理に時間がかかった。紛失やPDF整理の負担もあり、提出者以外は企画内容や進捗を把握しにくかった。",
    decision: "すべての提出を一つの入口にまとめ、未提出、確認中、差し戻し、再提出などの状態と履歴を管理画面から確認できるようにした。画像添付やGoogleドキュメントのリンク提出にも対応し、他団体の企画も閲覧できるようにした。",
    reason: "単なる提出フォームでは、提出後の確認、差し戻し、最新版の特定が運営側に残る。提出状況そのものを共有できる情報に変え、運営と提出者が同じ状態を見られるようにすることを重視した。",
    result: "提出者と運営が同じ画面で状態と履歴を確認できるようになり、未提出団体を一覧で把握して、Google Classroomに投稿する催促文も効率的に作成できるようになった。",
    limitation: "説明PDFや動画を用意しても、提出方法やファイル添付で迷う利用者がいた。案内を追加して対応したが、今後は説明を増やすだけでなく、添付方法と提出状況の見せ方そのものをさらに簡単にしたい。",
    tech: "Google Apps Script / Google スプレッドシート / Google Drive",
    techReason: "学校で既に利用しているGoogle環境の中で、アカウント、表データ、ファイル保存を接続でき、専用サーバーを管理せず運用できるためGoogle Apps Scriptを選んだ。",
    flow: ["所属を選択", "書類を提出", "Driveへ自動整理", "運営が審査", "承認・差し戻し・再提出を確認"],
    images: [
      ["/evidence/portal-home-mobile.png", "書類提出と提出状況確認を選ぶトップ画面", "入口"],
      ["/evidence/portal-form.jpeg", "期限、注意事項、承認確認を含む提出画面", "提出"],
      ["/evidence/portal-admin.jpeg", "提出率と未確認団体を把握する運営画面", "審査・進捗"],
    ],
  },
  {
    id: "festival-site",
    number: "03",
    label: "PUBLIC INFORMATION",
    title: "梨花祭2026 特設Webサイト",
    statement: "紙では届かない情報を、探せて更新できるWebへ。",
    tier: "SUPPORTING CASE / 03",
    primary: false,
    period: "2026.07 運用",
    role: "企画・デザイン・コーディング・公開・当日の情報更新",
    metrics: ["本番 1,091 人", "TOP 17,294 表示", "MAP 857 表示"],
    challenge: "従来の紙パンフレットは掲載できる情報量に限界があり、印刷作業にも約2日かかった。一度印刷すると企画の時間や価格が変わっても修正できず、来場者が多数の企画から目的の情報を探す方法も限られていた。",
    decision: "企画名検索、カテゴリー絞り込み、構内図、タイムライン、お知らせを実装し、当日も各企画の価格や実施時間を更新できるようにした。別の生徒が制作した『おとぎの国』のモチーフイラストをトップに置き、その色に合わせてサイト全体のカラーパレットを設計した。",
    reason: "紙をそのままWebへ移すのではなく、検索できること、変更をすぐ反映できること、会場内で必要な情報へ移動しやすいことなど、Webだからできる情報の届け方を追加した。",
    result: "Google Analyticsでは7月6〜19日にアクティブユーザー1,464人、トップページ17,294表示、マップ857表示を記録した。文化祭本番の7月17・18日には1,091人が利用した。",
    limitation: "Web化しても、必要な情報へ全員が到達するとは限らない。今後は、どの情報が見つけられていないのか、検索や導線のどこで離脱するのか、どのタイミングで何を示すと行動につながるのかを利用データと聞き取りから確かめたい。",
    tech: "Next.js / TypeScript / Prisma / Vercel Analytics / Vercel",
    techReason: "公開ページと更新機能をWeb上で扱い、当日の変更を反映しながら、Vercel Analyticsで利用状況を計測できる構成にした。",
    flow: ["企画情報を整理", "検索・カテゴリー", "マップ・タイムライン", "当日情報を更新", "アクセスを計測"],
    images: [
      ["https://raw.githubusercontent.com/chiba-eiwa-seitokai/rikasai2026.site.tokusetu/main/public/hero.png", "別の生徒が制作したモチーフイラストを使用し、色設計を合わせた特設サイトのメインビジュアル", "トップ・世界観"],
      ["https://raw.githubusercontent.com/chiba-eiwa-seitokai/rikasai2026.site.tokusetu/main/public/map.webp", "来場者が現在地と企画場所を確認するために掲載した構内図", "構内図"],
    ],
  },
  {
    id: "discord",
    number: "04",
    label: "INFORMATION INFRASTRUCTURE",
    title: "生徒会 Discord情報基盤",
    statement: "連絡を流す場所から、判断を残せる場所へ。",
    tier: "SUPPORTING CASE / 04",
    primary: false,
    period: "2024.07 — 現在",
    role: "提案・移行設計・サーバー作成・運用",
    metrics: ["44 人", "2025.04 移行", "Botで日程通知"],
    challenge: "LINE中心の連絡では情報が流れ、年度ごとのメンバー変更や、行事ごとの整理、閲覧範囲の分離が難しかった。2024年7月にはSlackも提案したが、無料版では過去の履歴を長期間参照しにくかった。",
    decision: "2025年4月にDiscordへの移行を提案し、行事、タスク、資料、権限ごとにチャンネルを設計した。必要な範囲だけ情報を見られるようにし、Botによる活動日程の通知も追加した。",
    reason: "連絡速度だけではなく、過去の判断と資料を後から検索できることを重視した。新しいシステムを一から作るのではなく、継続して使える既存サービスを課題に合わせて設計した。",
    result: "過去の連絡を検索し、行事別に資料・担当・相談を整理できるようになった。正式な生徒会活動時間外でも質問や情報共有ができ、情報が混ざる状態を減らした。",
    limitation: "分類を増やすほど、利用者が投稿先を迷う可能性がある。チャンネル整理と引き継ぎを継続し、情報を分類する側の分かりやすさも改善する必要がある。",
    tech: "Discord / 権限設計 / Bot運用",
    techReason: "既存メンバーがスマートフォンから使え、チャンネル、権限、Botを一つの環境で管理できるため採用した。",
    flow: ["情報を投稿", "行事別に分類", "権限で閲覧範囲を分離", "検索・相談", "Botで日程通知"],
    images: [
      ["/evidence/discord-channel-structure.png", "行事、タスク、学校生活、委員会などで分けたチャンネル構成", "チャンネル設計"],
      ["/evidence/discord-project-forum.png", "システムごとの相談と過去の投稿を残すフォーラム画面", "検索できる記録"],
    ],
  },
];

const process = [
  ["01", "課題発見", "現場で起きた確認、混雑、未提出、情報探索の詰まりを記録する。"],
  ["02", "要件整理", "画面だけでなく、ルール、権限、担当、例外まで決める。"],
  ["03", "実装", "利用者が迷わない最小の流れとして形にする。"],
  ["04", "運用", "生徒会・実行委員・来場者と本番で使い、現場の例外へ対応する。"],
  ["05", "検証", "利用データと声から、説明できない部分を次の問いにする。"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ページ上部へ">HAYATO KOSHIKAWA</a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#works">WORK</a>
          <a href="#reflection">REFLECTION</a>
          <a href="#future">WHY MUSASHI</a>
          <a href="#credits">CREDITS</a>
        </nav>
        <a className="presentation-link" href="/presentation">発表用表示 ↗</a>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="mono-label">INFORMATION &amp; SOCIAL DESIGN / 2024—2026</p>
          <h1>情報は、<br />置くだけでは<br /><span>届かない。</span></h1>
          <p className="hero-lead">情報が理解され、行動につながるところまで設計する。</p>
          <p className="hero-profile">千葉英和高等学校 生徒会長<br />越川 颯人 / Hayato Koshikawa</p>
        </div>
        <div className="hero-symbol" aria-hidden="true">
          <span className="arc" /><span className="circle" /><span className="square" /><span className="dots" />
          <b>INFORMATION<br />→ ACTION</b>
        </div>
      </section>

      <section className="thesis section-shell" aria-labelledby="thesis-title">
        <p className="section-kicker">THESIS</p>
        <h2 id="thesis-title">仕組み・ルール・UI・運用を、<br />一つの情報経路として再設計した。</h2>
        <p>梨花祭と生徒会活動では、情報が存在していても、場所・形式・時期が分散することで、確認、提出、受付、判断が止まっていた。私はこの問題を人の注意不足ではなく、情報が行動へ移るまでの構造として捉えた。</p>
      </section>

      <section className="numbers" aria-label="主要な運用規模">
        <div><strong>1,422</strong><span>QR招待</span></div>
        <div><strong>1,043</strong><span>実来場</span></div>
        <div><strong>54</strong><span>提出ポータル対象団体</span></div>
        <div><strong>1,091</strong><span>特設サイト本番利用者</span></div>
      </section>

      <section className="works section-shell" id="works">
        <div className="section-heading">
          <div><p className="section-kicker">SELECTED WORKS</p><h2>問いから作った、<br />4つの仕組み。</h2></div>
          <p>各作品は「課題 → 判断 → 実装・運用 → 結果 → 限界」の順で整理した。画像は実際の画面、当日の記録、制作に使用した素材を使用している。</p>
        </div>

        <div className="work-list">
          {works.map((work) => (
            <article className="work" id={work.id} key={work.id}>
              <div className="work-index"><strong>{work.number}</strong><span>{work.label}</span></div>
              <div className="work-main">
                <p className={`case-tier ${work.primary ? "case-tier-main" : ""}`}>{work.tier}</p>
                <div className="work-title-row">
                  <div><h3>{work.title}</h3><p>{work.statement}</p></div>
                  <dl><div><dt>PERIOD</dt><dd>{work.period}</dd></div><div><dt>MY ROLE</dt><dd>{work.role}</dd></div></dl>
                </div>
                <ul className="metric-list">{work.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
                <div className="decision-brief">
                  <span>KEY DECISION</span>
                  <p>{work.reason}</p>
                </div>
                <div className={`evidence evidence-${work.images.length}`}>
                  {work.images.map(([src, alt, label], index) => (
                    <a href={src} target="_blank" rel="noreferrer" key={src}>
                      <figure><img src={src} alt={alt} loading="lazy" /><figcaption><span>0{index + 1}</span>{label}<b>↗</b></figcaption></figure>
                    </a>
                  ))}
                </div>
                <details className="case-details" open={work.primary}>
                  <summary>設計判断と振り返りを見る <span>＋</span></summary>
                  <div className="case-grid">
                    <section><small>CHALLENGE</small><h4>課題</h4><p>{work.challenge}</p></section>
                    <section><small>DECISION</small><h4>設計判断</h4><p>{work.decision}</p></section>
                    <section><small>OUTCOME</small><h4>結果</h4><p>{work.result}</p></section>
                    <section className="limitation"><small>NEXT ITERATION</small><h4>限界と次の改善</h4><p>{work.limitation}</p></section>
                  </div>
                  <div className="system-flow" aria-label={`${work.title}の処理の流れ`}>
                    <span>INFORMATION FLOW</span>
                    <ol>{work.flow.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</li>)}</ol>
                  </div>
                  <div className="technology-block">
                    <p className="tech-line"><span>TECHNOLOGY</span>{work.tech}</p>
                    <p><span>WHY THIS STACK</span>{work.techReason}</p>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-shell">
        <p className="section-kicker">PROCESS</p><h2>制作を、現場の改善サイクルにする。</h2>
        <ol>{process.map(([n, title, text]) => <li key={n}><span>{n}</span><strong>{title}</strong><p>{text}</p></li>)}</ol>
      </section>

      <section className="reflection section-shell" id="reflection">
        <div><p className="section-kicker">REFLECTION</p><h2>一元化しても、<br />見ない人は残った。</h2></div>
        <div className="reflection-copy">
          <p className="reflection-lead">仕組みを整えても、情報を「見つける・理解する・行動する」は自動ではつながらなかった。</p>
          <p>高校では、受付、提出、情報発信、連絡で情報が止まっている場面を見つけ、情報を一か所に集めたり、操作を簡単にしたりする仕組みを作ってきた。しかし、説明を用意しても使い方が分からない人や、そもそも情報を見ない人は残った。</p>
          <p>この経験から、「見つけられない」「読んでも理解できない」「理解しても行動に移さない」は、それぞれ別の問題なのではないかと考えるようになった。高校で情報が行動へつながる経路は整えられたが、なぜ人によって情報との接点や理解、行動に違いが生まれるのかまでは明らかにできていない。</p>
          <p>そして、この問題は学校の中だけでなく、地域や行政から市民へ情報を届ける場面でも考える必要があるのではないかと思っている。</p>
        </div>
      </section>

      <section className="future section-shell" id="future">
        <div className="future-title"><p className="section-kicker">WHY MUSASHI UNIVERSITY</p><h2>情報を「作る」から、<br />人との関係を調べて設計するへ。</h2></div>
        <div className="research-question"><span>RESEARCH QUESTION</span><strong>行政情報を普段見ない人にも必要な情報が届き、必要な背景を理解した上で、自分の意見を表明できる仕組みをどう設計できるか。</strong></div>
        <div className="research-methods">
          <article><span>01</span><h3>聞き取る</h3><p>インタビュー、フィールドワーク、アンケートを通して、人が行政情報をどこから得て、どこで理解につまずくのかを調べる。</p></article>
          <article><span>02</span><h3>データで確かめる</h3><p>情報の到達、閲覧、理解、意見提出までのデータを集め、これまで行政情報を見ていなかった人が参加できたかを検証する。</p></article>
          <article><span>03</span><h3>設計して検証する</h3><p>生活との関係が分かる入口、難しい制度の説明、原文への導線、賛否双方の論点、簡単な意見提出を試作し、調査結果から作り直す。</p></article>
        </div>
        <div className="research-question"><span>AFTER GRADUATION</span><strong>卒業後は、民間企業の立場から、行政と住民をつなぐ情報サービスや情報基盤の設計・開発に携わりたい。</strong></div>
        <a className="official-link" href="https://www.musashi.ac.jp/faculty/sociology/social_design/curriculum.html" target="_blank" rel="noreferrer">情報社会デザイン専攻の学び ↗</a>
      </section>

      <section className="credits section-shell" id="credits">
        <div><p className="section-kicker">CREDITS / AI DISCLOSURE</p><h2>誰が、どこを担ったか。</h2></div>
        <div className="credit-grid">
          <article><span>越川颯人</span><p>課題発見、企画、要件決定、画面・運用設計、実装、関係者との調整、最終判断。</p></article>
          <article><span>AI支援</span><p>ChatGPT・Claude Codeを、コード案、エラー調査、要件と文章の整理に使用。出力は本人が確認・修正した。</p></article>
          <article><span>生徒会・実行委員・教員</span><p>QR受付、列整理、提出物の審査、安全管理、トラブル時の対応など、本番運用を共同で担当。</p></article>
          <article><span>共同制作・素材</span><p>QR入場案内ポスターは2人で制作。特設Webサイトのモチーフイラストは別の生徒が制作し、越川がWeb上の配置とカラーパレット設計を担当した。</p></article>
        </div>
        <div className="responsibility-matrix" aria-label="本人とAIの分担">
          <div className="matrix-head"><span>工程</span><span>越川颯人</span><span>AI支援</span></div>
          <div><strong>課題・要件</strong><p>現場の課題を発見し、対象、ルール、例外、完成条件を決定。</p><p>要件の整理、抜け漏れの指摘、文章化を補助。</p></div>
          <div><strong>設計・実装</strong><p>画面と運用を判断し、コードを確認・修正して本番へ反映。</p><p>コード案、エラー原因の候補、修正案を提示。</p></div>
          <div><strong>運用・評価</strong><p>関係者と運用し、結果を集計して改善点を判断。</p><p>集計、比較、振り返りの整理を補助。</p></div>
        </div>
      </section>

      <section className="sources section-shell" aria-labelledby="sources-title">
        <div><p className="section-kicker">SOURCES / INFLUENCES</p><h2 id="sources-title">制作を確認できる資料。</h2></div>
        <div className="source-list">
          <a href="https://github.com/chiba-eiwa-seitokai/rikasai-reservation" target="_blank" rel="noreferrer"><span>CODE</span><strong>QR入場管理 GitHub</strong><b>↗</b></a>
          <a href="https://rikasai2026-site-tokusetu.vercel.app/" target="_blank" rel="noreferrer"><span>LIVE SITE</span><strong>梨花祭2026 特設Webサイト</strong><b>↗</b></a>
          <a href="https://github.com/chiba-eiwa-seitokai/rikasai2026.site.tokusetu" target="_blank" rel="noreferrer"><span>CODE</span><strong>梨花祭2026 特設Webサイト GitHub</strong><b>↗</b></a>
          <a href="https://www.musashi.ac.jp/faculty/sociology/social_design/curriculum.html" target="_blank" rel="noreferrer"><span>ACADEMIC</span><strong>武蔵大学 情報社会デザイン専攻</strong><b>↗</b></a>
          <div className="influence-note"><span>VISUAL REFERENCES</span><p><a href="https://lea-lea.site/" target="_blank" rel="noreferrer">lea-lea.site</a> / <a href="https://hoshimachi-suisei.jp/" target="_blank" rel="noreferrer">hoshimachi-suisei.jp</a> / <a href="https://ashimfactory.com/" target="_blank" rel="noreferrer">ashimfactory.com</a> / <a href="https://katsura35.com/" target="_blank" rel="noreferrer">katsura35.com</a> を、余白、文字の強弱、作品の見せ方の参考にした。構成と内容は本ポートフォリオ用に再設計している。</p></div>
        </div>
      </section>

      <section className="presentation-cta section-shell">
        <div><p className="section-kicker">FOR INTERVIEW</p><h2>このサイトを使って、<br />制作意図を説明する。</h2></div>
        <p>発表用表示では、中心テーマ、主要作品、限界、大学での問いだけを順番に表示する。</p>
        <a href="/presentation">発表用表示を開く <span>↗</span></a>
      </section>

      <footer className="site-footer section-shell">
        <strong>HAYATO KOSHIKAWA</strong><span>Information &amp; Social Design Portfolio / 2026</span><a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
