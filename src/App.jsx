import './App.css'
import Accordion from './components/accordion/Accordion';
import ImageCarousel from './components/image-carousel/ImageCarousel';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';

const App = () => {
  return (
    <div>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={8} /> */}

      <ImageCarousel query='deep space' />
    </div>
  )
}

export default App
