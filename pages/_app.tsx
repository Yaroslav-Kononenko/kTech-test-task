import '../styles/globals.css';
import '../styles/Home.scss';
import '../styles/Forms.scss';
import '../styles/Footer.scss';
import '../styles/Success_registr.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
