import { useRef, useState } from "react";
import useEscape from "./useEscape";

const UseEscapeTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useEscape(ref, () => setShowContent(false));


  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Random Content</h1>
          <p>
            Please click outside of this content to close, otherwise it will not
            close.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseEscapeTest;
