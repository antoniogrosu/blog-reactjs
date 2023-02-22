export default function DidYouKnow(props) {
  return (
    <div className="p-4 bg-brown mt-16 text-gray-50 rounded-2xl md:w-4/12">
      <h1 className="mb-4 text-2xl font-bold">{props.title}</h1>
      <p className="text-sm font-semibold">{props.text}</p>
    </div>
  );
}
