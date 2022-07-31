import type { RequestHandler } from "@sveltejs/kit";
import { ADVICESLIP_API } from "../api/adviceslip.api";
import type { Advice, Slip } from "../types";

export const GET: RequestHandler<{}, Slip<Advice>> = async () => {
  const body = await ADVICESLIP_API.getRandomAdvice();
  return {
    body,
  };
};
