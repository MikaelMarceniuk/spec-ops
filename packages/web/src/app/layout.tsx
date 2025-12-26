import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { withChildren } from '../types/with-children.type'
import { ThemeProvider } from '../providers/theme.provider'
import { QueryClientProvider } from '../providers/query-client.provider'
import { Toaster } from '../components/ui/sonner'
import { AuthProvider } from '../providers/auth.provider'

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
        <QueryClientProvider>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </AuthProvider>
          <Toaster richColors />
        </QueryClientProvider>
      </body>
    </html>
  )
}
