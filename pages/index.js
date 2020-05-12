import Head from "next/head";
import { siteTitle, Layout } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import useSWR from "swr";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
function FetchData() {
  const { data, error } = useSWR("https://pokeapi.co/api/v2/pokemon/ditto/");
  console.log(data, error);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <PokemonInfo {...data} />;
}

const PokemonInfo = ({ name, sprites, id }) => {
  return (
    <div>
      <h5>Este componente utiliza un API</h5>
      <h6>Pokemon: {name.toLocaleUpperCase()}</h6>
      <p>
        N° Pokedex:
        <span>{id}</span>
      </p>
      <img src={sprites.front_default} />
    </div>
  );
};

export default function Home({ allPostsData, pokemon }) {
  console.log(pokemon);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Soy Graduado en Ingeniería Electrónica y Redes de Información de la
          Escuela Politécnica Nacional. Comprometido al desarrollo de
          aplicaciones multiplataforma y diseño de redes de información.
          <br />
          Siempre dispuesto a seguir aprendiendo diferentes disciplinas ajenas a
          lo que me especializo.
          <br />
          <br />
          Contáctame en{" "}
          <a
            href="https://www.linkedin.com/in/cristian-ronda-169414180/"
            target="_blank"
          >
            Linkedin
          </a>
        </p>
        <p>
          (Este ejemplo se ralizó siguiendo los primeros pasos{" "}
          <a href="https://nextjs.org/learn">del tutorial de Next.js</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <FetchData />
        <Link href="/posts/[id]" as="/posts/ssg-ssr">
          <a>...</a>
        </Link>
      </section>
    </Layout>
  );
}
