import '../styles/globals.css'
import type { AppProps } from 'next/app'
import store from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  // <Provider store={store}>
  return <Component {...pageProps} />
  {/* </Provider> */ }
}

export default MyApp
