import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "./MenuItems.js";
import {observer} from "mobx-react";
import {useRootStore} from "../../mst/Stores/RootStore";

export const NavBar = observer(() => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useRootStore()
  const showMenu = () => {
    setActive(!active);
  };

  const Links = [
    { name: "Home", link: "/home" },
    { name: "Posts", link: "/posts" },
    { name: "Products", link: "/products" },
  ];

  if (currentUser === undefined) {
    Links.push({name: "SignIn", link: "/signin"})
  } else {
    Links.push({name: "SignOut", link: "/signout"})
  }

  return (
    <nav>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div
          className="font-bold text-2xl lg:text-4xl uppercase hover:cursor-pointer mt-4"
          onClick={() => {
            navigate("/home");
          }}
        >
          WEB
        </div>
        <nav>
          <div className="absolute right-6 md:hidden top-6 scale-150">
            <MenuOutlinedIcon
              onClick={showMenu}
              className="scale-150 cursor-pointer"
            />
          </div>

          <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
            {Links.map((link) => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <MenuItems showMenu={showMenu} active={active} Links={Links} />
        </nav>
      </div>
    </nav>
  );
});
