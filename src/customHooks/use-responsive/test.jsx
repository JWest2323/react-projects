import useResponsiveHook from "./useResponsive";

const UseResponsiveTest = () => {
  const windowSize = useResponsiveHook();
  const { height, width } = windowSize;

  return (
    <div>
      <h1>Use Responsive Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};

export default UseResponsiveTest;
