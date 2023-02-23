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
        <title>Home Teen Psychology</title>
      </Helmet>
      <Hero />
      <div className="my-10 p-1"></div>
      <DidYouKnow
        title="Stiati ca ?"
        text="Fluturii din stomac pe care ii simțim atunci când ne îndrăgostim sunt de fapt niște semnale pe care corpul ni le arată pentru a ne putea proteja de vreun trigger in legătura cu trauma noastră?"
      />
    </>
  );
}
