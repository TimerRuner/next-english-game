import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { wrapper } from "../store/index.ts"

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
