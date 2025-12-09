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
        このアプリで入力した要件定義データの形式と、DifyアシスタントGemでの活用方法をご紹介します。
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
              className={`w-5 h-5 text-gray-600 accordion-icon ${
                openSection === 'format' ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden accordion-content ${
              openSection === 'format' ? 'max-h-[2000px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
            }`}
          >
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">エクスポート形式</h4>
                  <p className="text-gray-700 mb-2">
                    エクスポートされるデータは<code className="bg-gray-100 px-2 py-1 rounded">JSON形式</code>で保存されます。
                    ファイル名は<code className="bg-gray-100 px-2 py-1 rounded">requirement-worksheet.json</code>です。
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">データ構造</h4>
                  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-xs">
{`{
  "formData": {
    "businessName": "業務名",
    "currentPain": "現状の悩み",
    "idealGain": "理想の状態",
    "frequency": "頻度・時間",
    "inputItems": "入力項目名",
    "processFlow": "処理の流れ",
    "outputImage": "出力のイメージ",
    "step1": "Step 1の実装内容",
    "step2": "Step 2の実装内容",
    "step3": "Step 3の実装内容"
  },
  "processOptions": {
    "rag": true/false,
    "ragTarget": "検索対象",
    "summary": true/false,
    "generation": true/false,
    "branching": true/false,
    "branchingCondition": "条件例",
    "webSearch": true/false,
    "iteration": true/false
  },
  "inputOptions": {
    "textInput": true/false,
    "selection": true/false,
    "fileUpload": true/false,
    "externalData": true/false,
    "httpTrigger": true/false
  },
  "outputOptions": {
    "plainText": true/false,
    "structuredData": true/false,
    "fileGeneration": true/false,
    "externalIntegration": true/false
  }
}`}
                  </pre>
                </div>

                <div>
                  <h4 className="font-bold mb-2">各セクションの説明</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <strong>formData:</strong> 業務の棚卸し、システム設計、開発ステップで入力した内容
                    </li>
                    <li>
                      <strong>processOptions:</strong> Process（処理）セクションで選択した処理オプションと詳細設定
                    </li>
                    <li>
                      <strong>inputOptions:</strong> Input（入力）セクションで選択した入力方法
                    </li>
                    <li>
                      <strong>outputOptions:</strong> Output（出力）セクションで選択した出力形式
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
              className={`w-5 h-5 text-gray-600 accordion-icon ${
                openSection === 'usage' ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden accordion-content ${
              openSection === 'usage' ? 'max-h-[3000px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
            }`}
          >
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="space-y-6">
                {/* DifyアシスタントGemへの活用 */}
                <div>
                  <h4 className="font-bold mb-3 text-blue-600">DifyアシスタントGemへの活用</h4>
                  <p className="text-gray-700 mb-3">
                    エクスポートしたJSONデータをDifyアシスタントGemに渡すことで、要件定義に基づいたワークフローの構築方法を丁寧に教えてもらえます。
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <p className="font-semibold mb-2">使い方の例:</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                      <li>このアプリで要件定義を入力し、「データをエクスポート」ボタンをクリック</li>
                      <li>エクスポートされた<code className="bg-white px-1 py-0.5 rounded">requirement-worksheet.json</code>ファイルを準備</li>
                      <li>DifyアシスタントGem（またはDifyのチャット機能）に以下のようなプロンプトで質問:</li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold mb-2">プロンプト例:</p>
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap">
{`以下の要件定義データを基に、Difyでワークフローを構築する方法を教えてください。
要件定義データ:
[エクスポートしたJSONデータを貼り付け]

特に以下の点について詳しく説明してください:
- 必要なノードの種類と配置
- 各ノードの設定方法
- 入力から出力までの処理フロー
- 実装時の注意点`}
                    </pre>
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
                      <h5 className="font-semibold mb-2">2. プロンプト設計のポイント</h5>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">システムプロンプトの構成例:</p>
                        <pre className="text-xs text-gray-700 whitespace-pre-wrap">
{`あなたはDifyワークフロー構築の専門家です。
以下の要件定義に基づいて、具体的で実装可能なワークフロー構築方法を提供してください。

【要件定義】
[エクスポートしたJSONデータの内容を構造化して記載]

【回答の構成】
1. ワークフロー全体の概要
2. 必要なノードとその配置
3. 各ノードの詳細設定
4. 実装手順
5. テスト方法
6. よくある問題と解決策`}
                        </pre>
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
                        <li><strong>初回構築:</strong> エクスポートデータを基に、基本的なワークフローを構築</li>
                        <li><strong>テストとフィードバック:</strong> 実際に動作させて、問題点を洗い出す</li>
                        <li><strong>要件定義の更新:</strong> 発見した問題を要件定義に反映し、再度エクスポート</li>
                        <li><strong>改善サイクル:</strong> このサイクルを繰り返して、品質を向上</li>
                      </ol>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">5. 実装例</h5>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">例: 社内ナレッジ検索チャットボット</p>
                        <p className="text-xs text-gray-700 mb-2">
                          要件定義データをDifyアシスタントGemに渡すと、以下のような具体的な構築方法が得られます:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-xs text-gray-700 ml-4">
                          <li>知識検索ノードの設定方法</li>
                          <li>LLMノードでの回答生成プロンプト</li>
                          <li>エラーハンドリングの実装方法</li>
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
                            <span>エクスポートデータに必要な情報がすべて含まれている</span>
                          </li>
                          <li className="flex items-start">
                            <input type="checkbox" className="mt-1 mr-2" />
                            <span>DifyアシスタントGemに適切なシステムプロンプトが設定されている</span>
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
                    <li><strong>プロジェクト管理:</strong> 要件定義をチームで共有し、開発計画のベースとして使用</li>
                    <li><strong>ドキュメント化:</strong> エクスポートしたデータをMarkdownやPDFに変換してドキュメントとして保存</li>
                    <li><strong>バージョン管理:</strong> Gitで要件定義の変更履歴を管理</li>
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

