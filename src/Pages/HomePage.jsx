import Hero from "../Components/Hero";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="my-20"></div>
      <h1 className="text-3xl lato font-semibold text-brown mb-8">
        Ultima Postare
      </h1>
    </>
  );
}
