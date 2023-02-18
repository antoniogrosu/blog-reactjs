import svg from "/heroImg.svg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <h1 className="text-3xl lato font-bold text-brown mb-8">
        Confruntă-te cu viața de adolescent{" "}
      </h1>
      <div className="w-full">
        <img src={svg} className="object-fill"></img>
      </div>
      <p className="mt-8 lato text-brown font-semibold text-md">
        Blog-ul meu abordează problemele cu care se confruntă adolescenții
        într-un mod prietenos și accesibil.
      </p>
      <Link to="/blog">
        <button className="px-4 py-2 mt-6 bg-brown rounded-lg text-gray-50 lato font-semibold">
          Toate Postarile
        </button>
      </Link>
    </>
  );
}
