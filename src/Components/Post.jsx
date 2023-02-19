export default function Post(props) {
  const content = props.content.map((item) => {
    return <p>{item}</p>;
  });
  return (
    <div>
      <h1>{props.title}</h1>
      {content}
    </div>
  );
}
