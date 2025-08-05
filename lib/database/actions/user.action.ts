"use server";

import { handleError } from "@/lib/utils";
import Reward from "../models/reward.model";

export const getRewards = async () => {
  try {
    const response = await Reward.find({});
    return response;
  } catch (error) {
    handleError(error);
  }
};
