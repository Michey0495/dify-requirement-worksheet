'use client'

interface BusinessInventoryProps {
  formData: {
    businessName: string
    currentPain: string
    idealGain: string
    frequency: string
  }
  onInputChange: (field: string, value: string) => void
}

export default function BusinessInventory({ formData, onInputChange }: BusinessInventoryProps) {
  return (
    <section className="section-card">
      <h2>1. 業務の棚卸し（現状と理想）</h2>
      <table className="table-custom">
        <thead>
          <tr>
            <th style={{ width: '20%' }}>項目</th>
            <th style={{ width: '40%' }}>内容</th>
            <th style={{ width: '40%' }}>具体例</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>業務名</strong></td>
            <td>
              <input
                type="text"
                className="input-field"
                value={formData.businessName}
                onChange={(e) => onInputChange('businessName', e.target.value)}
                placeholder="例：日報作成、顧客からの問い合わせ対応"
              />
            </td>
            <td className="text-gray-600">例：日報作成、顧客からの問い合わせ対応</td>
          </tr>
          <tr>
            <td><strong>現状の悩み (Pain)</strong></td>
            <td>
              <textarea
                className="textarea-field"
                value={formData.currentPain}
                onChange={(e) => onInputChange('currentPain', e.target.value)}
                placeholder="例：毎日同じフォーマットで書くのが面倒、過去の回答を探すのに時間がかかる"
                rows={3}
              />
            </td>
            <td className="text-gray-600">例：毎日同じフォーマットで書くのが面倒、過去の回答を探すのに時間がかかる</td>
          </tr>
          <tr>
            <td><strong>理想の状態 (Gain)</strong></td>
            <td>
              <textarea
                className="textarea-field"
                value={formData.idealGain}
                onChange={(e) => onInputChange('idealGain', e.target.value)}
                placeholder="例：箇条書きを入れるだけで日報が完成する、質問を入れるとマニュアルから回答案が出る"
                rows={3}
              />
            </td>
            <td className="text-gray-600">例：箇条書きを入れるだけで日報が完成する、質問を入れるとマニュアルから回答案が出る</td>
          </tr>
          <tr>
            <td><strong>頻度・時間</strong></td>
            <td>
              <input
                type="text"
                className="input-field"
                value={formData.frequency}
                onChange={(e) => onInputChange('frequency', e.target.value)}
                placeholder="例：毎日30分かかっている → 5分にしたい"
              />
            </td>
            <td className="text-gray-600">例：毎日30分かかっている → 5分にしたい</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

