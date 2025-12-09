'use client'

import { useState } from 'react'
import BusinessInventory from '@/components/BusinessInventory'
import SystemDesign from '@/components/SystemDesign'
import DevelopmentSteps from '@/components/DevelopmentSteps'
import ExportGuide from '@/components/ExportGuide'

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
        <div className="flex gap-4 no-print">
          <button onClick={handleExport} className="btn-primary">
            データをエクスポート
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

      <ExportGuide />

      <footer className="mt-12 pt-8 border-t border-gray-200 no-print">
        <div className="flex gap-4 justify-center">
          <button onClick={handleExport} className="btn-primary">
            データをエクスポート
          </button>
          <button onClick={handleReset} className="btn-secondary">
            リセット
          </button>
        </div>
      </footer>
    </div>
  )
}

