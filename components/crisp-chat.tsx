"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c3967d98-047b-409f-be2a-71bbe8fc346b");
  }, []);

  return null;
};
