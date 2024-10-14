import { ICardDto } from "../types/card-type";
import React from "react";
export const Card: React.FC<ICardDto> = ({
  name,
  img,
  price,
  quantity,
  onAdd,
  onLower,
  id,
}) => {
  return (
    <section className="bg-green-950 py-5 px-5 rounded-lg hover:bg-green-900">
      <div className="flex flex-col gap-y-2 cursor-pointer">
        <div className="flex flex-col justify-center items-center">
          <img className="w-96" src={img} />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-white text-2xl sm:text-base">
            {name}
          </p>
          <p className="text-orange-300 font-bold text-2xl sm:text-base">
            ${price}
          </p>
        </div>
        <div className="flex text-2xl sm:text-base">
          <span
            onClick={() => onAdd(id)}
            className="bg-orange-300 px-2 py-1 cursor-pointer"
          >
            +
          </span>
          <span className="px-2 py-1 bg-white">{quantity}</span>
          <span
            onClick={() => onLower(id)}
            className="bg-orange-300 px-2 py-1 cursor-pointer"
          >
            -
          </span>
        </div>
      </div>
    </section>
  );
};
