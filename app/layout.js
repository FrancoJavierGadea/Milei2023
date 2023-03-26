import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'leaflet/dist/leaflet.css';
import '../styles/globals.css';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Milei 2023',
  description: 'Web oficial Javier Milei Presidente 2023',
}


export default function RootLayout({ children }) {

  return (<html lang="es">

    <body className="">

      <Navigation />

      {children}

    </body>

  </html>);
}
