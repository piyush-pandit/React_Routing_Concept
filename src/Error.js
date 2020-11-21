import React, { useEffect } from "react";

const Error = (props) => {
  useEffect(() => {
    props.handleError(true);
  }, []);
  return (
    <div className="baba">
      <h1>Oops ! Page not Found.</h1>
    </div>
  );
};
export default Error;
