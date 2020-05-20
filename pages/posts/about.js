import Head from "next/head";
import { Layout } from "../../src/components/Layout";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Sobre mí</title>
      </Head>
      <h1 className={utilStyles.title}>Soy Cristian Ronda</h1>
    </Layout>
  );
}
