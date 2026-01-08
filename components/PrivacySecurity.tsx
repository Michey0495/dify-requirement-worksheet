'use client'

import { useState } from 'react'

export default function PrivacySecurity() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section className="section-card mt-8">
      <h2>プライバシーとセキュリティ</h2>
      <p className="text-gray-600 mb-6">
        このアプリは、あなたのデータのプライバシーとセキュリティを最優先に設計されています。機密情報を含む業務課題を安心して入力いただけます。
      </p>

      <div className="space-y-4">
        {/* データは一切保存されません */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('noStorage')}
            className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
          >
            <h3 className="font-bold text-gray-800">データは一切保存されません</h3>
            <svg
              className={`w-5 h-5 text-gray-600 accordion-icon ${openSection === 'noStorage' ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden accordion-content ${openSection === 'noStorage' ? 'max-h-[2000px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
              }`}
          >
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="font-semibold mb-2 text-green-800">入力データの保存場所</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    <li>入力されたデータは<strong>ブラウザのメモリ（RAM）にのみ一時的に保存</strong>されます</li>
                    <li>ローカルストレージ、セッションストレージ、Cookieには一切保存されません</li>
                    <li>サーバーにデータを送信することはありません</li>
                    <li>データベースに保存されることはありません</li>
                    <li>ページを閉じると、すべての入力データは消去されます</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">技術的な詳細</h4>
                  <p className="text-gray-700 mb-2">
                    このアプリは、Reactの状態管理（useState）のみを使用してデータを保持しています。状態はブラウザのメモリ上にのみ存在し、以下のストレージには一切アクセスしていません:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                    <li><code className="bg-gray-100 px-2 py-1 rounded">localStorage</code></li>
                    <li><code className="bg-gray-100 px-2 py-1 rounded">sessionStorage</code></li>
                    <li><code className="bg-gray-100 px-2 py-1 rounded">IndexedDB</code></li>
                    <li><code className="bg-gray-100 px-2 py-1 rounded">Cookies</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 完全にクライアントサイドで動作 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('clientSide')}
            className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
          >
            <h3 className="font-bold text-gray-800">完全にクライアントサイドで動作</h3>
            <svg
              className={`w-5 h-5 text-gray-600 accordion-icon ${openSection === 'clientSide' ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden accordion-content ${openSection === 'clientSide' ? 'max-h-[2000px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
              }`}
          >
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="font-semibold mb-2 text-blue-800">すべての処理がブラウザ内で完結</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    <li>すべての処理はブラウザ内で完結します</li>
                    <li>サーバーサイドのAPIやデータベースは使用していません</li>
                    <li>外部サービスへのデータ送信は行いません</li>
                    <li>エクスポート機能もブラウザ内で完結し、ファイルはローカルにダウンロードされるのみです</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">エクスポート機能について</h4>
                  <p className="text-gray-700 mb-2">
                    「AIチャット用プロンプトを生成」や「JSON形式でエクスポート」機能で生成されるファイルは、お使いのデバイスにのみダウンロードされます。生成処理もブラウザ内で完結するため、データが外部に送信されることはありません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ソースコードの公開 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('openSource')}
            className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
          >
            <h3 className="font-bold text-gray-800">ソースコードの公開</h3>
            <svg
              className={`w-5 h-5 text-gray-600 accordion-icon ${openSection === 'openSource' ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden accordion-content ${openSection === 'openSource' ? 'max-h-[2000px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
              }`}
          >
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="space-y-4">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <p className="font-semibold mb-2 text-purple-800">透明性の確保</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    <li>すべてのソースコードはGitHubで公開されています</li>
                    <li>コードを確認することで、データが保存されないことを検証できます</li>
                    <li>データベース接続、API呼び出し、ローカルストレージの使用がないことを確認できます</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">検証方法</h4>
                  <p className="text-gray-700 mb-2">
                    GitHubリポジトリのコードを確認することで、以下のことを確認できます:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                    <li>データベース接続コードが存在しないこと</li>
                    <li>API呼び出し（fetch、axios等）が存在しないこと</li>
                    <li>ローカルストレージ関連のコード（localStorage、sessionStorage）が存在しないこと</li>
                    <li>すべての処理がクライアントサイド（Reactコンポーネント内）で完結していること</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">GitHubリポジトリを確認</p>
                  <p className="text-sm text-gray-700">
                    ソースコードを確認したい場合は、GitHubリポジトリをご覧ください。コードの透明性により、データの取り扱いを完全に理解できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 機密情報の安全な使用 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('confidential')}
            className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
          >
            <h3 className="font-bold text-gray-800">機密情報の安全な使用</h3>
            <svg
              className={`w-5 h-5 text-gray-600 accordion-icon ${openSection === 'confidential' ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden accordion-content ${openSection === 'confidential' ? 'max-h-[2000px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
              }`}
          >
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="font-semibold mb-2 text-green-800">機密情報を含む業務課題の入力が可能</p>
                  <p className="text-sm text-gray-700 mb-2">
                    このアプリは機密情報を含む業務課題を入力しても安全です。データは一切保存されず、ページを閉じると完全に消去されます。
                  </p>
                  <p className="text-sm text-gray-700">
                    エクスポートしたファイルは、お使いのデバイスにのみ保存されます。
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">安全に使用するために</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                    <li>企業の機密情報を含む業務課題も安心して入力できます</li>
                    <li>個人情報を含むデータも、ページを閉じれば完全に消去されます</li>
                    <li>エクスポート機能を使用した場合のみ、データがデバイスに保存されます</li>
                    <li>エクスポートしたファイルの管理にはご注意ください</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="border border-yellow-200 rounded-lg overflow-hidden bg-yellow-50">
          <button
            onClick={() => toggleSection('warnings')}
            className="w-full px-6 py-4 bg-yellow-50 hover:bg-yellow-100 transition-colors duration-200 flex items-center justify-between text-left"
          >
            <h3 className="font-bold text-yellow-900">注意事項</h3>
            <svg
              className={`w-5 h-5 text-yellow-700 accordion-icon ${openSection === 'warnings' ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden accordion-content ${openSection === 'warnings' ? 'max-h-[2000px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'
              }`}
          >
            <div className="px-6 py-4 bg-white border-t border-yellow-200">
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="font-semibold mb-2 text-yellow-800">重要な注意点</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                    <li><strong>エクスポートしたファイル:</strong> エクスポートしたファイルは、お使いのデバイスに保存されます。ファイルの管理にはご注意ください</li>
                    <li><strong>ブラウザの開発者ツール:</strong> ブラウザの開発者ツールでデータを確認できますが、ページを閉じると消去されます</li>
                    <li><strong>複数タブでの使用:</strong> 複数のタブで同じアプリを開いている場合、各タブのデータは独立しています</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">エクスポートファイルの管理</h4>
                  <p className="text-gray-700 mb-2 text-sm">
                    エクスポート機能を使用してファイルをダウンロードした場合、そのファイルはお使いのデバイスに保存されます。機密情報を含むファイルは、適切に管理してください。
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
                    <li>不要になったファイルは削除する</li>
                    <li>機密情報を含むファイルは、暗号化やアクセス制限を検討する</li>
                    <li>共有する場合は、相手先のセキュリティポリシーを確認する</li>
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
