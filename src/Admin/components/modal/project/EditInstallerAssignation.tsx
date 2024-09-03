import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import React from "react";
import AvailableInstrallerTable from "../../tables/AvailableInstallerTable";
import AvailableInstallerCheckbox from "../../checkbox/AvailableInstallerCheckbox";
interface IEdit {
  projId: string;
  isOpen: boolean;
  onClose: () => void;
}
const EditInstallerAssignation: React.FC<IEdit> = ({
  isOpen,
  onClose,
  projId,
}) => {
  return (
    <Modal
      placement="center"
      size="2xl"
      isOpen={isOpen}
      onClose={onClose}
      className="m-2 overflow-x-auto  scrollbar-thin scrollbar-track-white scrollbar-thumb-orange-100"
    >
      <ModalContent>
        <ModalHeader>
          <span className="text-sm text-gray-600">
            Edit Assignation of{" "}
            <span className=" text-base text-orange-400 font-semibold">
              Installer
            </span>
          </span>
        </ModalHeader>
        <ModalBody>
          {/* <AvailableInstrallerTable /> */}
          <AvailableInstallerCheckbox />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditInstallerAssignation;
