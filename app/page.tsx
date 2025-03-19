import Head from "next/head";

import HomePageTemplate from "@/app/_components/templates/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Audiophile Shop</title>
      </Head>
      <HomePageTemplate />
    </>
  );
}
