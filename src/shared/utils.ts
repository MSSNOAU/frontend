import clsx from "clsx";
import { DynPixel } from "./types";

export const pxToRem = <P extends string | number>(
  pixels: DynPixel<P>
): string => {
  const pxToRemCalc = <P extends string | number>(
    pixels: DynPixel<P>
  ): number => {
    if (typeof pixels === "string") {
      const parsedValue = parseInt(pixels, 10);
      const rem = parsedValue / 16;
      return rem;
    }

    const value = Number(pixels) / 16;
    return value;
  };

  const px = pxToRemCalc(pixels);

  return px + "rem";
};

