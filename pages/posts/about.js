import Head from "next/head";
import { Layout } from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
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
