import React from "react";

const Button = ({children}) => {
  return (
    <button className="btn btn-outline-success text-center mb-3 mt-2 lift">
      <i className="d-none d-md-inline ml-2 mr-2 zmdi zmdi-google" />
      {children}
      <i className="d-none d-md-inline ml-2 mr-2 zmdi zmdi-chevron-right" />
    </button>
  );
};

export default Button;
