import styles from "./v3.module.css";
import "./final.css";

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
            <p>従来は、生徒が招待者名を紙で提出し、学校が集約して紙の招待券を配布。当日は招待券と名簿を照合していた。バス到着時などに受付が混み、7月の暑さに加えて、部活動の発表に間に合わない来場者もいた。</p>
            <p>高校2年生の2025年3月ごろから動く試作版を作り、招待コード方式を提案したが、個人情報、不正利用・安全性、スマートフォンを使えない人への対応に加え、教員への事前調整・合意形成が不足しており、本番導入には至らなかった。</p>
            <p>3年生では、受付改善の必要性を説明して理解を得ながら、学校メールへの認証コード送信による本人確認、生徒が招待者名を登録して固有リンクを発行する方式、印刷対応、招待枠の譲渡機能などへ再設計した。</p>
            <p className={styles.quote}>必要性を共有し、指摘されたデメリットを仕様と運用で一つずつ減らして、学校で使える形にした。</p>
          </div>
        </div>

        <div className="qr-flow-editorial">
          <div className="qr-flow-head">
            <p>実際の利用の流れ</p>
            <h3>画面ではなく、<br />人の行動単位で設計した。</h3>
            <p>「生徒が招待する」「来場者に届く」「受付する」「運営が把握する」の4場面で、画面遷移と設計意図を追えるようにした。</p>
          </div>

          <article className="qr-flow-stage">
            <div className="qr-flow-copy">
              <span>01 / 生徒</span>
              <h4>本人確認から、招待リンク発行まで。</h4>
              <p>学校メールへ認証コードを送り、在校生本人だけが利用できるようにした。その後、生徒が招待者名を入力し、相手ごとの固有リンクを発行する。</p>
              <div className="qr-flow-point"><b>ここがポイント</b><p>学校が管理するメールアドレスを入口にして、2年時に指摘された不正利用への懸念を減らした。</p></div>
            </div>
            <div className="qr-flow-visual-pair">
              <figure className="qr-flow-screen"><img src="/evidence/qr-student-dashboard-login.webp" alt="学校メール認証の生徒ログイン画面" /><figcaption>学校メール＋認証コードで本人確認</figcaption></figure>
              <figure className="qr-flow-screen"><img src="/evidence/qr-flow-invite.webp" alt="招待者名を入力してリンクを発行する画面" /><figcaption>招待者名を登録して固有リンクを発行</figcaption></figure>
            </div>
          </article>

          <article className="qr-flow-stage qr-flow-stage-reverse">
            <figure className="qr-flow-screen qr-flow-ticket"><img src="/evidence/qr-flow-ticket-safe.webp" alt="来場者側に表示される入場QR画面" /><figcaption>来場者は届いたリンクを開くだけでQRを表示</figcaption></figure>
            <div className="qr-flow-copy">
              <span>02 / 来場者</span>
              <h4>入力させず、届いたリンクを開くだけ。</h4>
              <p>招待者の情報は生徒側で登録するため、来場者は氏名やメールアドレスを入力しない。LINEなどで届いたリンクを開くと、その人の入場QRが表示される。</p>
              <div className="qr-flow-point"><b>ここがポイント</b><p>当日の通信混雑も想定し、チケット画像を事前保存できるようにした。受付時には画面を明るくする操作も用意した。</p></div>
              <p className="qr-flow-security-note">※掲載画像のQR部分は公開用に無効化している。</p>
            </div>
          </article>

          <article className="qr-flow-stage">
            <div className="qr-flow-copy">
              <span>03 / 受付スタッフ</span>
              <h4>読む。確認する。記録する。</h4>
              <p>学校のChromebookを複数台使い、来場者のQRを読み取ると入場記録を同じデータベースへ即時反映する。</p>
              <div className="qr-flow-point"><b>ここがポイント</b><p>同じQRの再提示は「入場済み」と判定。QRが読めない場合は、招待した生徒の名前から検索・照合する手順も事前に用意した。</p></div>
            </div>
            <div className="qr-flow-reception-grid">
              <figure className="qr-flow-screen qr-flow-field"><img src="/evidence/qr-field-scan.webp" alt="来場者のスマートフォンを受付カメラにかざしている様子" /><figcaption>来場者のQRを実際の受付カメラで読み取る</figcaption></figure>
              <figure className="qr-flow-screen qr-flow-scan-panel"><img src="/evidence/qr-flow-scan.webp" alt="QRコードを読み取る受付画面" /><figcaption>受付画面には読み取り手順とトラブル時の対応も表示</figcaption></figure>
            </div>
          </article>

          <article className="qr-flow-stage qr-flow-stage-reverse qr-flow-stage-ops">
            <div className="qr-flow-ops-visual">
              <figure className="qr-flow-screen"><img src="/evidence/qr-ops-time.webp" alt="入場状況分布と時間帯別入場者数のグラフ" /><figcaption>入場状況と時間帯別の動きを可視化</figcaption></figure>
              <figure className="qr-flow-screen"><img src="/evidence/qr-ops-class.webp" alt="クラス別の招待・入場状況を示すグラフ" /><figcaption>クラス単位でも招待・入場状況を確認</figcaption></figure>
            </div>
            <div className="qr-flow-copy">
              <span>04 / 学校・運営</span>
              <h4>受付を、集計にもつなげた。</h4>
              <p>入場処理を別途集計し直すのではなく、受付時の記録から現在の入場状況や時間帯別の人数、招待者ごとの状態を確認できるようにした。</p>
              <div className="qr-flow-point"><b>誰の何を解決したか</b><p>受付状況をその場で把握しにくかった運営側が、同じデータベースから入場状況を確認できるようになった。</p></div>
            </div>
          </article>
        </div>

        <div className="qr-impact">
          <div className="qr-impact-head"><span>結果として</span><h3>4者の行動を、一つの流れにした。</h3></div>
          <div className="qr-impact-row"><b>来場者</b><p><span>困っていたこと</span>受付で長く待ち、見たい発表に間に合わないことがあった</p><i>→</i><p><span>変えたこと</span>QRを提示する受付へ。受付開始後は前年のような長い待機列がほぼ発生しなかった</p></div>
          <div className="qr-impact-row"><b>生徒</b><p><span>困っていたこと</span>紙の招待券を受け取り、相手に直接渡す必要があった</p><i>→</i><p><span>変えたこと</span>招待者名を登録し、LINEなどで固有リンクを送れるようにした</p></div>
          <div className="qr-impact-row"><b>受付スタッフ</b><p><span>困っていたこと</span>紙の名簿から招待者を探して照合していた</p><i>→</i><p><span>変えたこと</span>QRで照合と入場記録を行い、例外時だけ検索・手動確認する流れにした</p></div>
          <div className="qr-impact-row"><b>学校・運営</b><p><span>困っていたこと</span>入場状況をその場で把握しにくかった</p><i>→</i><p><span>変えたこと</span>複数端末の記録を同じDBへ集め、人数や時間帯別状況を確認できるようにした</p></div>
        </div>

        <div className={styles.metrics}>
          <div><span>招待者登録</span><strong>1,422</strong><small>件</small></div>
          <div><span>一般招待QR入場</span><strong>1,043</strong><small>人</small></div>
          <div><span>登録生徒</span><strong>991</strong><small>人 / 対象1,119人</small></div>
        </div>
        <p className="v3-result-line"><b>結果：</b>受付開始前には開始を待つ列ができたが、受付を始めると流れ、前年のような長い受付待ちの列はほぼ発生しなかった。本番中にシステム停止による紙受付への切り替えはなく、一般招待QRで1,043人の入場を記録した。</p>
        <p className="v3-issue-line"><b>残った課題：</b>説明動画を公開していても、当日にQRの表示方法が分からない人やQRを読み取れない人はいた。また、最終的に招待者名が登録されていた1,422件のうち379件は入場記録がなく、その理由までは区別できていない。</p>
        <p className={styles.metaLine}>制作・運用：2025.03–2026.07　／　担当：課題発見・企画・教員との調整・要件決定・UI設計・AIを用いた実装・DB設計・実証テスト・当日運用</p>
        <p className={styles.metaLine}>技術：HTML / CSS / JavaScript / Node.js / Express / PostgreSQL（Supabase） / html5-qrcode / Nodemailer（Gmail SMTP） / Vercel</p>
      </section>

      <section className={styles.works} id="works">
        <div className={styles.sectionTitle}><p className={styles.kicker}>ほかの制作</p><h2>課題に合わせて、仕組みを変えた。</h2></div>

        <article className={styles.portal}>
          <div className={styles.workCopy}>
            <span>提出管理</span>
            <h3>梨花祭 統合管理ポータル</h3>
            <p>32クラスと22部活動を対象に、書類の提出・確認・差し戻し・再提出を一つの場所で追えるようにした。1団体が別団体と合併したため、実運用上の提出単位は53団体となった。</p>
            <p className={styles.workData}>対象54団体（実運用53団体） / 5種類の書類 / 約3.5か月運用</p>
            <p className="v3-work-result">実運用上の53団体すべてが少なくとも1回はポータル経由で提出した。5種類の書類のうち企画書は全団体必須とし、提出ファイルはGoogle Driveへ自動保存。未提出団体の把握、催促文の作成、差し戻し・再提出の確認を同じ流れで行えるようにした。</p>
            <p className="v3-work-issue"><b>残った課題：</b>説明PDFや動画を用意しても、提出方法やファイル添付で迷う利用者がいた。案内を増やすだけでなく、画面自体をさらに単純にする必要がある。</p>
            <p className={styles.workTech}>Google Apps Script / Google スプレッドシート / Google Drive</p>
          </div>
          <div className={styles.portalFlow}>
            <figure><img src="/evidence/portal-home-mobile.png" alt="提出ポータルの入口" /><figcaption>入口</figcaption></figure>
            <figure><img src="/evidence/portal-form.jpeg" alt="書類提出画面" /><figcaption>提出</figcaption></figure>
            <figure className={styles.portalAdmin}><img src="/evidence/portal-admin.jpeg" alt="提出状況の管理画面" /><figcaption>審査・進捗</figcaption></figure>
          </div>
        </article>

        <article className={styles.festival}>
          <div className={styles.festivalVisual}>
            <div className={styles.browserBar}><span></span><span></span><span></span><b>梨花祭2026 特設Webサイト</b></div>
            <iframe src="https://rikasai2026-site-tokusetu.vercel.app/" title="梨花祭2026 特設Webサイト" loading="lazy" />
          </div>
          <div className={styles.workCopy}>
            <span>情報発信</span>
            <h3>梨花祭2026 特設Webサイト</h3>
            <p>検索、カテゴリー絞り込み、構内図、タイムライン、お知らせ、当日の情報更新をWebで実現した。必要な機能とカラーパレットは自分で決めた。</p>
            <p className={styles.workData}>本番（7/17–18）GA4アクティブユーザー1,091人 / トップ（7/6–19）17,294表示 / 構内図（7/6–19）857表示</p>
            <p className="v3-work-issue"><b>残った課題：</b>Web化しても、必要な情報に全員が到達したとは限らない。検索や導線のどこで離脱するのかを、利用データと聞き取りから確かめたい。</p>
            <p className={styles.workTech}>Next.js / TypeScript / Prisma / PostgreSQL（Supabase） / Vercel / Vercel Analytics / Google Analytics 4 / Google Tag Manager</p>
            <p className={styles.note}>「おとぎの国」のモチーフイラストは別の生徒が制作。構成案はCodexで検討し、トップページのみChatGPT Image 2で複数の完成デザイン案を生成して、本人が選択・修正指示した。実装時は実際の写真・素材へ差し替え、トップ以外は完成デザイン画像を生成せずコード上で調整した。</p>
            <a href="https://rikasai2026-site-tokusetu.vercel.app/" target="_blank" rel="noreferrer">実際のサイトを見る ↗</a>
          </div>
        </article>

        <article className={styles.discord}>
          <div className={styles.workCopy}>
            <span>情報共有</span>
            <h3>生徒会 Discord情報基盤</h3>
            <p>LINEでは流れてしまう連絡を、行事、タスク、資料、権限ごとに整理し、後から検索できる情報へ変えた。Slackも検討したが、無料プランの履歴制限などを踏まえてDiscordを選んだ。</p>
            <p>2024年7月ごろから情報共有の改善を始め、2025年4月にDiscordへ移行。生徒会メンバーと運営ボランティアを合わせた44人で継続運用した。</p>
            <p className="v3-work-result">過去の連絡を検索し、行事ごとに資料・担当・相談を整理できるようになった。権限ごとに閲覧範囲を分けたことで、生徒会以外の運営ボランティアも必要な範囲だけ参加できるようにした。</p>
            <p className="v3-work-issue"><b>残った課題：</b>分類を増やすほど投稿先が分かりにくくなる。チャンネル整理と次年度への引き継ぎを継続して改善する必要がある。</p>
            <p className={styles.workTech}>Discord / 権限設計 / Bot運用（活動日程・予定通知）</p>
          </div>
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
          <p>QR入場管理では説明動画を公開しても、当日にQRの表示方法が分からない来場者がいた。Web化しても、必要な情報に全員が到達するとは限らない。そこで、自分の経験から「届かない」状態を仮に3段階に整理した。</p>
          <div className={styles.questions}>
            <p><b>見つけられない</b><span>そもそも情報との接点がない。</span></p>
            <p><b>理解できない</b><span>背景知識によって受け取り方が変わる。</span></p>
            <p><b>行動につながらない</b><span>理解しても、参加や利用につながらない。</span></p>
          </div>
          <p>さらに、八千代市の高校生魅力発信大使として行政の情報発信に関わる中で、この問題は学校の中だけではないのではないかと考えるようになった。学校で見つけた「届かない」という問いを、地域や行政でも確かめたい。</p>
        </div>
      </section>

      <section className={styles.musashi} id="musashi">
        <div className={styles.musashiHead}><p className={styles.kicker}>武蔵大学で探究したいこと</p><h2>学校で見つけた問いを、地域・行政へ。</h2></div>
        <div className={styles.researchQuestion}><span>研究したい問い</span><p>行政情報を普段見ない人にも必要な情報が届き、必要な背景を理解した上で、自分の意見を表明できる仕組みをどう設計できるか。</p></div>
        <div className={styles.researchSteps}>
          <div><b>聞き取る</b><p>インタビューやフィールドワークで、どこで情報が止まるかを調べる。</p></div>
          <div><b>確かめる</b><p>到達、閲覧、理解、意見提出までをデータで見る。</p></div>
          <div><b>作って検証する</b><p>調査結果を情報サービスとして試作し、使われ方を確かめる。</p></div>
        </div>
        <div className={styles.researchQuestion}><span>特に関心のあるゼミ</span><p><b>新井庭子ゼミ ─ 情報の可視化と調査</b><br /><small>テキストマイニングやデータの可視化を通して、住民の意見や情報への接触状況を分析し、「誰に何が届いていないのか」を確かめ、その結果を情報設計へ戻す方法を学びたい。</small></p></div>
        <a className={styles.musashiLink} href="https://www.musashi.ac.jp/faculty/sociology/social_design/seminar_list.html" target="_blank" rel="noreferrer">2027年度 情報社会デザイン専攻 ゼミ一覧 ↗</a>
        <p className={styles.future}>卒業後は、民間企業の立場から、行政と住民をつなぐ情報サービスや情報基盤の設計・開発に携わりたい。</p>
        <a className={styles.musashiLink} href="https://www.musashi.ac.jp/faculty/sociology/social_design/curriculum.html" target="_blank" rel="noreferrer">情報社会デザイン専攻の学び ↗</a>
      </section>

      <section className={styles.credits} id="credits">
        <div className={styles.creditsHead}><p className={styles.kicker}>制作体制・AI利用</p><h2>AIを使った部分も、本人が判断した部分も明記する。</h2></div>
        <div className={styles.creditGrid}>
          <div><b>今回のポートフォリオ</b><p>文章・構成・デザイン方針は本人が主導。ChatGPTを内容整理・文章確認・レイアウト検討に、Codexを主にコード生成・修正に使用した。最終文章、事実確認、採用判断、調整は本人が行った。</p></div>
          <div><b>各制作物でのAI支援</b><p>QR入場管理はChatGPT・Claude Codeをコード生成・修正などに使用。提出ポータルはGeminiで構成案を作り、ChatGPT・Claude Codeを実装に使用。特設WebサイトはCodexで構成案を検討し、ChatGPT Image 2でトップページの完成デザイン案を生成した。Discordでも生成AIを補助に使用した。</p></div>
          <div><b>共同運用・素材</b><p>QR入場管理のセキュリティや学校運用に関わる仕様は、顧問・関係教員と話し合いながら決定。受付や安全管理は生徒会・実行委員・教員と共同で運用した。特設Webサイトのモチーフイラストは別の生徒が制作した。</p></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div><b>越川颯人</b><span>千葉英和高等学校 / 2026　制作：2026年8月上旬〜9月4日</span></div>
        <div><a href="#top">ページ上部へ ↑</a></div>
      </footer>
    </main>
  );
}
