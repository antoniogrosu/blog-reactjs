import Hero from "../Components/Hero";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DidYouKnow from "../Components/DidYouKnow";
import { db } from "/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Teen Psychology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/webclip.png" />
      </Helmet>
      <Hero />
      <div className="my-10 p-1"></div>
      <DidYouKnow title="Stiati ca ?" text="" />
    </>
  );
}
