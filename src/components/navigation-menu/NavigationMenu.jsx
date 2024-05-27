import "./NavigationMenu.css";
import MenuList from "./MenuList";

const NavigationMenu = ({ menus = [] }) => {
  return (
    <div className="nav-menu-container">
      <MenuList list={menus} />
    </div>
  )
}

export default NavigationMenu
