"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      <Modal
        title="test"
        description="test desc"
        isOpen
        onClose={() => {}}
      ></Modal>
      {/* <h1>Hello</h1> */}
    </div>
  );
};

export default SetupPage;
