import type { Advice, Slip } from "../types";

const getRandomAdvice = async () => {
  return (await (await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })).json()) as Slip<Advice>;
};

export const ADVICESLIP_API = {
  getRandomAdvice,
};
