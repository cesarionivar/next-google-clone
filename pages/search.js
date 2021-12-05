import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header } from '../components/Header';
import { SearchResults } from '../components/SearchResults';
import response from '../response';

const Search = ({ results }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link
          rel='icon'
          href='https://img.talkandroid.com/uploads/2016/06/google_app_icon.png'
        />
      </Head>

      <Header />

      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  // After the SERVER has rendered.... Pass the results to the client
  return {
    props: {
      results: data,
    },
  };
};
