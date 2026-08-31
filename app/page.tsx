const works = [
  {
    id: "qr",
    number: "01",
    label: "ENTRANCE SYSTEM",
    title: "QR入場管理",
    statement: "予約から受付、集計までを一本につなぐ。",
    tier: "MAIN CASE / 01",
    primary: true,
    period: "2025.09 — 2026.07",
    role: "課題発見・企画・要件整理・UI設計・実装",
    metrics: ["1,422 予約", "1,043 入場", "991 登録生徒"],
    challenge: "招待方法が来場者区分ごとに異なり、紙中心の受付では入場状況を運営中に把握できなかった。",
    decision: "学校メールによる認証、招待リンク、QR発行、複数端末での受付、管理画面を一つの流れとして設計した。",
    reason: "受付画面だけを電子化しても、予約情報と当日の記録が分かれたままでは状況を把握できない。そのため、利用者の登録から運営の集計までを同じデータで扱う方式を選んだ。",
    result: "2日間で1,043人を受け付けた。アンケートでは招待経験者98人のうち73人が、QR券・招待情報を問題なく渡せたと回答した。",
    limitation: "379件は未入場だった。不要、情報未達、操作離脱を区別できていないため、利用しなかった理由の調査が次の課題である。",
    tech: "HTML / CSS / JavaScript / Node.js / Express / PostgreSQL（Supabase） / Vercel",
    techReason: "予約・認証・QR照合を一つのWebアプリで処理するためNode.jsとExpressを採用し、複数端末から同じ記録へアクセスできるようデータベースを集約した。",
    flow: ["生徒認証", "招待・予約", "QR発行", "複数端末で受付", "入場記録・集計"],
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
    statement: "紙の提出を、共有できる審査フローへ変える。",
    tier: "MAIN CASE / 02",
    primary: true,
    period: "2026.03 — 2026.07",
    role: "要件定義・実装（AI支援）",
    metrics: ["54 団体", "5 書類", "約3.5か月運用"],
    challenge: "32クラスと22部活動が紙で書類を提出しており、最新版、審査状況、差し戻し理由の確認が分散していた。",
    decision: "提出、再提出、審査、進捗確認、Google Driveへの保存とフォルダ整理を一つのWebアプリに統合した。",
    reason: "単なる提出フォームでは、提出後の確認、差し戻し、最新版の特定が運営側に残る。他団体の企画も閲覧可能にし、提出管理と文化祭全体の共有を同じ仕組みに組み込んだ。",
    result: "提出者と運営が同じ画面で状態と履歴を確認できるようになった。他団体の企画も閲覧可能にし、文化祭全体を把握できる共有基盤にした。",
    limitation: "所属は利用者が選択する方式で、誤選択への技術的な対策は実装していない。確認画面、運営側の訂正、変更履歴が改善案である。",
    tech: "Google Apps Script / Google スプレッドシート / Google Drive",
    techReason: "学校で既に利用しているGoogle環境の中で、アカウント、表データ、ファイル保存を接続でき、専用サーバーを管理せず運用できるためGoogle Apps Scriptを選んだ。",
    flow: ["所属を選択", "書類を提出", "Driveへ自動整理", "運営が審査", "承認・差し戻しを確認"],
    images: [
      ["/evidence/portal-home-mobile.png", "書類提出と提出状況確認を選ぶトップ画面", "入口"],
      ["/evidence/portal-form.jpeg", "期限、注意事項、承認確認を含む提出画面", "提出"],
      ["/evidence/portal-admin.jpeg", "提出率と未確認団体を把握する運営画面", "審査・進捗"],
    ],
  },
  {
    id: "reservation",
    number: "03",
    label: "RESERVATION SYSTEM",
    title: "中夜祭 先着エリア予約",
    statement: "希望エリアの予約と当日入場を同じデータで扱う。",
    tier: "SUPPORTING CASE / 03",
    primary: false,
    period: "2026.05 — 2026.07",
    role: "企画・要件整理・画面設計・実装（AI支援）",
    metrics: ["定員 907", "予約 613", "入場 560"],
    challenge: "定員のある会場で、エリアごとの残数を示しながら予約を受け付け、当日も同じ情報で入場管理する必要があった。",
    decision: "学校アカウントごとに1件、A〜Hの8エリアを先着順で予約する方式とし、QR付き予約情報を発行した。",
    reason: "抽選では結果確認が別工程になるため、残数を見ながら本人が選び、その場で予約を確定できる先着方式を選んだ。",
    result: "予約者613人のうち560人が入場した。エリア別データから、満席のB・C・D・Fと、空きの多いE・Hという需要差も確認できた。",
    limitation: "希望が特定エリアへ偏った。場所の魅力、見え方、案内方法など、選択理由まではデータから判断できていない。",
    tech: "Google Apps Script / HTML Service / Google スプレッドシート",
    techReason: "短期間の校内運用であり、学校アカウントと表データを直接利用できる構成を優先した。",
    flow: ["学校アカウント", "エリア選択", "先着で枠を確保", "QR発行", "当日受付"],
    images: [
      ["/evidence/middle-reservation-area.webp", "座席図と残り枠を見ながらA〜Hのエリアを選ぶ予約画面", "エリア選択"],
      ["/evidence/middle-festival-dashboard.jpeg", "予約数、入場数、残り枠とエリア別状況を示す管理画面", "運用データ"],
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
    challenge: "2024年7月にSlackを提案したが、無料版では履歴を長期間参照しにくく、過去の決定や資料を探す用途に合わなかった。",
    decision: "2025年4月にDiscordへの移行を提案し、行事、タスク、資料、権限ごとにチャンネルを設計した。",
    reason: "連絡速度だけでなく、過去の判断と資料を後から検索できることを重視した。無料版Slackの履歴制限と比較し、継続的に参照できるDiscordを選んだ。",
    result: "過去の連絡を検索し、行事別に資料・担当・相談を整理できるようになった。Botで活動日程を通知する運用も追加した。",
    limitation: "分類を増やすほど、利用者が投稿先を迷う可能性がある。チャンネル整理と引き継ぎを継続する必要がある。",
    tech: "Discord / 権限設計 / Bot運用",
    techReason: "既存メンバーがスマートフォンから使え、チャンネル・権限・Botを一つの環境で管理できるため採用した。",
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
  ["04", "運用", "生徒会・実行委員と本番で使い、現場の例外へ対応する。"],
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
        <div><strong>1,422</strong><span>QR予約</span></div>
        <div><strong>1,043</strong><span>入場</span></div>
        <div><strong>54</strong><span>提出ポータル対象団体</span></div>
        <div><strong>44</strong><span>Discord参加者</span></div>
      </section>

      <section className="works section-shell" id="works">
        <div className="section-heading">
          <div><p className="section-kicker">SELECTED WORKS</p><h2>問いから作った、<br />4つの仕組み。</h2></div>
          <p>各作品は「課題 → 判断 → 実装・運用 → 結果 → 限界」の順で整理した。画像は実際の画面または当日の記録を使用している。</p>
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
          <p className="reflection-lead">情報を一か所へ集め、操作を簡単にしても、全員が見るわけではなかった。</p>
          <p>「見つけられない」「読んでも理解できない」「理解しても行動しない」は別の問題である。高校での制作は情報の経路を整えたが、人が情報を選び、意味づけ、行動する条件までは説明できていない。</p>
          <p>この限界から、技術だけではなく、社会調査とデータ分析を用いて情報と行動の関係を研究したいと考えるようになった。</p>
        </div>
      </section>

      <section className="future section-shell" id="future">
        <div className="future-title"><p className="section-kicker">WHY MUSASHI UNIVERSITY</p><h2>Design / Digital / Dataを、<br />社会の問いに接続する。</h2></div>
        <div className="research-question"><span>RESEARCH QUESTION</span><strong>なぜ、公開された情報を見ない・理解しない・行動に移さない人が生まれるのか。</strong></div>
        <div className="research-methods">
          <article><span>01</span><h3>聞き取る</h3><p>利用者へのインタビューとアンケートで、認識と選択理由を調べる。</p></article>
          <article><span>02</span><h3>計測する</h3><p>アクセス、操作、参加データを収集し、行動の変化を比較する。</p></article>
          <article><span>03</span><h3>作り直す</h3><p>UI、通知、制度を変えた試作を運用し、結果を検証する。</p></article>
        </div>
        <a className="official-link" href="https://www.musashi.ac.jp/faculty/sociology/social_design/curriculum.html" target="_blank" rel="noreferrer">情報社会デザイン専攻の学び ↗</a>
      </section>

      <section className="credits section-shell" id="credits">
        <div><p className="section-kicker">CREDITS / AI DISCLOSURE</p><h2>誰が、どこを担ったか。</h2></div>
        <div className="credit-grid">
          <article><span>越川颯人</span><p>課題発見、企画、要件決定、画面・運用設計、実装、最終判断。</p></article>
          <article><span>AI支援</span><p>ChatGPT・Claude Codeを、コード案、エラー調査、要件と文章の整理に使用。出力は本人が確認・修正した。</p></article>
          <article><span>生徒会・実行委員</span><p>QR受付、中夜祭受付、提出物の審査など、本番運用を共同で担当。</p></article>
          <article><span>共同制作</span><p>QR入場案内ポスターは2人で制作。作品ごとの関与範囲を明記する。</p></article>
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
          <a href="https://www.musashi.ac.jp/faculty/sociology/social_design/curriculum.html" target="_blank" rel="noreferrer"><span>ACADEMIC</span><strong>武蔵大学 情報社会デザイン専攻</strong><b>↗</b></a>
          <div className="influence-note"><span>VISUAL REFERENCES</span><p><a href="https://lea-lea.site/" target="_blank" rel="noreferrer">lea-lea.site</a> / <a href="https://hoshimachi-suisei.jp/" target="_blank" rel="noreferrer">hoshimachi-suisei.jp</a> / <a href="https://ashimfactory.com/" target="_blank" rel="noreferrer">ashimfactory.com</a> / <a href="https://katsura35.com/" target="_blank" rel="noreferrer">katsura35.com</a> を、余白、文字の強弱、作品の見せ方の参考にした。構成と内容は本ポートフォリオ用に再設計している。</p></div>
        </div>
      </section>

      <section className="presentation-cta section-shell">
        <div><p className="section-kicker">FOR INTERVIEW</p><h2>このサイトを使って、<br />制作意図を説明する。</h2></div>
        <p>発表用表示では、中心テーマ、主要2作品、限界、大学での問いだけを順番に表示する。</p>
        <a href="/presentation">発表用表示を開く <span>↗</span></a>
      </section>

      <footer className="site-footer section-shell">
        <strong>HAYATO KOSHIKAWA</strong><span>Information &amp; Social Design Portfolio / 2026</span><a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
