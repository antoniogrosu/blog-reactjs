import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Card(props) {
  return (
    <Link to={`/blog/${props.slang}`}>
      <div className="w-full lato">
        <LazyLoadImage src={props.img} className="object-fill rounded-t-2xl" />
        <div className="bg-brown w-full p-6 rounded-b-2xl">
          <h1 className="text-2xl text-gray-50 font-semibold mb-4">
            {props.title}
          </h1>
          <span className="px-4 py-2 bg-gray-50 font-semibold text-brown rounded-md text-md capitalize">
            {props.type}
          </span>
        </div>
      </div>
    </Link>
  );
}
