import React from "react";
import Defs from "./Defs";

// works only same units;
function cxTox(cx, width) {
  const cxNumber = cx.match(/\d+/g)[0];
  const cxString = cx.match(/[a-zA-Z,%]+/g)[0];
  const widthNumber = width.match(/\d+/g)[0];
  const widthString = width.match(/[a-zA-Z,%]+/g)[0];
  if (cxString === widthString) {
    const xNumber = cxNumber - 0.5 * widthNumber;
    return `${xNumber}${cxString}`;
  } else {
    throw new Error("units of cx and width are different!");
  }
}

export function Ellipse({
  cx,
  cy,
  rx,
  ry = rx,
  opacity = "1",
  degrees = "0deg",
}) {
  console.log(cx, cy, rx, ry, opacity);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full absolute overflow-visible -xz-10"
      style={{ transform: "translateZ(-10px)" }}
      // style={{ zIndex: "-10" }}
    >
      <Defs />
      <g fillOpacity={opacity}>
        <ellipse
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          strokeWidth="2"
          className="fill-primary-500"
          // fill="url(#gradient1)"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            transform: `rotate(${degrees})`,
          }}
          filter="url(#filter1)"
        />
      </g>
    </svg>
  );
}

export function Rect({
  cx = null,
  cy = null,
  x = null,
  y = null,
  width,
  height = width,
  rx = 0,
  ry = rx,
  opacity = "1",
  degrees = "0deg",
}) {
  console.log(cxTox("30%", "20%"));

  if (x === null && cx === null) {
    x = "0%";
  } else if (x === null && cx !== null) {
    x = cxTox(cx, width);
  }

  if (y === null && cy === null) {
    y = "0%";
  } else if (y === null && cy !== null) {
    y = cxTox(cy, height);
  }
  console.log(x, y, width, height, opacity);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full absolute overflow-visible -z-10"
      style={{ transform: "translateZ(-10px)" }}
      // style={{ zIndex: "-10" }}
    >
      <Defs />
      <g
        fillOpacity={opacity}
        className={`origin-center xrotate-[45deg] rotate-[${degrees}]`}
      >
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={rx}
          ry={ry}
          strokeWidth="2"
          fill="url(#gradient1)"
          filter="url(#filter1)"
        />
      </g>
    </svg>
  );
}
