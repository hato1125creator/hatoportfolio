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
          <a href="/v2">v2を見る</a>
          <a href="/">旧版を見る</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>高校での制作と実践</p>
          <h1>情報は、<br />置くだけでは<br /><em>届かない。</em></h1>
          <p className={styles.lead}>必要な情報が、必要な人に届き、理解され、行動につながるところまでを考えてきた。</p>
          <p className={styles.intro}>生徒会活動の中で、受付、提出、情報発信、連絡がうまくつながらず、人が迷ったり止まったりする場面を何度も見た。そこで、画面だけでなくルールや運用まで含めて仕組みを作った。</p>
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
            <p>高校2年生で一度、招待コード方式を提案した。しかし、個人情報、安全性、誰でも使えるかという懸念があり実現しなかった。</p>
            <p>3年生で、生徒を学校メールで認証し、生徒が招待者を登録、招待者はリンクを開くだけでQRを表示できる方式へ再設計した。スマートフォンを持たない人には印刷対応も残した。</p>
            <p className={styles.quote}>便利さよりも、学校が責任を持って運用でき、来場者が迷わず使えることを優先した。</p>
          </div>
        </div>

        <div className={styles.metrics}>
          <div><span>招待</span><strong>1,422</strong><small>件</small></div>
          <div><span>実来場</span><strong>1,043</strong><small>人</small></div>
          <div><span>登録生徒</span><strong>991</strong><small>人</small></div>
        </div>

        <div className={styles.qrUi}>
          <div className={styles.qrUiText}>
            <h3>画面と運用を、同時に作った。</h3>
            <p>学校メールで認証し、生徒が招待者を登録。招待者はリンクからQRを表示し、当日は複数端末で受付する。実来場者数も記録として残せるようにした。</p>
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
        <div className={styles.sectionTitle}><p className={styles.kicker}>ほかの制作</p><h2>課題によって、見せ方も作り方も変えた。</h2></div>

        <article className={styles.portal}>
          <div className={styles.workCopy}><span>02</span><h3>梨花祭 統合管理ポータル</h3><p>32クラスと22部活動から集まる書類を、提出・確認・差し戻し・再提出まで一つの場所で追えるようにした。</p><p className={styles.workData}>54団体 / 5種類の書類 / 約3.5か月運用</p></div>
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
          <div className={styles.workCopy}><span>03</span><h3>梨花祭2026 特設Webサイト</h3><p>紙パンフレットではできなかった検索、カテゴリー絞り込み、構内図、タイムライン、当日の情報更新をWebで実現した。</p><p className={styles.workData}>本番1,091人 / トップ17,294表示 / 構内図857表示</p><p className={styles.note}>「おとぎの国」のモチーフイラストは別の生徒が制作。Web上の配置とカラーパレット設計を担当した。</p><a href="https://rikasai2026-site-tokusetu.vercel.app/" target="_blank" rel="noreferrer">実際のサイトを見る ↗</a></div>
        </article>

        <article className={styles.discord}>
          <div className={styles.workCopy}><span>04</span><h3>生徒会 Discord情報基盤</h3><p>LINEでは流れてしまう連絡を、行事、タスク、資料、権限ごとに整理し、後から検索できる情報へ変えた。</p><p>新しいシステムを作ることが目的ではなく、既存サービスを課題に合わせて選び直し、44人で継続運用できる形を作った。</p></div>
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
          <p>QR入場管理では説明動画を公開しても、当日にQRの表示方法が分からない来場者がいた。Webサイトを作っても、必要な情報に全員が到達するとは限らない。</p>
          <div className={styles.questions}><p><b>見つけられない</b><span>そもそも情報との接点がない。</span></p><p><b>理解できない</b><span>同じ情報でも背景知識によって受け取り方が変わる。</span></p><p><b>行動しない</b><span>理解しても、参加や利用につながらないことがある。</span></p></div>
        </div>
      </section>

      <section className={styles.musashi} id="musashi">
        <div className={styles.musashiHead}><p className={styles.kicker}>武蔵大学で探究したいこと</p><h2>学校で見つけた問いを、地域・行政へ。</h2></div>
        <div className={styles.researchQuestion}><span>研究したい問い</span><p>行政情報を普段見ない人にも必要な情報が届き、必要な背景を理解した上で、自分の意見を表明できる仕組みをどう設計できるか。</p></div>
        <div className={styles.researchSteps}><div><b>聞き取る</b><p>インタビュー、フィールドワーク、アンケートで、どこで情報が止まるかを調べる。</p></div><div><b>確かめる</b><p>到達、閲覧、理解、意見提出までをデータで見る。</p></div><div><b>作って検証する</b><p>調査結果を情報サービスとして試作し、実際に使って確かめる。</p></div></div>
        <p className={styles.future}>卒業後は、民間企業の立場から、行政と住民をつなぐ情報サービスや情報基盤の設計・開発に携わりたい。</p>
      </section>

      <footer className={styles.footer}>
        <div><b>越川颯人</b><span>千葉英和高等学校 / 2026</span></div>
        <div><a href="/">旧版</a><a href="/v2">v2</a><a href="/presentation">発表用表示</a><a href="#top">ページ上部へ ↑</a></div>
      </footer>
    </main>
  );
}
