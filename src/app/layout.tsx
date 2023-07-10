import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chef Virtual',
  description: 'Chef Virtual é um site interativo que coloca o poder de criar receitas deliciosas em suas mãos. Com uma interface simples e intuitiva, você pode selecionar os ingredientes que possui em sua despensa e, em seguida, nossa inteligência artificial entra em ação para fornecer uma variedade de receitas personalizadas para você experimentar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
