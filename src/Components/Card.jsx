export default function Card(props) {
  return (
    <div className="w-full lato">
      <div className="w-full bg-gray-200 p-4 rounded-t-2xl h-36"></div>
      <div className="bg-brown w-full p-6 rounded-b-2xl">
        <h1 className="text-2xl text-gray-50 font-semibold mb-4">
          {props.title}
        </h1>
        <span className="px-4 py-2 bg-gray-50 font-semibold text-brown rounded-md text-md">
          {props.dom}
        </span>
      </div>
    </div>
  );
}
