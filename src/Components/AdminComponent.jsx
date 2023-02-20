export default function AdminComponent(props) {
  return (
    <p className="lato font-semibold text-brown text-md my-6">
      User : {props.user.displayName}
      {props.user.uid === "BOU6XzmFQ3d611BgqWzbVCvAX2H2" && (
        <p>You're the boss</p>
      )}
    </p>
  );
}
