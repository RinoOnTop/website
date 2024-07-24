// import 'tailwindcss/tailwind.css'
import PlausibleProvider from 'next-plausible'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}>

    <script defer data-domain="rinoo.tech" src="https://data.rinoo.tech/js/script.js"></script>

  </Component>

}

export default MyApp
