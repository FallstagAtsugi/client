import Head from "next/head";
import Image from "next/image";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>SNS Udemy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Timeline />
      </div>
    </>
  );
}
