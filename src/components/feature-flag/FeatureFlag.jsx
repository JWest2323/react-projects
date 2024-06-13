import { useContext } from "react";
import Accordion from "../accordion/Accordion";
import LightDarkMode from "../light-dark-mode/LightDarkMode";
import NavigationMenu from "../navigation-menu/NavigationMenu";
import QRCodeGenerator from "../qr-code-generator/QRCodeGenerator";
import RandomColor from "../random-color/RandomColor";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import { featureFlagContext } from "./context/FeatureFlagGlobalState";
import menus from "../navigation-menu/data";
import TabsContainer from "../custom-tabs/TabsContainer";

const FeatureFlag = () => {
  const { loading, enabledFlags } = useContext(featureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showQRCodeGenerator",
      component: <QRCodeGenerator />,
    },
    {
      key: "showNavigationMenu",
      component: <NavigationMenu menus={menus}/>,
    },
    {
      key: "showTabs",
      component: <TabsContainer />
    },
  ];

  const checkEnabledFlags = (currentKey) => {
    return enabledFlags[currentKey];
  };

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeatureFlag;
