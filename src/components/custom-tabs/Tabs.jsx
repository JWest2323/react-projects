import { useState } from "react";
import './Tabs.css'

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = getCurrentIndex => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => {
          return (
            <div
              className={`tab-item ${
                currentTabIndex === index ? "active-tab" : ""
              }`}
              onClick={() => handleOnClick(index)}
              key={tabItem.label}
            >
              <span className="label">{tabItem.label}</span>
            </div>
          );
        })}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
