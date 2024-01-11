import { useState } from "react";
import ItemList from "./ItemList";

const RestrauntCategory = ({ title, itemCards, showItems, setShowIndex }) => {
  const toggleAccordion = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-lg bg-green-50 p-4 cursor-pointer">
        <div
          className="flex justify-between font-bold text-lg"
          onClick={() => toggleAccordion()}
        >
          <span>
            {title} ({itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestrauntCategory;
