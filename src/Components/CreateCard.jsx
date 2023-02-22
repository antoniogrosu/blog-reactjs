import { useState } from "react";
import { db } from "/firebaseConfig";
import DidYouKnow from "./DidYouKnow";
import { addDoc, collection } from "firebase/firestore";
export default function CreateCard() {
  const [cardInfo, setCardInfo] = useState({});
  const [cardTitle, setCardTitle] = useState("");
  const [cardText, setCardText] = useState("");
  const firstPageRef = collection(db, "firstPage");
  const createCuriosityCard = async () => {
    await addDoc(firstPageRef, cardInfo);
  };
  function saveCardInfo() {
    setCardInfo((card) => ({
      title: cardTitle,
      text: cardText,
    }));
  }
  return (
    <div>
      <div className="mt-8 bg-brown rounded-2xl px-4 py-8 mb-12">
        <h1 className="lato font-semibold text-3xl text-gray-50 mb-8 underline">
          Postare "Stiati ca?"{" "}
        </h1>
        <form>
          <label className="ml-2 text-gray-50 font-bold lato text-lg capitalize">
            Titlu{" "}
          </label>
          <input
            type="text"
            placeholder="Titlul Postarii Card `Stiati Ca?`"
            className="mt-1 mb-6 indent-4 w-full h-12 rounded-2xl"
            onChange={() => {
              setCardTitle(event.target.value);
            }}
          />
          <label className="ml-2 text-gray-50 font-bold lato text-lg capitalize">
            Continut{" "}
          </label>
          <input
            type="text"
            placeholder="Scrie continutul cardului"
            className="mt-1 mb-6 indent-4 w-full h-12 rounded-2xl"
            onChange={() => {
              setCardText(event.target.value);
            }}
          />
        </form>
      </div>

      <h1 className="lato font-semibold text-3xl bg-brown py-2 px-4 text-gray-50 rounded-2xl mb-8">
        Card Preview
      </h1>
      <DidYouKnow title={cardTitle} text={cardText} />
      <button
        className="mt-6 px-8 py-2 text-md bg-green-200 font-bold text-gray-900 rounded-2xl mr-4"
        onClick={saveCardInfo}
      >
        Save Changes
      </button>
      <button
        className="mt-6 px-8 py-2 text-md bg-gray-50 font-bold text-brown rounded-2xl"
        onClick={createCuriosityCard}
      >
        Post Now
      </button>
    </div>
  );
}
