import svg from "/heroImg.svg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <div>
        <h1 className="text-3xl lato font-bold text-brown mb-8">
          Confrunta-te cu viata de adolescent{" "}
        </h1>
      </div>
      <div className="md:w-10/12 md:absolute md:flex md:justify-end md:top-48">
        <img src={svg} className="object-fill"></img>
      </div>
      <div className="md:w-8/12">
        <p className="mt-8 lato text-brown font-semibold text-md md:text-sm md:mt-0">
          Blog-ul meu abordează problemele cu care se confruntă adolescenții
          într-un mod prietenos și accesibil.
        </p>
        <Link to="/blog">
          <button className="px-4 py-2 mt-6 bg-brown rounded-lg text-gray-50 lato font-semibold md:text-sm">
            Toate Postarile
          </button>
        </Link>
      </div>
    </div>
  );
}
