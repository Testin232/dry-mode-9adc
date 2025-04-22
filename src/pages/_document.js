import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="https://cdn.brevo.com/js/sdk-loader.js" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.Brevo = window.Brevo || [];
              Brevo.push([
                "init",
                {
                  client_key: "${process.env.NEXT_PUBLIC_BREVO_CLIENT_KEY}"
                }
              ]);
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
