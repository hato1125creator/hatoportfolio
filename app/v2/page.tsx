import styles from "./v2.module.css";

const festivalHero = "https://raw.githubusercontent.com/chiba-eiwa-seitokai/rikasai2026.site.tokusetu/main/public/hero.png";
const festivalMap = "https://raw.githubusercontent.com/chiba-eiwa-seitokai/rikasai2026.site.tokusetu/main/public/map.webp";

export default function PortfolioV2() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <strong>越川颯人</strong>
          <span>情報設計ポートフォリオ / 2024—2026</span>
        </div>
        <nav>
          <a href="#qr">QR入場管理</a>
          <a href="#works">制作物</a>
          <a href="#question">残った問い</a>
          <a href="#musashi">武蔵大学で</a>
          <a className={styles.oldLink} href="/">旧版を見る ↗</a>
        </nav>
      </header>

      <section className={styles.opening}>
        <div className={styles.openingCopy}>
          <p className={styles.kicker}>高校3年間の制作と実践</p>
          <h1>情報は、<br />置くだけでは<br /><em>届かない。</em></h1>
          <p className={styles.lead}>必要な情報が、必要な人に届いて、理解され、行動につながるところまでを考えてきた。</p>
          <p className={styles.intro}>生徒会活動では、受付、提出、情報発信、連絡の中で「情報はあるのに、人が動けない」場面に何度も出会った。そこで、画面だけではなく、ルールや運用まで含めて仕組みを作った。</p>
          <div className={styles.identity}><span>千葉英和高等学校 3年</span><b>越川 颯人</b></div>
        </div>

        <div className={styles.openingCollage}>
          <figure className={styles.receptionPhoto}>
            <img src="/evidence/qr-reception-field.jpg" alt="梨花祭当日のQR入場受付" />
            <figcaption>梨花祭当日の入場受付</figcaption>
          </figure>
          <figure className={styles.dashboardPhoto}>
            <img src="/evidence/qr-admin-dashboard.jpg" alt="QR入場管理の管理画面" />
            <figcaption>当日の管理画面</figcaption>
          </figure>
          <figure className={styles.loginPhoto}>
            <img src="/evidence/qr-student-dashboard-login.webp" alt="生徒向けログイン画面" />
            <figcaption>生徒向けログイン</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.qrCase} id="qr">
        <div className={styles.qrIntro}>
          <p className={styles.kicker}>代表作品</p>
          <h2>QR入場管理</h2>
          <p className={styles.subline}>紙の招待券と名簿照合で起きていた長い列を、招待から受付、集計まで一つの流れとして作り直した。</p>
        </div>

        <div className={styles.qrStory}>
          <div className={styles.bigPhoto}>
            <img src="/evidence/qr-reception-field.jpg" alt="文化祭当日の受付の様子" />
          </div>
          <div className={styles.storyText}>
            <p>高校2年生で一度、招待コード方式を提案した。しかし、個人情報、安全性、誰でも使えるかという懸念があり実現しなかった。</p>
            <p>3年生で、生徒を学校メールで認証し、生徒が招待者を登録、招待者はリンクを開くだけでQRを表示できる方式へ再設計した。スマートフォンを持たない人には印刷対応も残した。</p>
            <blockquote>「便利な画面を作る」より、学校が責任を持って運用でき、来場者が迷わず使えることを優先した。</blockquote>
          </div>
        </div>

        <div className={styles.qrEvidence}>
          <div className={styles.metric}><span>招待</span><strong>1,422</strong><small>件</small></div>
          <div className={styles.metric}><span>実来場</span><strong>1,043</strong><small>人</small></div>
          <div className={styles.metric}><span>登録生徒</span><strong>991</strong><small>人</small></div>
          <div className={styles.qrDashboard}><img src="/evidence/qr-admin-dashboard.jpg" alt="入場数を確認する管理画面" /></div>
        </div>

        <div className={styles.qrFlow}>
          <div><span>01</span><b>学校メールで認証</b><img src="/evidence/qr-student-dashboard-login.webp" alt="学校メール認証" /></div>
          <div><span>02</span><b>招待者を登録</b><p>生徒側で招待者を登録し、招待リンクを発行。</p></div>
          <div><span>03</span><b>QRを提示</b><p>招待者はリンクからQRを表示。印刷でも対応。</p></div>
          <div><span>04</span><b>複数端末で受付</b><img src="/evidence/qr-reception-field.jpg" alt="当日の受付" /></div>
          <div><span>05</span><b>来場を記録</b><p>誰が実際に来場したかをデータとして残す。</p></div>
        </div>
      </section>

      <section className={styles.works} id="works">
        <div className={styles.worksHeading}>
          <p className={styles.kicker}>ほかの制作</p>
          <h2>同じ方法ではなく、<br />課題に合わせて作った。</h2>
        </div>

        <article className={styles.portalWork}>
          <div className={styles.portalText}>
            <span className={styles.workNo}>02</span>
            <h3>梨花祭 統合管理ポータル</h3>
            <p>32クラスと22部活動から集まる書類を、提出、確認、差し戻し、再提出まで一つの場所で追えるようにした。</p>
            <dl><div><dt>対象</dt><dd>54団体</dd></div><div><dt>書類</dt><dd>5種類</dd></div><div><dt>運用</dt><dd>約3.5か月</dd></div></dl>
          </div>
          <div className={styles.portalFlow}>
            <figure><img src="/evidence/portal-home-mobile.png" alt="提出ポータルの入口" /><figcaption>入口</figcaption></figure>
            <i>→</i>
            <figure><img src="/evidence/portal-form.jpeg" alt="書類提出画面" /><figcaption>提出</figcaption></figure>
            <i>→</i>
            <figure><img src="/evidence/portal-admin.jpeg" alt="管理画面" /><figcaption>審査・進捗</figcaption></figure>
          </div>
        </article>

        <article className={styles.festivalWork}>
          <div className={styles.festivalBrowser}>
            <div className={styles.browserBar}><span></span><span></span><span></span><b>rikasai2026-site-tokusetu.vercel.app</b></div>
            <img src={festivalHero} alt="梨花祭2026特設Webサイトのメインビジュアル" />
          </div>
          <div className={styles.festivalCopy}>
            <span className={styles.workNo}>03</span>
            <h3>梨花祭2026<br />特設Webサイト</h3>
            <p>紙パンフレットではできなかった検索、カテゴリー絞り込み、構内図、タイムライン、当日の情報更新をWebで実現した。</p>
            <div className={styles.festivalStats}><b>1,091<small> 本番利用者</small></b><b>17,294<small> トップ表示</small></b><b>857<small> 構内図表示</small></b></div>
            <p className={styles.credit}>「おとぎの国」のモチーフイラストは別の生徒が制作。Web上の配置とカラーパレット設計を担当した。</p>
            <a href="https://rikasai2026-site-tokusetu.vercel.app/" target="_blank" rel="noreferrer">実際のサイトを見る ↗</a>
          </div>
          <figure className={styles.mapPiece}><img src={festivalMap} alt="梨花祭の構内図" /><figcaption>来場者向け構内図</figcaption></figure>
        </article>

        <article className={styles.discordWork}>
          <div className={styles.discordCopy}>
            <span className={styles.workNo}>04</span>
            <h3>生徒会 Discord情報基盤</h3>
            <p>LINEでは流れてしまう連絡を、行事、タスク、資料、権限ごとに整理し、後から検索できる情報へ変えた。</p>
            <p>新しいシステムを作ることが目的ではなく、既存サービスを課題に合わせて選び直し、44人で継続運用できる形を作った。</p>
          </div>
          <div className={styles.discordShots}>
            <figure><img src="/evidence/discord-channel-structure.png" alt="Discordのチャンネル構成" /><figcaption>チャンネル構成</figcaption></figure>
            <figure><img src="/evidence/discord-project-forum.png" alt="Discordのフォーラム" /><figcaption>検索できる記録</figcaption></figure>
          </div>
        </article>
      </section>

      <section className={styles.question} id="question">
        <div className={styles.questionTitle}>
          <p className={styles.kicker}>制作を通して残った問い</p>
          <h2>それでも、<br />見ない人は残った。</h2>
        </div>
        <div className={styles.questionBody}>
          <p className={styles.questionLead}>仕組みを整え、説明を用意しても、情報を見ない人や、使い方が分からない人はいた。</p>
          <p>QR入場管理では説明動画を公開しても、当日にQRの表示方法が分からない来場者がいた。Webサイトを作っても、必要な情報に全員が到達するとは限らない。</p>
          <div className={styles.openQuestions}>
            <p><b>見つけられない</b><span>そもそも情報との接点がない。</span></p>
            <p><b>理解できない</b><span>同じ情報でも背景知識によって受け取り方が変わる。</span></p>
            <p><b>行動しない</b><span>理解しても、参加や利用につながらないことがある。</span></p>
          </div>
        </div>
      </section>

      <section className={styles.musashi} id="musashi">
        <div className={styles.musashiHead}>
          <p className={styles.kicker}>武蔵大学で探究したいこと</p>
          <h2>学校で見つけた問いを、<br />地域・行政へ。</h2>
        </div>
        <div className={styles.researchQuestion}>
          <span>研究したい問い</span>
          <p>行政情報を普段見ない人にも必要な情報が届き、必要な背景を理解した上で、自分の意見を表明できる仕組みをどう設計できるか。</p>
        </div>
        <div className={styles.researchPath}>
          <p><b>聞き取る</b><span>インタビュー、フィールドワーク、アンケートで、どこで情報が止まるかを調べる。</span></p>
          <p><b>確かめる</b><span>到達、閲覧、理解、意見提出までをデータで見る。</span></p>
          <p><b>作って検証する</b><span>調査結果を情報サービスとして試作し、実際に使って確かめる。</span></p>
        </div>
        <p className={styles.future}>卒業後は、民間企業の立場から、行政と住民をつなぐ情報サービスや情報基盤の設計・開発に携わりたい。</p>
      </section>

      <footer className={styles.footer}>
        <div><b>越川颯人</b><span>千葉英和高等学校 / 2026</span></div>
        <div><a href="/">旧版ポートフォリオ</a><a href="/presentation">発表用表示</a><a href="#top">ページ上部へ ↑</a></div>
      </footer>
    </main>
  );
}
