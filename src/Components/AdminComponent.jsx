export default function AdminComponent(props) {
  return (
    <div className="flex items-center">
      <p className="lato font-semibold text-brown text-md mt-6">
        User : {props.user.displayName}
        {props.user.uid === import.meta.env.VITE_UID && (
          <span className="ml-4 bg-red-700 px-2 rounded-sm lato font-bold text-gray-50 text-md mt-3">
            ADMIN
          </span>
        )}
      </p>
    </div>
  );
}
