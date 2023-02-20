import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button className="border-2 border-orange-200 w-auto mr-4 text-orange-200 font-semibold lato bg-transparent px-6 py-2 rounded-2xl">
        MENU
      </Menu.Button>
      <Menu.Items className="text-center text-lg grid columns-1 py-12 justify-center gap-6 lato font-semibold w-full absolute left-0 top-24 bg-brown text-orange-200">
        <Menu.Item>
          {({ active }) => (
            <Link className={`${active && "bg-blue-500"}`} to="/blog">
              Blog Nostru{" "}
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
export default MyDropdown;
