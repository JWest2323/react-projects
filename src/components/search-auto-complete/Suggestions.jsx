const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((dataItem, index) => {
            return (
              <li onClick={handleClick} key={index}>
                {dataItem}
              </li>
            );
          })
        : ""}
    </ul>
  );
};

export default Suggestions;
