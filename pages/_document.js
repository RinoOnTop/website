import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>

                    <script defer data-domain="rinoo.tech" src="https://data.rinoo.tech/js/script.js"></script>

                </Head>
                <body className="bg-gray-900 text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
