import '@fontsource-variable/montserrat'
import '../styles/global.css'

export const metadata = {
  title: 'T Shop – Coming soon',
  description: 'T Shop Online Store is under construction.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
