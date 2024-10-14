
import React from "react";
// import { ICardDto } from "./types/card-type";
import { Card } from "../components/card";
import { Bill } from "../components/Bill";
export function CardList() {
  const list = [
    {
      id: 0,
      name: "Cappuccino",
      img: "/Cappuccino.png",
      price: 3.5,
      quantity: 0,
      onAdd: 0,
      onLower: 0,
    },
    {
      id: 1,
      name: "Latte",
      img: "/Latte.png",
      price: 4,
      quantity: 0,
      onAdd: 0,
      onLower: 0,
    },
    {
      id: 2,
      name: "Espresso",
      img: "/Espresso.png",
      price: 2.5,
      quantity: 0,
      onAdd: 0,
      onLower: 0,
    },
    {
      id: 3,
      name: "Mocha",
      img: "/Mocha.png",
      price: 4.5,
      quantity: 0,
      onAdd: 0,
      onLower: 0,
    },
    {
      id: 4,
      name: "Americano",
      img: "/Americano.png",
      price: 3,
      quantity: 0,
      onAdd: 0,
      onLower: 0,
    },
  ];
  const [Quantity, SetQuantity] = React.useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });
  const [total, SetTotal] = React.useState<number>(0);
  const [submit, SetSubmit] = React.useState<boolean>(false);


  function totalPrice() {
    const a = list.reduce((sum, el) => {
      return sum + el.quantity * el.price;
    }, 0);
    SetTotal(a);
  }
  function Onsubmit() {
    if(Quantity[i]!==0) SetSubmit(true);
  }

  const addToCart = (id: number) => {
    SetQuantity((Quantity) => ({ ...Quantity, [id]: Quantity[id]+ 1 }));
  };
  const removeFromCart = (id: number) => {
    if(Quantity[id]>0){
    SetQuantity((Quantity) => ({ ...Quantity, [id]: Quantity[id] - 1 }))};
  };
  return (
    <main className="bg-gray-400 container mx-auto p-3">
      <section className="flex flex-col gap-y-2">
        <div className="flex items-center justify-center gap-3">
          <img src="logo.png" alt="" />
          <p className="font-bold text-3xl">Starbucks</p>
        </div>
      </section>
      <p className="text-center py-2 text-xl font-bold md:text-lg md:font-semibold">
        StarBucks Online Coffee Order
      </p>
      <section className="grid sm:grid-cols-3 gap-3 md:grid  md:grid-cols-5 gap-x-2">
        {list.map((el) => (
          <Card
            id={el.id}
            key={el.id}
            name={el.name}
            img={el.img}
            price={el.price}
            quantity={el.quantity}
            onAdd={() => addToCart(el.id)}
            onLower={() => removeFromCart(el.id)}
          />
        ))}
      </section>
      <p className="text-center h-6 leading-6 pt-3 text-2xl font-bold md:text-lg md:font-semibold">
        Bill
      </p>
      <section className="grid sm:grid-cols-3  gap-2 md:grid  md:grid-cols-5 gap-x-2 pt-6 ">
        {list.map((el) => (
          <Bill
            id={el.id}
            key={el.id}
            name={el.name}
            img={el.img}
            price={el.price}
            quantity={el.quantity}
          />
        ))}
      </section>
      <div className="flex flex-col item-center justify-center h-3 leading-3 py-6">
      { total && (<p className="text-center  text-2xl font-bold md:text-lg md:font-semibold">
          Total:${totalPrice}
        </p>)}
      </div>
      <section>
        <button disabled={submit} onClick={Onsubmit} className="bg-orange-300 w-full text-white py-2 rounded-lg text-xl font-bold md:text-lg md:font-semibold">
          Submit Order
        </button>
      </section>
    </main>
  );
}


