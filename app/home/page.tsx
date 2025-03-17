import Head from "next/head";

import HomePageTemplate from "@/app/_components/templates/HomePage";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Audiophile Shop</title>
      </Head>
      <HomePageTemplate />
    </>
  );
};

export default HomePage;
