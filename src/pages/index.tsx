// import styles from '../common/styles/globals.scss';
import Head from "next/head";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorAlert from "@/components/errorAlert";
import PortafolioMain from "@/module/portafolioMain/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eddie Jesus Huaripayta Gonzales</title>
        <meta name="description" content="Bienvenidos a mi Portafolio: Eddie Jesus Huaripayta Gonzales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dataMock/Portafolio/imgs/iconDev.svg" />
        
      </Head>
      <div
        // className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <ErrorBoundary errorComponent={() => (<ErrorAlert error={'prueba de error'} reset={() => window.location.reload()} />)}
          // errorStyles={
          //   <style jsx>{`
          //     div {
          //       color: red;
          //       text-align: center;
          //     }
          //   `}</style>
          // }
          // errorScripts={
          //   <script>
          //     {`
          //       console.error("An error occurred in the app");
          //     `}
          //   </script>
          // }
        >
          <PortafolioMain />
        </ErrorBoundary>
      </div>
    </>
  );
}
