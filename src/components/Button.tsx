import React from "react";

const Button = ({ styles }: { styles: string }) => {
  return (
    <button
      type="button"
      className={`py-4 rounded-md px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
