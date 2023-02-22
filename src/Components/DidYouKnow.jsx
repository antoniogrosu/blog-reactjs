export default function DidYouKnow(props) {
  return (
    <div className="p-4 bg-brown text-gray-50 rounded-2xl">
      <h1 className="mb-4 text-2xl font-bold">{props.title}</h1>
      <p className="text-sm font-semibold">{props.text}</p>
    </div>
  );
}
