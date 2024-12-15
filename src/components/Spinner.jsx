import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      cssOverride={override}
      size={200}
      loading={loading}
    />
  );
};

export default Spinner;
