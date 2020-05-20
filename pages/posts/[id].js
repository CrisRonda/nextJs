import Head from "next/head";
import { Layout } from "../../src/components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import ReactMarkdown from "react-markdown";
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export default function Post({ postData = { title: "", contentHtml: "" } }) {
  const { title, contentHtml } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
      </article>
      <div className={utilStyles.markdown_body}>
        <ReactMarkdown escapeHtml={false} source={contentHtml} />
      </div>
    </Layout>
  );
}
