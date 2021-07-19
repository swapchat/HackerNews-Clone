import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <p>
      Page Not Found. Go to <Link to="/">Home</Link>
    </p>
  );
}

export default PageNotFound;