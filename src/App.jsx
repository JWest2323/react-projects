import "./App.css";
import Accordion from "./components/accordion/Accordion";
import ImageCarousel from "./components/image-carousel/ImageCarousel";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import LoadMoreButton from "./components/load-more-button/LoadMoreButton";
import NavigationMenu from "./components/navigation-menu/NavigationMenu";
import { menus } from "./components/navigation-menu/data";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import ScrollProgressBar from "./components/scroll-progress-bar/ScrollProgressBar";
import TabsContainer from "./components/custom-tabs/TabsContainer";
import ModalTest from "./components/modal-popup/ModalTest";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import SearchAutoComplete from "./components/search-auto-complete/SearchAutoComplete";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlagGlobalState from "./components/feature-flag/context/FeatureFlagGlobalState";
import FeatureFlag from "./components/feature-flag/FeatureFlag";
import UseFetchHookTest from "./customHooks/use-fetch/test";


const App = () => {
  return (
    <div>
      {/* <Accordion /> */}
      
      {/* <RandomColor /> */}

      {/* <StarRating numOfStars={8} /> */}

      {/* <ImageCarousel query='deep space' /> */}

      {/* <LoadMoreButton /> */}

      {/* <NavigationMenu menus={menus} /> */}

      {/* <QRCodeGenerator /> */}

      {/* <LightDarkMode /> */}

      {/* <ScrollProgressBar url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* <TabsContainer /> */}

      {/* <ModalTest /> */}

      {/* <GithubProfileFinder /> */}

      {/* <SearchAutoComplete /> */}

      {/* <TicTacToe /> */}

      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}

      <UseFetchHookTest />
    </div>
  );
};

export default App;
