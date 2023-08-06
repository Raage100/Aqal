import React from "react";


const MenuItem = ({ label, onClick, icon, style }) => {
  const defaultClasses = "px-3 py-2 hover:bg-gray-200 transition cursor-pointer";
  return (
    <div
    onClick={onClick}
      className={style ? style : defaultClasses}
    >
      {label}
    {icon ? icon :null }
    </div>
  );
};

export default MenuItem;
