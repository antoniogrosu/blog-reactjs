import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Post(props) {
  const content = props.content.map((item) => {
    return <p className="my-8 lato font-semibold text-md text-brown">{item}</p>;
  });
  return (
    <div>
      <h1 className="text-3xl lato text-brown font-semibold">{props.title}</h1>
      <LazyLoadImage
        src={props.img}
        className="w-full mt-8 rounded-2xl h-auto"
      />
      {content}
    </div>
  );
}
