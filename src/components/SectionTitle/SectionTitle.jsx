import React from "react";

const SectionTitle = ({ subHeading, heading, headingColor = "black" }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center mb-10">
      <p className="text-yellow-600 mb-2">---{subHeading}---</p>
      <h3 className={`text-3xl uppercase ${headingColor}  border-y-4 py-3`}>
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
