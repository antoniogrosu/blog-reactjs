import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

export default function Post(props) {
  const date = new Date();
  const imgHref = `${props.img}`;
  const descriptionContent = `${props.short}`;
  const content = props.content.map((item) => {
    return <p className="my-8 lato font-semibold text-md text-brown">{item}</p>;
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={descriptionContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href={imgHref} />
      </Helmet>
      <div>
        <h1 className="text-3xl lato text-brown font-semibold">
          {props.title}
        </h1>
        <p className="mt-4 lato font-semibold text-md text-brown">
          Redactat de {props.author}
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
    </>
  );
}
