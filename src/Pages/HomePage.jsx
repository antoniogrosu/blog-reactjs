import Hero from "../Components/Hero";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DidYouKnow from "../Components/DidYouKnow";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="my-6"></div>
    </>
  );
}
