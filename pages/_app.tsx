import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"
import "../globals.css"
/**
 * Load a custom fallback font that we use in the example, you don't need to add
 * a fallback font if the default fallback font added by Next.js is good enough.
 *
 * You can use it like this:
 *
 * ```js
 *  const inter = Inter({
 *    variable: '--inter-font',
 *    display: 'swap',
 *    fallback: ['Inter-fallback'],
 *    adjustFontFallback: false,
 *  })
 * ```
 */

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>How long have you been living?</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <div className="relative z-10 bg-gray-900 ">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="fixed left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
            <div
              className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#c00251] to-[#362cfa] opacity-25"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  )
}

export default App
