import { useState } from "react";
import Modal from "./Modal";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal</button>
      {showModal && (
        <Modal
          id={"custom-id"}
          header={<h2>Customized Header</h2>}
          body={<div>Custom body</div>}
          footer={<h2>Customized Footer</h2>}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default ModalTest;
