import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const MODAL_STYLES = {
  position: "fixed",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "20px",
  zIndex: 1000,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};

const Modal = ({ open, children, onClose }) => {
  console.log(open);
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        <MdClose
          size={30}
          onClick={onClose}
          style={{
            color: "black",
            float: "right",
            cursor: "pointer",
            alignSelf: "flex-end",
          }}
        />
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
