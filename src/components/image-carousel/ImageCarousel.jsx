import "./ImageCarousel.css";
import { Fragment, useEffect, useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: "angOKO9RRxLf-pgXygA4Z2eQj9u8bQIs5gMnBOdyvT4",
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <Fragment>
      <img className="img" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </Fragment>
  );
};

const ImageCarousel = ({ query }) => {
  const [images, setImages] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLeftClick = () => {
    setCurrentSlide((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1
    );
    console.log("here");
  };

  const handleRightSwipe = () => {
    setCurrentSlide((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
    console.log("here");
  };

  useEffect(() => {
    // fetchImages(url);
    setLoading(true);
    api.search
      .getPhotos({ query: `${query}`, orientation: "landscape" })
      .then((result) => {
        console.log(result.response.results);
        setImages(result.response.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
    setLoading(false);
  }, [query]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred ! {errorMsg}</div>;
  }

  return (
    <div className="carousel-container">
      <div onClick={handleLeftClick} className="chevron-container">
        <FaCircleChevronLeft className="chevron-left" />
      </div>
      <div className="image-content">
        {images &&
          images.length > 0 &&
          images.map((image, index) => {
            return (
              <div
                className={index === currentSlide ? "current-image" : "hidden"}
                key={image.id}
              >
                <PhotoComp photo={image} />
              </div>
            );
          })}
      </div>
      <div onClick={handleRightSwipe} className="chevron-container">
        <FaCircleChevronRight className="chevron-right" />
      </div>
      <div className="indicator-row">
        <span className="circle-indicators">
          {images &&
            images.length > 0 &&
            images.map((_, index) => {
              return <button key={index}></button>;
            })}
        </span>
      </div>
    </div>
  );
};

export default ImageCarousel;
