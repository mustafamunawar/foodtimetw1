import React from "react";
function Defs() {
  return (
    <defs>
      <filter
        // x="-23.6%"
        // y="-187.5%"
        // width="147.2%"
        // height="475%"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        id="filter1"
      >
        <feGaussianBlur stdDeviation="50" in="SourceGraphic" />
      </filter>

      <radialGradient id="gradient1">
        <stop offset="0%" stopColor="#0a5" stopOpacity="1" />
        <stop offset="60%" stopColor="#05a" stopOpacity="1" />
      </radialGradient>
    </defs>
  );
}

export default Defs;
