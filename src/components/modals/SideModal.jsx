import React from "react";
import { useState, useEffect, useCallback } from "react";

import { IoMdClose } from "react-icons/io";

const SideModal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
    >
      <div
        className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
          "
      >
        <div
          className={`
              translate
              duration-300
              h-full
              w-3/4
              md:w-full 
              ${showModal ? "translate-x-0" : "-translate-x-full"}
              ${showModal ? "opacity-100" : "opacity-0"}
            `}
        >
          <div
            className="
                translate
                h-full
                lg:h-auto
                md:h-auto
                border-0 
                shadow-lg 
                relative 
                flex 
                flex-col 
                w-full 
                bg-white 
                outline-none 
                focus:outline-none
              "
          >
            <button
              className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    right-0
                  "
              onClick={handleClose}
            >
              <IoMdClose size={18} />
            </button>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-2xl font-semibold">{title}</h4>
                <div className="mt-4">{body}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
