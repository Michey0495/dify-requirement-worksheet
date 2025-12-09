import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Difyカスタムワークフロー構築：要件定義ワークシート',
  description: 'あなたの「なんとなく楽になりたい業務」を、Difyで実装可能な「システム要件」に変換するための設計図',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

