import React from "react";

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
