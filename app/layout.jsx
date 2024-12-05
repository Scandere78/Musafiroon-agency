import { Navbar } from '@/components/Navbar' 
import '@/style/global.css'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
    <head>
        <meta httpEquiv='Content-Type' content="texte/HTML;charset=UTF-8" />
        <title>Musafiroon-agency</title>
    </head>
    <body>
        <Navbar/>
        {children}
    </body>
    </html>
  )
}

export default RootLayout