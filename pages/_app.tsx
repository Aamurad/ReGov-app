import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import Layout from '../components/Layout'
import '@fortawesome/fontawesome-free/css/all.min.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
