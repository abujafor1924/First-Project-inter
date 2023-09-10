import ModalPage from "./ModalPage";

const Modal = () => {
  return (
    <>
      <button
        className="btn ml-[50%] btn-success"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Click me
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <ModalPage />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
