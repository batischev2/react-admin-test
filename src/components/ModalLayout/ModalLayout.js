import React from "react";

import "./modalLayout.scss";

export const ModalLayout = ({
  active,
  close,
  children
}) => {
  return (
    <div
      className={active ? `modal-layout active` : "modal-layout"}
      onClick={() => close(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
