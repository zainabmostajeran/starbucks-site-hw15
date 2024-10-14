import { IBillDto } from "../types/bill-type";
export const Bill: React.FC<IBillDto> = ({ name, img, price, quantity }) => {
  return (
    <section className="bg-green-950 py-5 px-5 rounded-lg hover:bg-green-900">
      <div className="flex flex-col gap-y-2 cursor-pointer ">
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
          <span className="text-white text-2xl sm:text-base">
            Qty:{quantity}
          </span>
        </div>
      </div>
    </section>
  );
};
