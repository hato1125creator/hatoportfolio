import styles from "./v3.module.css";

export default function PortfolioV3() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <div>
          <strong>越川颯人</strong>
          <span>オンラインポートフォリオ / 2026</span>
        </div>
        <nav>
          <a href="#qr">QR入場管理</a>
          <a href="#works">制作物</a>
          <a href="#question">残った問い</a>
          <a href="#musashi">武蔵大学で</a>
          <a className={styles.presentationLink} href="/presentation">発表用表示 ↗</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>高校での制作と実践</p>
          <h1>情報は、<br />置くだけでは<br /><em>届かない。</em></h1>
          <p className={styles.lead}>情報が届き、理解され、行動につながるところまでを考えてきた。</p>
          <p className={styles.intro}>生徒会活動の中で、受付、提出、情報発信、連絡がうまくつながらず、人が迷ったり止まったりする場面を見た。そこで、画面だけでなくルールや運用まで含めて仕組みを作った。</p>
          <div className={styles.identity}><span>千葉英和高等学校 3年</span><b>越川 颯人</b></div>
        </div>
        <div className={styles.heroMedia}>
          <figure className={styles.heroMain}><img src="/evidence/qr-reception-field.jpg" alt="梨花祭当日のQR入場受付" /><figcaption>梨花祭当日のQR入場受付</figcaption></figure>
          <div className={styles.heroSide}>
            <figure><img src="/evidence/qr-admin-dashboard.jpg" alt="QR入場管理の管理画面" /><figcaption>当日の管理画面</figcaption></figure>
            <figure><img src="/evidence/qr-student-dashboard-login.webp" alt="生徒向けログイン画面" /><figcaption>生徒向けログイン</figcaption></figure>
          </div>
        </div>
      </section>

      <section className={styles.qr} id="qr">
        <div className={styles.sectionTitle}>
          <p className={styles.kicker}>代表作品</p>
          <h2>QR入場管理</h2>
          <p>紙の招待券と名簿照合で発生していた長い列を、招待から受付・集計まで一つの流れとして作り直した。</p>
        </div>

        <div className={styles.storyGrid}>
          <figure className={styles.storyImage}><img src="/evidence/qr-reception-field.jpg" alt="文化祭当日の受付の様子" /></figure>
          <div className={styles.storyText}>
            <p>高校2年生で一度提案した招待コード方式は、個人情報、安全性、誰でも使えるかという懸念から実現しなかった。</p>
            <p>3年生で、学校メールによる生徒認証と、生徒が招待者を登録する方式へ再設計。招待者はリンクからQRを表示でき、スマートフォンを持たない人には印刷対応も残した。</p>
            <p className={styles.quote}>便利さよりも、学校が責任を持って運用でき、来場者が迷わず使えることを優先した。</p>
          </div>
        </div>

        <div className={styles.metrics}>
          <div><span>招待</span><strong>1,422</strong><small>件</small></div>
          <div><span>実来場</span><strong>1,043</strong><small>人</small></div>
          <div><span>登録生徒</span><strong>991</strong><small>人</small></div>
        </div>
        <p className={styles.metaLine}>制作・運用：2025.09–2026.07　／　担当：課題発見・企画・要件整理・UI設計・実装・DB設計・当日運用</p>

        <div className={styles.qrUi}>
          <div className={styles.qrUiText}>
            <h3>画面と運用を、同時に作った。</h3>
            <p>登録、招待、QR提示、当日受付、集計を一つにつなげ、複数端末から同じ記録を扱えるようにした。</p>
            <ol>
              <li><b>01</b>学校メールで認証</li>
              <li><b>02</b>招待者を登録</li>
              <li><b>03</b>招待リンク・QR発行</li>
              <li><b>04</b>複数端末で受付</li>
              <li><b>05</b>入場記録・集計</li>
            </ol>
          </div>
          <div className={styles.qrUiImages}>
            <figure className={styles.phoneShot}><img src="/evidence/qr-student-dashboard-login.webp" alt="学校メール認証画面" /></figure>
            <figure className={styles.dashboardShot}><img src="/evidence/qr-admin-dashboard.jpg" alt="入場数を確認する管理画面" /></figure>
          </div>
        </div>
      </section>

      <section className={styles.works} id="works">
        <div className={styles.sectionTitle}><p className={styles.kicker}>ほかの制作</p><h2>課題に合わせて、仕組みを変えた。</h2></div>

        <article className={styles.portal}>
          <div className={styles.workCopy}><span>02</span><h3>梨花祭 統合管理ポータル</h3><p>32クラスと22部活動から集まる書類を、提出・確認・差し戻し・再提出まで一つの場所で追えるようにした。</p><p className={styles.workData}>54団体 / 5種類の書類 / 約3.5か月運用</p><p className={styles.workTech}>Google Apps Script / Google スプレッドシート / Google Drive</p></div>
          <div className={styles.portalFlow}>
            <figure className={styles.portalPhone}><img src="/evidence/portal-home-mobile.png" alt="提出ポータルの入口" /><figcaption>入口</figcaption></figure>
            <figure className={styles.portalForm}><img src="/evidence/portal-form.jpeg" alt="書類提出画面" /><figcaption>提出</figcaption></figure>
            <figure className={styles.portalAdmin}><img src="/evidence/portal-admin.jpeg" alt="提出状況の管理画面" /><figcaption>審査・進捗</figcaption></figure>
          </div>
        </article>

        <article className={styles.festival}>
          <div className={styles.festivalVisual}>
            <div className={styles.browserBar}><span></span><span></span><span></span><b>梨花祭2026 特設Webサイト</b></div>
            <iframe src="https://rikasai2026-site-tokusetu.vercel.app/" title="梨花祭2026 特設Webサイト" loading="lazy" />
          </div>
          <div className={styles.workCopy}><span>03</span><h3>梨花祭2026 特設Webサイト</h3><p>検索、カテゴリー絞り込み、構内図、タイムライン、当日の情報更新をWebで実現した。</p><p className={styles.workData}>本番1,091人 / トップ17,294表示 / 構内図857表示</p><p className={styles.workTech}>Next.js / TypeScript / Prisma / Vercel</p><p className={styles.note}>「おとぎの国」のモチーフイラストは別の生徒が制作。Web上の配置とカラーパレット設計を担当した。</p><a href="https://rikasai2026-site-tokusetu.vercel.app/" target="_blank" rel="noreferrer">実際のサイトを見る ↗</a></div>
        </article>

        <article className={styles.discord}>
          <div className={styles.workCopy}><span>04</span><h3>生徒会 Discord情報基盤</h3><p>LINEでは流れてしまう連絡を、行事、タスク、資料、権限ごとに整理し、後から検索できる情報へ変えた。</p><p>既存サービスを課題に合わせて選び直し、44人で継続運用できる形を作った。</p><p className={styles.workTech}>Discord / 権限設計 / Bot運用</p></div>
          <div className={styles.discordVisuals}>
            <figure className={styles.discordMain}><img src="/evidence/discord-channel-structure.png" alt="Discordのチャンネル構成" /><figcaption>チャンネル構成</figcaption></figure>
            <figure className={styles.discordSub}><img src="/evidence/discord-project-forum.png" alt="Discordのフォーラム" /><figcaption>フォーラム運用</figcaption></figure>
          </div>
        </article>
      </section>

      <section className={styles.question} id="question">
        <div><p className={styles.kicker}>制作を通して残った問い</p><h2>それでも、<br />見ない人は残った。</h2></div>
        <div className={styles.questionBody}>
          <p className={styles.questionLead}>仕組みを整え、説明を用意しても、情報を見ない人や、使い方が分からない人はいた。</p>
          <p>QR入場管理では説明動画を公開しても、当日にQRの表示方法が分からない来場者がいた。Web化しても、必要な情報に全員が到達するとは限らない。</p>
          <div className={styles.questions}><p><b>見つけられない</b><span>そもそも情報との接点がない。</span></p><p><b>理解できない</b><span>背景知識によって受け取り方が変わる。</span></p><p><b>行動しない</b><span>理解しても、参加や利用につながらない。</span></p></div>
          <p className={styles.civicBridge}>さらに、八千代市の高校生魅力発信大使として行政の情報発信に関わる中で、この問題は学校の中だけではないのではないかと考えるようになった。学校で見つけた「届かない」という問いを、地域や行政でも確かめたい。</p>
        </div>
      </section>

      <section className={styles.musashi} id="musashi">
        <div className={styles.musashiHead}><p className={styles.kicker}>武蔵大学で探究したいこと</p><h2>学校で見つけた問いを、地域・行政へ。</h2></div>
        <div className={styles.researchQuestion}><span>研究したい問い</span><p>行政情報を普段見ない人にも必要な情報が届き、必要な背景を理解した上で、自分の意見を表明できる仕組みをどう設計できるか。</p></div>
        <div className={styles.researchSteps}><div><b>聞き取る</b><p>インタビューやフィールドワークで、どこで情報が止まるかを調べる。</p></div><div><b>確かめる</b><p>到達、閲覧、理解、意見提出までをデータで見る。</p></div><div><b>作って検証する</b><p>調査結果を情報サービスとして試作し、使われ方を確かめる。</p></div></div>
        <div className={styles.seminarFocus}>
          <span>具体的に深めたい学び</span>
          <div>
            <b>新井庭子ゼミ ─ 情報の可視化と調査</b>
            <p>テキストマイニングやデータの可視化を通して、住民の意見や情報への接触状況を分析し、「誰に何が届いていないのか」を確かめ、その結果を情報設計へ戻す方法を学びたい。</p>
            <a href="https://www.musashi.ac.jp/faculty/sociology/social_design/seminar_list.html" target="_blank" rel="noreferrer">2027年度 ゼミ一覧 ↗</a>
          </div>
        </div>
        <p className={styles.future}>卒業後は、民間企業の立場から、行政と住民をつなぐ情報サービスや情報基盤の設計・開発に携わりたい。</p>
        <a className={styles.musashiLink} href="https://www.musashi.ac.jp/faculty/sociology/social_design/curriculum.html" target="_blank" rel="noreferrer">情報社会デザイン専攻の学び ↗</a>
      </section>

      <section className={styles.credits} id="credits">
        <div className={styles.creditsHead}><p className={styles.kicker}>制作体制・AI利用</p><h2>本人が判断し、AIを補助に使った。</h2></div>
        <div className={styles.creditGrid}>
          <div><b>越川颯人</b><p>課題発見、企画、要件決定、画面・運用設計、実装、関係者との調整、最終判断を担当。</p></div>
          <div><b>AI支援</b><p>ChatGPT・Claude Codeを、コード案、エラー調査、要件と文章の整理に使用。出力は本人が確認・修正した。</p></div>
          <div><b>共同運用・素材</b><p>受付や審査、安全管理は生徒会・実行委員・教員と共同で運用。特設サイトのモチーフイラストは別の生徒が制作した。</p></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><b>越川颯人</b><span>千葉英和高等学校 / 2026</span></div>
        <div><a href="/presentation">発表用表示</a><a href="#top">ページ上部へ ↑</a></div>
      </footer>
    </main>
  );
}
