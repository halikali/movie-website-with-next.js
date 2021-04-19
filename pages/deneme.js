import Link from "next/link";
import React from "react";
import Image from "next/image";
import Head from "next/head";

const deneme = () => {
  return (
    <div>
      <Head>
        <title>Deneme Pages</title>
      </Head>
      <h1>Hello Deneme</h1>
      <Link href="/">
        <a> Home </a>
      </Link>

      <Image
        src="/images/skinCare.jpg"
        height={300}
        width={300}
        alt="skinCare"
        className="deneme"
      />
      <style jsx>
        {`
          a {
            color: red;
            font-size: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default deneme;
