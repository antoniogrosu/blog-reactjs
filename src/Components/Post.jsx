export default function Post(props) {
  const content = props.content.map((item) => {
    return <p className="my-8 lato font-semibold text-md text-brown">{item}</p>;
  });
  return (
    <div>
      <h1 className="text-3xl lato text-brown font-semibold">{props.title}</h1>
      <img src={props.img} className="w-full mt-8 rounded-3xl"></img>
      {content}
    </div>
  );
}
