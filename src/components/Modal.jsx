import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

const Modal = forwardRef(({ buttonText, children }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog
      ref={dialog}
      className="p-6 rounded"
    >
      {children}
      <form method="dialog" className="mt-4">
        <Button>{buttonText}</Button>
      </form>
    </dialog>
  );
});

export default Modal;
