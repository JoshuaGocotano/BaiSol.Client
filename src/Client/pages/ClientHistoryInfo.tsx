import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ClientProjectQuotationPage from "./ClientProjectQuotationPage";
import ProjectPayment from "../../main/components/Payment/ProjectPayment";
import ClientProjectReport from "./ClientProjectReport";
import { RiArrowRightWideFill } from "react-icons/ri";
import { Button } from "@nextui-org/react";
import Form from "../../main/components/Quotation/Form";

const ClientHistoryInfo = () => {
  const { projId } = useParams<{ projId: string }>();
  const components = [
    {
      component: <Form />,
      name: "Quotation",
      index: 1,
    },
    {
      component: <ProjectPayment />,
      name: "Payment",
      index: 2,
    },
    {
      component: <ClientProjectReport projectId={projId} />,
      name: "Report",
      index: 3,
    },
  ];

  const [activeComponent, setActiveComponent] = useState<JSX.Element | null>(
    components[0].component
  );
  const [activeName, setActiveName] = useState<string>(components[0].name);
  const [activeButton, setActiveButton] = useState<number>(components[0].index);

  const handleButtonClick = (
    component: JSX.Element,
    name: string,
    buttonIndex: number
  ) => {
    setActiveComponent(component);
    setActiveName(name);
    setActiveButton(buttonIndex);
  };
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="flex items-center mb-4">
          Project
          <span className="mx-2 text-gray-400">
            <RiArrowRightWideFill />
          </span>
          {activeName}
        </h1>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-2 my-8">
        {components.map((item) => (
          <Button
            variant="shadow"
            key={item.index}
            className={`w-28 font-semibold text-sm md:w-36 lg:w-48 text-white md:text-lg  ${
              activeButton === item.index ? "bg-orange-300" : "bg-orange-400"
            }`}
            onClick={() =>
              handleButtonClick(item.component, item.name, item.index)
            }
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="container mx-auto p-2 rounded-lg">{activeComponent}</div>
    </div>
  );
};

export default ClientHistoryInfo;
