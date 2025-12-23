import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { withChildren } from '../types/with-children.type'
import { ThemeProvider } from '../providers/theme.provider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SpecOps',
}

export default function RootLayout({ children }: withChildren) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
    >
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
