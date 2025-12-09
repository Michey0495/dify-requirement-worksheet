'use client'

interface SystemDesignProps {
  formData: {
    inputItems: string
    processFlow: string
    outputImage: string
  }
  processOptions: {
    rag: boolean
    ragTarget: string
    summary: boolean
    generation: boolean
    branching: boolean
    branchingCondition: string
    webSearch: boolean
    iteration: boolean
  }
  inputOptions: {
    textInput: boolean
    selection: boolean
    fileUpload: boolean
    externalData: boolean
  }
  outputOptions: {
    plainText: boolean
    structuredData: boolean
    fileGeneration: boolean
    externalIntegration: boolean
  }
  onInputChange: (field: string, value: string) => void
  onProcessOptionChange: (field: string, value: boolean | string) => void
  onInputOptionChange: (field: string, value: boolean) => void
  onOutputOptionChange: (field: string, value: boolean) => void
}

export default function SystemDesign({
  formData,
  processOptions,
  inputOptions,
  outputOptions,
  onInputChange,
  onProcessOptionChange,
  onInputOptionChange,
  onOutputOptionChange,
}: SystemDesignProps) {
  return (
    <>
      <section className="section-card">
        <h2>2. システム設計（Input → Process → Output）</h2>
        <p className="mb-6 text-gray-700">
          Difyのワークフローは「入力」「処理」「出力」の3ステップで構成されます。
        </p>

        <div className="mb-8">
          <h3>① Input（入力）：AIに何を渡しますか？</h3>
          <p className="text-gray-600 mb-4 text-xs">
            ※Difyの「開始」ノードで設定する項目です。
          </p>

          <div className="space-y-3 mb-6">
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={inputOptions.textInput}
                onChange={(e) => onInputOptionChange('textInput', e.target.checked)}
              />
              <span><strong>テキスト入力</strong>（質問、指示、箇条書きメモなど）</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={inputOptions.selection}
                onChange={(e) => onInputOptionChange('selection', e.target.checked)}
              />
              <span><strong>選択肢</strong>（メニューから選ぶ）</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={inputOptions.fileUpload}
                onChange={(e) => onInputOptionChange('fileUpload', e.target.checked)}
              />
              <span>
                <strong>ファイルアップロード</strong>（PDF、Excel、画像など）
                <br />
                <span className="text-gray-600 text-xs ml-6">
                  ※Difyの標準機能で読み込めるのはテキストベースのPDF/Word等がメインです。
                </span>
              </span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={inputOptions.externalData}
                onChange={(e) => onInputOptionChange('externalData', e.target.checked)}
              />
              <span>
                <strong>外部データ</strong>（API経由など ※今回は対象外でもOK）
              </span>
            </label>
          </div>

          <div>
            <p className="mb-2"><strong>具体的な入力項目名:</strong></p>
            <blockquote className="mb-4">
              例：<code>user_input</code> (問い合わせ内容), <code>target_date</code> (日付), <code>uploaded_file</code> (議事録ファイル)
            </blockquote>
            <textarea
              className="textarea-field"
              value={formData.inputItems}
              onChange={(e) => onInputChange('inputItems', e.target.value)}
              placeholder="入力項目名を記入してください"
              rows={3}
            />
          </div>
        </div>
      </section>

      <section className="section-card">
        <h3>② Process（処理）：AIに何をさせますか？</h3>
        <p className="text-gray-600 mb-4 text-xs">
          ※Difyの各ノード（LLM、知識検索、条件分岐など）を組み合わせます。
        </p>

        <p className="mb-4"><strong>必要な処理にチェックを入れ、詳細を書いてください。</strong></p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={processOptions.rag}
                onChange={(e) => onProcessOptionChange('rag', e.target.checked)}
              />
              <span><strong>知識検索 (RAG)</strong>：社内マニュアルや過去のデータを検索させたい</span>
            </label>
            {processOptions.rag && (
              <div className="ml-6 mt-2">
                <span className="text-gray-600 text-xs">検索対象: </span>
                <input
                  type="text"
                  className="input-field mt-1"
                  value={processOptions.ragTarget}
                  onChange={(e) => onProcessOptionChange('ragTarget', e.target.value)}
                  placeholder="検索対象を記入"
                />
              </div>
            )}
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={processOptions.summary}
              onChange={(e) => onProcessOptionChange('summary', e.target.checked)}
            />
            <span><strong>要約・抽出</strong>：長い文章を短くしたり、特定の情報を抜き出したい</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={processOptions.generation}
              onChange={(e) => onProcessOptionChange('generation', e.target.checked)}
            />
            <span><strong>生成・変換</strong>：メール文面作成、翻訳、プログラムコード生成など</span>
          </label>

          <div>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={processOptions.branching}
                onChange={(e) => onProcessOptionChange('branching', e.target.checked)}
              />
              <span><strong>条件分岐</strong>：入力内容によって処理を変えたい</span>
            </label>
            {processOptions.branching && (
              <div className="ml-6 mt-2">
                <span className="text-gray-600 text-xs">条件例: </span>
                <input
                  type="text"
                  className="input-field mt-1"
                  value={processOptions.branchingCondition}
                  onChange={(e) => onProcessOptionChange('branchingCondition', e.target.value)}
                  placeholder="例：「クレーム」ならAルート、「質問」ならBルート"
                />
              </div>
            )}
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={processOptions.webSearch}
              onChange={(e) => onProcessOptionChange('webSearch', e.target.checked)}
            />
            <span><strong>Web検索</strong>：Google検索などで最新情報を取得したい</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={processOptions.iteration}
              onChange={(e) => onProcessOptionChange('iteration', e.target.checked)}
            />
            <span><strong>反復処理</strong>：リストの数だけ同じ処理を繰り返したい</span>
          </label>
        </div>

        <div>
          <p className="mb-2"><strong>処理の流れ（フロー）を日本語で書いてみましょう:</strong></p>
          <blockquote className="mb-4">
            1. ユーザーからの質問を受け取る<br />
            2. 社内マニュアル（知識）から関連情報を検索する<br />
            3. 検索結果が見つからなければ、Web検索を行う<br />
            4. 情報をもとに回答を作成する
          </blockquote>
          <textarea
            className="textarea-field"
            value={formData.processFlow}
            onChange={(e) => onInputChange('processFlow', e.target.value)}
            placeholder="処理の流れを記入してください"
            rows={5}
          />
        </div>
      </section>

      <section className="section-card">
        <h3>③ Output（出力）：最終的に何が欲しいですか？</h3>
        <p className="text-gray-600 mb-4 text-xs">
          ※Difyの「終了」ノード、または画面上の表示です。
        </p>

        <div className="space-y-3 mb-6">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={outputOptions.plainText}
              onChange={(e) => onOutputOptionChange('plainText', e.target.checked)}
            />
            <span><strong>プレーンテキスト</strong>（チャットの返答として表示）</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={outputOptions.structuredData}
              onChange={(e) => onOutputOptionChange('structuredData', e.target.checked)}
            />
            <span><strong>構造化データ</strong>（表形式、JSON、CSVなど）</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={outputOptions.fileGeneration}
              onChange={(e) => onOutputOptionChange('fileGeneration', e.target.checked)}
            />
            <span><strong>ファイル生成</strong>（※高度な機能）</span>
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={outputOptions.externalIntegration}
              onChange={(e) => onOutputOptionChange('externalIntegration', e.target.checked)}
            />
            <span>
              <strong>外部連携</strong>（メール送信、Slack通知など ※今回はテキスト出力までを目標にします）
            </span>
          </label>
        </div>

        <div>
          <p className="mb-2"><strong>出力のイメージ:</strong></p>
          <blockquote className="mb-4">
            例：<br />
            以下の構成で回答が表示される。<br />
            1. 結論<br />
            2. 詳細説明<br />
            3. 参考リンク
          </blockquote>
          <textarea
            className="textarea-field"
            value={formData.outputImage}
            onChange={(e) => onInputChange('outputImage', e.target.value)}
            placeholder="出力のイメージを記入してください"
            rows={5}
          />
        </div>
      </section>
    </>
  )
}

