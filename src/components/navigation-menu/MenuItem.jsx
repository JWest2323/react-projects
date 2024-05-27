import MenuList from "./MenuList";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [showCurrentChildren, setShowCurrentChildren] = useState({});

  const handleToggleChildren = getCurrentLabel => {
    setShowCurrentChildren({
      ...showCurrentChildren,
      [getCurrentLabel]: !showCurrentChildren[getCurrentLabel]
    });
  };

  console.log(showCurrentChildren);

  return (
    <li className="menu-item-container">
      <div className="menu-label-container">
        {" "}
        <p className="menu-label">{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {showCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      showCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
