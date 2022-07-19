import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript /> {/*includes all the nextjs codes*/}
          <div id="notification"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
