import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'leaflet/dist/leaflet.css';
import '../styles/globals.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'Milei 2023',
  description: 'Web oficial Javier Milei Presidente 2023',
  robots: 'noindex'
}


export default function RootLayout({ children }) {

  return (<html lang="es">

    <body className="">

      <Navigation />

      {children}

      <Footer />
    </body>

  </html>);
}
