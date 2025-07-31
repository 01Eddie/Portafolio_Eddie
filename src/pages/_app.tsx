import "@/common/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ErrorBoundary 
    //   errorComponent={
    //     ({ error, reset }) => (
    //       <div>
    //         <h1>An error occurred</h1>
    //         <p>{error.message}</p>
    //         <button onClick={reset}>Try again</button>
    //       </div>
    //     )
    //   }
    //   errorStyles={
    //     <style jsx>{`
    //       div {
    //         color: red;
    //         text-align: center;
    //       }
    //     `}</style>
    //   }
    //   errorScripts={
    //     <script>
    //       {`
    //         console.error("An error occurred in the app");
    //       `}
    //     </script>
    //   }
    // >
    <Provider>
      <Component {...pageProps} />
    </Provider>
    // </ErrorBoundary>
  )
}
