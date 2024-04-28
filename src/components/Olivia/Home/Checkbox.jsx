import React from "react";

const CheckboxImage = () => {
  return (
    <div className="flex items-center">
      <input type="checkbox" className="hidden" />
      <label className="cursor-pointer">
        <div className="relative w-5 h-5 border border-gray-400 rounded-md">
          <div className="absolute inset-0 flex items-center justify-center">
          <svg
              className="w-3 h-3 stroke-current"
              viewBox="0 0 32 32"
            >
              <polygon
                style={{ fill: "#030104" }}
                points="11.941,28.877 0,16.935 5.695,11.24 11.941,17.486 26.305,3.123 32,8.818"
              />
            </svg>
          </div>
        </div>
      </label>
    </div>
  );
};

export default CheckboxImage;
