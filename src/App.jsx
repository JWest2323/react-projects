import './App.css'
import Accordion from './components/accordion/Accordion';
import ImageCarousel from './components/image-carousel/ImageCarousel';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';
import LoadMoreButton from './components/load-more-button/LoadMoreButton';

const App = () => {
  return (
    <div>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={8} /> */}

      {/* <ImageCarousel query='deep space' /> */}

      <LoadMoreButton />
    </div>
  )
}

export default App
