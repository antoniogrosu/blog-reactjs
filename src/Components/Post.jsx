import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Post(props) {
  const date = new Date();
  const content = props.content.map((item) => {
    return <p className="my-8 lato font-semibold text-md text-brown">{item}</p>;
  });
  return (
    <div>
      <h1 className="text-3xl lato text-brown font-semibold">{props.title}</h1>
      <p className="mt-4 lato font-semibold text-md text-brown">
        Redactat de <span className="font-bold">{props.author}</span>
      </p>
      <p className="mt-1 lato font-bold text-md text-brown">
        {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
      </p>
      <LazyLoadImage
        src={props.img}
        className="w-full mt-6 rounded-2xl h-auto"
      />
      {content}
    </div>
  );
}
