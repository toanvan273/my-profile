import Header from './header'
import Footer from './footer'
import Head from 'next/head'
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}