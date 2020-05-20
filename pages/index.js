import { Layout } from "../src/components/Layout";
import { getSortedPostsData } from "../lib/posts";
import useSWR from "swr";
import Link from "next/link";
import Date from "../src/components/date";
import HeroImage from "../src/sections/HeroImage";
import Login from "../src/sections/Login";
import { Box, makeStyles, Hidden } from "@material-ui/core";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
const FetchData = () => {
  return <div>En construccion</div>;
  // const query = process.env.rapidQuerys;
  // const getSummary = query.getSummary;
  // const { data, error } = useSWR(getSummary);
  // console.log(data, error);
  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  // return <div>Listo...</div>;
};
const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    height: "100vh",
    flexDirection: "row",
  },
});
export default function Home({ allPostsData, pokemon }) {
  const classes = useStyles();
  return (
    <Layout isLanding>
      <Box className={classes.root}>
        <Hidden mdDown>
          <HeroImage />
        </Hidden>
        <Login />
      </Box>
    </Layout>
  );
}
/*
<Layout isLanding>
      <Container className={classes.container}>
        <HeroImage />
        <HeroImage />
      </Container>
 <section>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <FetchData />
          </div>
        </section>
    </Layout>
  
*/
