export type DynPixel<P = string | number> = P extends number
  ? P
  : P extends `${infer T extends number}px`
  ? T
  : P;


