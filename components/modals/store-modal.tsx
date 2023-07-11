"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreMdoal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Add New Store"
      description="Add New Store to manage product and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Store Form
    </Modal>
  );
};
