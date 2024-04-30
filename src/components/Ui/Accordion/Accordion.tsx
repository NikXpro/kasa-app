import { Icon } from "@components/Ui/Icon";
import React, { useState } from "react";
import "./Accordion.scss";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`accordion ${isOpen ? "active" : ""}`}
      onClick={toggleAccordion}
    >
      <div className="accordion-header">
        <h4 className="accordion-title">{title}</h4>
        <Icon id="arrow" />
      </div>
      <div className="accordion-content">{children}</div>
    </div>
  );
};
