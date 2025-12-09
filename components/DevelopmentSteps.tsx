'use client'

interface DevelopmentStepsProps {
  formData: {
    step1: string
    step2: string
    step3: string
  }
  onInputChange: (field: string, value: string) => void
}

export default function DevelopmentSteps({ formData, onInputChange }: DevelopmentStepsProps) {
  return (
    <section className="section-card">
      <h2>3. 開発ステップ（MVPの設定）</h2>
      <p className="mb-6 text-gray-700">
        いきなり全部作るのは大変です。まずは「これだけ動けばOK」というライン（MVP）を決めましょう。
      </p>

      <table className="table-custom">
        <thead>
          <tr>
            <th style={{ width: '20%' }}>ステップ</th>
            <th style={{ width: '80%' }}>実装内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Step 1 (MVP)</strong></td>
            <td>
              <div className="mb-2">
                <strong>最低限の機能</strong>
              </div>
              <textarea
                className="textarea-field"
                value={formData.step1}
                onChange={(e) => onInputChange('step1', e.target.value)}
                placeholder="例：入力したテキストを、指定のフォーマット（日報形式）に整えて返すだけ。"
                rows={3}
              />
            </td>
          </tr>
          <tr>
            <td><strong>Step 2</strong></td>
            <td>
              <div className="mb-2">
                <strong>機能追加</strong>
              </div>
              <textarea
                className="textarea-field"
                value={formData.step2}
                onChange={(e) => onInputChange('step2', e.target.value)}
                placeholder="例：社内用語集（知識）を参照して、専門用語の解説を付記する機能を追加。"
                rows={3}
              />
            </td>
          </tr>
          <tr>
            <td><strong>Step 3</strong></td>
            <td>
              <div className="mb-2">
                <strong>完成形</strong>
              </div>
              <textarea
                className="textarea-field"
                value={formData.step3}
                onChange={(e) => onInputChange('step3', e.target.value)}
                placeholder="例：完成した日報をメールの下書きとして出力する、またはSlackに飛ばす。"
                rows={3}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

