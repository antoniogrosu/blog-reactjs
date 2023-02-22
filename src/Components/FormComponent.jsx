import CreateCard from "./CreateCard";
import CreatePost from "./CreatePost";
export default function FormComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <CreateCard />
      <CreatePost />
    </div>
  );
}
