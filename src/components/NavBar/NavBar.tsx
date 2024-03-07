import Logo from "../../icons/Logo";
import AppstoreIcon from "../../icons/AppstoreIcon";
import ProjectsIcon from "../../icons/ProjectsIcon";
import DocumentsIcon from "../../icons/DocumentsIcon";
import ShopingBasketIcon from "../../icons/ShopingBasketIcon";
import ChatIcon from "../../icons/ChatIcon";
import MoonIcon from "../../icons/MoonIcon";
import TrashIcon from "../../icons/TrashIcon";

import styles from "./NavBar.module.scss";

// refactor
// const icons = [
//   {
//     icon: <AppstoreIcon />,
//     name: "Appstore",
//   },
//   {
//     icon: <ProjectsIcon />,
//     name: "Projects",
//   },
//   {
//     icon: <DocumentsIcon />,
//     name: "Documents",
//   },
//   {
//     icon: <ShopingBasketIcon />,
//     name: "ShopingBasket",
//   },
//   {
//     icon: <ChatIcon />,
//     name: "Chat",
//   },
//   {
//     icon: <MoonIcon />,
//     name: "Moon",
//   },
// ];

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo className={styles.logo} />

      <ul>
        <li>
          <AppstoreIcon />
        </li>
        <li>
          <ProjectsIcon />
        </li>
        <li>
          <DocumentsIcon />
        </li>
        <li>
          <ShopingBasketIcon />
        </li>
        <li>
          <ChatIcon />
        </li>
        <li>
          <MoonIcon />
        </li>

        <li>
          <TrashIcon />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
