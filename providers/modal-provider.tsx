"use client";

import { StoreMdoal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null during SSR
  }

  return (
    <>
      <StoreMdoal></StoreMdoal>
    </>
  );
};
