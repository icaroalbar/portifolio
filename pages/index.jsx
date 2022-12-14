import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Teste from "../components/Teste";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto my-5 grid grid-cols-12 gap-x-10">
        <div className="col-span-12 lg:col-span-4">
          <Card>
            <Teste />
          </Card>
          <Card>
            <Teste />
            <Teste />
            <Teste />
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <Card>
            <Teste />
          </Card>
          <Card>
            <Teste />
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
