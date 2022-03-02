import Head from "next/head";
import { HomePage } from "../components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bem vindo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomePage />
    </>
  );
}
