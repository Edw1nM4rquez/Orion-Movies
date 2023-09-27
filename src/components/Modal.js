import './Modal.css'
function Modal({showModal, closeModal, content, titleModal}) {
    return (
      <div>
       
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2 className="modal-title">{titleModal}</h2>
              <hr></hr>
              <div className="modal-content-description">
                {content}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  export default Modal;