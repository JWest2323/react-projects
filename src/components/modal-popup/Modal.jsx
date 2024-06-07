import './Modal.css'

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="modal-body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our modal body</p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          {footer ? footer : <h2>This is our modal footer</h2>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
