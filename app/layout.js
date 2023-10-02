import './globals.css'
import { Inter } from 'next/font/google'
import Logo from "@/img/Logo14.png"



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MU LIFE PASS',
  description: 'Mahidol mustudent MU life pass',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <link rel="icon" href="/Mahidol_U.png" type="image/png" sizes="32x32" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
