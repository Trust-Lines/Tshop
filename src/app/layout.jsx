import '@fontsource-variable/montserrat'
import '../styles/global.css'
import FitScale, { fitInlineScript } from '../components/FitScale.jsx'

export const metadata = {
  title: 'T Shop – Coming soon',
  description: 'T Shop Online Store is under construction.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: fitInlineScript }} />
      </head>
      <body>
        <FitScale />
        {children}
      </body>
    </html>
  )
}
