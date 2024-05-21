import { useState } from "react";
import "./Accordion.css";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [selections, setSelections] = useState([]);

  const handleSingleSelection = getCurrentId => {
    setSelected(selected !== getCurrentId ? getCurrentId : null);
  };

  const handleMultiSelection = getCurrentId => {
    const selectionsCopy = [...selections];

    const findCurrIDIndex = selectionsCopy.indexOf(getCurrentId);
    if (findCurrIDIndex === -1) {
      selectionsCopy.push(getCurrentId);
    } else {
      selectionsCopy.splice(findCurrIDIndex, 1);
    }
    setSelections(selectionsCopy);
  };

  return (
    <div className="wrapper">
      <button className="btn-success" onClick={() => setMultiSelect(!multiSelect)} >
        Enable Multi Seclection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          <div>
            {data.map(dataItem => {
              return (
                <div key={dataItem.id} className="item">
                  <div
                    onClick={
                      multiSelect
                        ? () => handleMultiSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                    }
                    className="title"
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {multiSelect
                    ? selections.indexOf(dataItem.id) !== -1 && (
                        <div className="content">{dataItem.answer}</div>
                      )
                    : selected === dataItem.id && (
                        <div className="content">{dataItem.answer}</div>
                      )}
                </div>
              );
            })}
          </div>
        ) : (
          <>No data found</>
        )}
      </div>
    </div>
  );
};

export default Accordion;
