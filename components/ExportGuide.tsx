'use client'

import { useState } from 'react'

export default function ExportGuide() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section className="section-card mt-8">
      <h2>エクスポートデータの使い方</h2>
      <p className="text-gray-600 mb-6">
        このアプリで入力した要件定義データを、AIチャット用プロンプトとして活用する方法をご紹介します。
      </p>

      <div className="space-y-4">
        {/* ① エクスポートされる形式と内容 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('format')}
            className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
          >
            <h3 className="font-bold text-gray-800">① エクスポートされる形式と内容</h3>
            <svg
              className={`w-5 h-5 text-gray-600 accordion-icon ${openSection === 'format' ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden accordion-content ${openSection === 'format' ? 'max-h-[2000px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
              }`}
          >
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">AIチャット用プロンプト形式</h4>
                  <p className="text-gray-700 mb-2">
                    「AIチャット用プロンプトを生成」ボタンをクリックすると、入力した要件定義データが<strong>任意のAIチャットにそのまま貼り付けられる形式</strong>のプロンプトに変換されます。
                  </p>
                  <p className="text-gray-700 mb-2">
                    プロンプトは構造化されたテキスト形式で、以下の内容が含まれます:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4 mb-4">
                    <li>業務の概要（業務名、現状の悩み、理想の状態、頻度・時間）</li>
                    <li>システム設計（Input、Process、Outputの詳細）</li>
                    <li>開発ステップ（Step 1、Step 2、Step 3）</li>
                    <li>AIへの依頼内容（具体的な質問項目）</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">JSON形式でのエクスポート</h4>
                  <p className="text-gray-700 mb-2">
                    「JSON形式でエクスポート」ボタンからは、従来通り<code className="bg-gray-100 px-2 py-1 rounded">JSON形式</code>でデータを保存できます。
                    ファイル名は<code className="bg-gray-100 px-2 py-1 rounded">requirement-worksheet.json</code>です。
                  </p>
                  <p className="text-gray-700 mb-2">
                    JSON形式は、プログラムで処理する場合や、データの構造を確認したい場合に便利です。
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">プロンプトの特徴</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <strong>コピー&ペースト対応:</strong> 生成されたプロンプトをクリップボードにコピーして、ChatGPT、Claude、DifyアシスタントGemなど、任意のAIチャットにそのまま貼り付けられます
                    </li>
                    <li>
                      <strong>ダウンロード機能:</strong> プロンプトをテキストファイル（.txt）としてダウンロードして保存できます
                    </li>
                    <li>
                      <strong>構造化された形式:</strong> 入力データが整理され、AIが理解しやすい形式で出力されます
                    </li>
                    <li>
                      <strong>即座に使用可能:</strong> 追加の編集や加工なしで、そのままAIチャットに送信できます
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ② 使い方 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('usage')}
            className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
          >
            <h3 className="font-bold text-gray-800">② 使い方</h3>
            <svg
              className={`w-5 h-5 text-gray-600 accordion-icon ${openSection === 'usage' ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden accordion-content ${openSection === 'usage' ? 'max-h-[3000px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
              }`}
          >
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="space-y-6">
                {/* AIチャット用プロンプトの使い方 */}
                <div>
                  <h4 className="font-bold mb-3 text-blue-600">AIチャット用プロンプトの使い方</h4>
                  <p className="text-gray-700 mb-3">
                    このアプリで生成されたプロンプトを、任意のAIチャット（ChatGPT、Claude、DifyアシスタントGemなど）にそのまま貼り付けて使用できます。
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <p className="font-semibold mb-2">基本的な使い方:</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                      <li>このアプリで要件定義を入力する</li>
                      <li>「AIチャット用プロンプトを生成」ボタンをクリック</li>
                      <li>生成されたプロンプトを確認する</li>
                      <li>「プロンプトをコピー」ボタンをクリックしてクリップボードにコピー</li>
                      <li>任意のAIチャット（ChatGPT、Claude、DifyアシスタントGemなど）に貼り付けて送信</li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold mb-2">対応しているAIチャット:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>ChatGPT（OpenAI）</li>
                      <li>Claude（Anthropic）</li>
                      <li>DifyアシスタントGem</li>
                      <li>その他のAIチャットサービス</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                    <p className="font-semibold mb-2">プロンプトのダウンロード:</p>
                    <p className="text-sm text-gray-700 mb-2">
                      生成されたプロンプトは「プロンプトをダウンロード」ボタンからテキストファイル（.txt）として保存できます。
                    </p>
                    <p className="text-sm text-gray-700">
                      保存したファイルは後から開いてコピー&ペーストできるため、プロンプトの管理や共有に便利です。
                    </p>
                  </div>
                </div>

                {/* DifyアシスタントGemへの活用 */}
                <div>
                  <h4 className="font-bold mb-3 text-purple-600">DifyアシスタントGemでの活用例</h4>
                  <p className="text-gray-700 mb-3">
                    生成されたプロンプトをDifyアシスタントGemに貼り付けると、要件定義に基づいたワークフローの構築方法を丁寧に教えてもらえます。
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold mb-2">期待される回答内容:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                      <li>必要なノードの種類と配置</li>
                      <li>各ノードの設定方法</li>
                      <li>入力から出力までの処理フロー</li>
                      <li>実装時の注意点</li>
                      <li>Step 1からStep 3までの段階的な実装方法</li>
                    </ul>
                  </div>
                </div>

                {/* 高品質なDifyアシスタントGemの作り方 */}
                <div>
                  <h4 className="font-bold mb-3 text-green-600">高品質なDifyアシスタントGemの作り方</h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">1. 要件定義の徹底</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                        <li><strong>明確な目的設定:</strong> 業務の棚卸しセクションで、現状の悩みと理想の状態を明確に定義</li>
                        <li><strong>具体的な入力・出力:</strong> システム設計セクションで、InputとOutputを具体的に記述</li>
                        <li><strong>段階的な開発:</strong> 開発ステップセクションで、MVPから完成形までの道筋を明確化</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">2. プロンプトの活用方法</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        このアプリで生成されたプロンプトは、すでに最適な形式で構造化されているため、そのままAIチャットに貼り付けるだけで使用できます。
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">プロンプトの特徴:</p>
                        <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                          <li>入力データが自動的に構造化され、AIが理解しやすい形式に変換される</li>
                          <li>業務の概要から開発ステップまで、必要な情報がすべて含まれている</li>
                          <li>追加の編集や加工なしで、そのまま使用可能</li>
                          <li>複数のAIチャットサービスで同じプロンプトを使用できる</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">3. 知識ベースの構築</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        DifyアシスタントGemに以下のような知識を追加すると、より高品質な回答が得られます:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                        <li><strong>Difyノードの種類と使い方:</strong> LLM、知識検索、条件分岐、HTTPリクエストなど</li>
                        <li><strong>ワークフロー設計パターン:</strong> よくあるパターンとベストプラクティス</li>
                        <li><strong>トラブルシューティング:</strong> よくある問題と解決方法</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">4. 反復的な改善</h5>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700 ml-4">
                        <li><strong>初回構築:</strong> 生成されたプロンプトをAIチャットに貼り付けて、基本的なワークフロー構築方法を取得</li>
                        <li><strong>テストとフィードバック:</strong> 実際にワークフローを構築して動作させ、問題点を洗い出す</li>
                        <li><strong>要件定義の更新:</strong> 発見した問題をこのアプリの要件定義に反映し、再度プロンプトを生成</li>
                        <li><strong>改善サイクル:</strong> このサイクルを繰り返して、品質を向上</li>
                      </ol>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">5. 実装例</h5>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">例: 社内ナレッジ検索チャットボット</p>
                        <p className="text-xs text-gray-700 mb-2">
                          このアプリで要件定義を入力し、生成されたプロンプトをDifyアシスタントGemに貼り付けると、以下のような具体的な構築方法が得られます:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 ml-4">
                          <li>知識検索ノードの設定方法</li>
                          <li>LLMノードでの回答生成プロンプト</li>
                          <li>エラーハンドリングの実装方法</li>
                          <li>Step 1からStep 3までの段階的な実装手順</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">6. 品質チェックリスト</h5>
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start">
                            <input type="checkbox" className="mt-1 mr-2" />
                            <span>要件定義が明確で具体的である</span>
                          </li>
                          <li className="flex items-start">
                            <input type="checkbox" className="mt-1 mr-2" />
                            <span>Input、Process、Outputがすべて定義されている</span>
                          </li>
                          <li className="flex items-start">
                            <input type="checkbox" className="mt-1 mr-2" />
                            <span>生成されたプロンプトに必要な情報がすべて含まれている</span>
                          </li>
                          <li className="flex items-start">
                            <input type="checkbox" className="mt-1 mr-2" />
                            <span>プロンプトをコピーまたはダウンロードして保存している</span>
                          </li>
                          <li className="flex items-start">
                            <input type="checkbox" className="mt-1 mr-2" />
                            <span>知識ベースに必要な情報が追加されている</span>
                          </li>
                          <li className="flex items-start">
                            <input type="checkbox" className="mt-1 mr-2" />
                            <span>実際のワークフローでテストが完了している</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* その他の活用方法 */}
                <div>
                  <h4 className="font-bold mb-3 text-purple-600">その他の活用方法</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 ml-4">
                    <li><strong>プロジェクト管理:</strong> 生成されたプロンプトをチームで共有し、開発計画のベースとして使用</li>
                    <li><strong>ドキュメント化:</strong> ダウンロードしたプロンプトファイルをドキュメントとして保存</li>
                    <li><strong>バージョン管理:</strong> プロンプトファイルをGitで管理し、要件定義の変更履歴を追跡</li>
                    <li><strong>複数のAIチャットでの比較:</strong> 同じプロンプトを複数のAIチャットに貼り付けて、回答を比較</li>
                    <li><strong>JSON形式でのエクスポート:</strong> プログラムで処理する場合は、JSON形式でのエクスポートも利用可能</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

