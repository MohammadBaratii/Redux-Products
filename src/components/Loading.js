import React from "react";

const Loading = () => {
  return (
    <div className="fixed grid place-content-center inset-0 w-full h-screen">
      <div className="w-20 h-20 border-8 border-white border-t-amber-300 border-b-amber-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
