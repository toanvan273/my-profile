import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Tạo một instance của ServerStykeSheet
        const sheet = new ServerStyleSheet();

        // Step 2: Nhận các styles từ component Page
        const page = renderPage(
            (App) => (props) => sheet.collectStyles(<App {...props} />)
        );

        // Step 3:Trình bày các css ra một thẻ <style />
        const styleTags = sheet.getStyleElement();

        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                        rel="stylesheet"
                    />
                    <title>My page</title>
                    {/* Step 5: import thẻ style vào head của html server trả về  */}
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
