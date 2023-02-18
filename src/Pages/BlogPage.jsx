import Card from "../Components/Card";
export default function BlogPage() {
  return (
    <>
      <h1 className="text-brown text-3xl lato font-semibold mb-14">
        Blogul TeenPsychology
      </h1>
      <div className="grid columns-1 gap-14">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
