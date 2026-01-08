'use client'

import { useState } from 'react'
import BusinessInventory from '@/components/BusinessInventory'
import SystemDesign from '@/components/SystemDesign'
import DevelopmentSteps from '@/components/DevelopmentSteps'
import ExportGuide from '@/components/ExportGuide'
import PrivacySecurity from '@/components/PrivacySecurity'

export default function Home() {
  const [formData, setFormData] = useState({
    businessName: '',
    currentPain: '',
    idealGain: '',
    frequency: '',
    inputItems: '',
    processFlow: '',
    outputImage: '',
    step1: '',
    step2: '',
    step3: '',
  })

  const [processOptions, setProcessOptions] = useState({
    rag: false,
    ragTarget: '',
    summary: false,
    generation: false,
    branching: false,
    branchingCondition: '',
    webSearch: false,
    iteration: false,
  })

  const [inputOptions, setInputOptions] = useState({
    textInput: false,
    selection: false,
    fileUpload: false,
    externalData: false,
    httpTrigger: false,
  })

  const [outputOptions, setOutputOptions] = useState({
    plainText: false,
    structuredData: false,
    fileGeneration: false,
    externalIntegration: false,
  })

  const [showPrompt, setShowPrompt] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleProcessOptionChange = (field: string, value: boolean | string) => {
    setProcessOptions(prev => ({ ...prev, [field]: value }))
  }

  const handleInputOptionChange = (field: string, value: boolean) => {
    setInputOptions(prev => ({ ...prev, [field]: value }))
  }

  const handleOutputOptionChange = (field: string, value: boolean) => {
    setOutputOptions(prev => ({ ...prev, [field]: value }))
  }

  const generatePrompt = () => {
    const activeInputOptions = Object.entries(inputOptions)
      .filter(([_, value]) => value)
      .map(([key]) => {
        const labels: { [key: string]: string } = {
          textInput: 'テキスト入力',
          selection: '選択肢',
          fileUpload: 'ファイルアップロード',
          externalData: '外部データ',
          httpTrigger: 'HTTPトリガー',
        }
        return labels[key] || key
      })

    const activeProcessOptions = Object.entries(processOptions)
      .filter(([key, value]) => {
        if (key === 'ragTarget' || key === 'branchingCondition') return false
        return value === true
      })
      .map(([key]) => {
        const labels: { [key: string]: string } = {
          rag: '知識検索 (RAG)',
          summary: '要約・抽出',
          generation: '生成・変換',
          branching: '条件分岐',
          webSearch: 'Web検索',
          iteration: '反復処理',
        }
        return labels[key] || key
      })

    const activeOutputOptions = Object.entries(outputOptions)
      .filter(([_, value]) => value)
      .map(([key]) => {
        const labels: { [key: string]: string } = {
          plainText: 'プレーンテキスト',
          structuredData: '構造化データ',
          fileGeneration: 'ファイル生成',
          externalIntegration: '外部連携',
        }
        return labels[key] || key
      })

    let prompt = `以下の要件定義に基づいて、Difyでワークフローを構築する方法を教えてください。

【業務の概要】
業務名: ${formData.businessName || '未入力'}
現状の悩み: ${formData.currentPain || '未入力'}
理想の状態: ${formData.idealGain || '未入力'}
頻度・時間: ${formData.frequency || '未入力'}

【システム設計】

■ Input（入力）
${activeInputOptions.length > 0 ? activeInputOptions.map(opt => `- ${opt}`).join('\n') : '- 未設定'}
${formData.inputItems ? `\n具体的な入力項目名:\n${formData.inputItems}` : ''}

■ Process（処理）
${activeProcessOptions.length > 0 ? activeProcessOptions.map(opt => `- ${opt}`).join('\n') : '- 未設定'}
${processOptions.rag && processOptions.ragTarget ? `\n知識検索の対象: ${processOptions.ragTarget}` : ''}
${processOptions.branching && processOptions.branchingCondition ? `\n条件分岐の条件: ${processOptions.branchingCondition}` : ''}
${formData.processFlow ? `\n処理の流れ:\n${formData.processFlow}` : ''}

■ Output（出力）
${activeOutputOptions.length > 0 ? activeOutputOptions.map(opt => `- ${opt}`).join('\n') : '- 未設定'}
${formData.outputImage ? `\n出力のイメージ:\n${formData.outputImage}` : ''}

【開発ステップ】

Step 1 (MVP):
${formData.step1 || '未入力'}

Step 2:
${formData.step2 || '未入力'}

Step 3 (完成形):
${formData.step3 || '未入力'}

【依頼内容】
以下の点について詳しく説明してください:
- 必要なノードの種類と配置
- 各ノードの設定方法
- 入力から出力までの処理フロー
- 実装時の注意点
- Step 1からStep 3までの段階的な実装方法`

    return prompt
  }

  const handleExport = () => {
    const data = {
      formData,
      processOptions,
      inputOptions,
      outputOptions,
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'requirement-worksheet.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleGeneratePrompt = () => {
    setShowPrompt(true)
    setCopied(false)
  }

  const handleCopyPrompt = async () => {
    const prompt = generatePrompt()
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('コピーに失敗しました:', err)
      alert('コピーに失敗しました。手動でコピーしてください。')
    }
  }

  const handleDownloadPrompt = () => {
    const prompt = generatePrompt()
    const blob = new Blob([prompt], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'dify-workflow-prompt.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleReset = () => {
    if (confirm('入力内容をすべてリセットしますか？')) {
      setFormData({
        businessName: '',
        currentPain: '',
        idealGain: '',
        frequency: '',
        inputItems: '',
        processFlow: '',
        outputImage: '',
        step1: '',
        step2: '',
        step3: '',
      })
      setProcessOptions({
        rag: false,
        ragTarget: '',
        summary: false,
        generation: false,
        branching: false,
        branchingCondition: '',
        webSearch: false,
        iteration: false,
      })
      setInputOptions({
        textInput: false,
        selection: false,
        fileUpload: false,
        externalData: false,
        httpTrigger: false,
      })
      setOutputOptions({
        plainText: false,
        structuredData: false,
        fileGeneration: false,
        externalIntegration: false,
      })
    }
  }

  return (
    <div className="container-custom">
      <header className="mb-8">
        <h1>Difyカスタムワークフロー構築：要件定義ワークシート</h1>
        <p className="text-gray-600 mb-6">
          このワークシートは、あなたの「なんとなく楽になりたい業務」を、Difyで実装可能な「システム要件」に変換するための設計図です。
        </p>
        <div className="flex gap-4 no-print flex-wrap">
          <button onClick={handleGeneratePrompt} className="btn-primary">
            AIチャット用プロンプトを生成
          </button>
          <button onClick={handleExport} className="btn-secondary">
            JSON形式でエクスポート
          </button>
          <button onClick={handleReset} className="btn-secondary">
            リセット
          </button>
        </div>
      </header>

      <BusinessInventory
        formData={formData}
        onInputChange={handleInputChange}
      />

      <SystemDesign
        formData={formData}
        processOptions={processOptions}
        inputOptions={inputOptions}
        outputOptions={outputOptions}
        onInputChange={handleInputChange}
        onProcessOptionChange={handleProcessOptionChange}
        onInputOptionChange={handleInputOptionChange}
        onOutputOptionChange={handleOutputOptionChange}
      />

      <DevelopmentSteps
        formData={formData}
        onInputChange={handleInputChange}
      />

      {showPrompt && (
        <section className="section-card mt-8">
          <h2>AIチャット用プロンプト</h2>
          <p className="text-gray-600 mb-4">
            以下のプロンプトを任意のAIチャット（ChatGPT、Claude、DifyアシスタントGemなど）にそのまま貼り付けて使用できます。
          </p>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4">
            <pre className="whitespace-pre-wrap text-xs text-gray-800 font-mono overflow-x-auto">
              {generatePrompt()}
            </pre>
          </div>
          <div className="flex gap-4 no-print">
            <button
              onClick={handleCopyPrompt}
              className={`btn-primary ${copied ? 'bg-green-600 hover:bg-green-700' : ''}`}
            >
              {copied ? 'コピーしました！' : 'プロンプトをコピー'}
            </button>
            <button onClick={handleDownloadPrompt} className="btn-secondary">
              プロンプトをダウンロード
            </button>
            <button onClick={() => setShowPrompt(false)} className="btn-secondary">
              閉じる
            </button>
          </div>
        </section>
      )}

      <ExportGuide />

      <PrivacySecurity />

      <footer className="mt-12 pt-8 border-t border-gray-200 no-print">
        <div className="flex gap-4 justify-center flex-wrap">
          <button onClick={handleGeneratePrompt} className="btn-primary">
            AIチャット用プロンプトを生成
          </button>
          <button onClick={handleExport} className="btn-secondary">
            JSON形式でエクスポート
          </button>
          <button onClick={handleReset} className="btn-secondary">
            リセット
          </button>
        </div>
      </footer>
    </div>
  )
}

