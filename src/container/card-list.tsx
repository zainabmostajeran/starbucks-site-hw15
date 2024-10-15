import React from "react";
import { Card } from "../components/card";
import { Bill } from "../components/Bill";
import { QuantityType } from "../types/quantity-type";

export function CardList() {
  const list = [
    {
      id: 0,
      name: "Cappuccino",
      img: "/Cappuccino.png",
      price: 3.5,
      quantity: 0,
    },
    {
      id: 1,
      name: "Latte",
      img: "/Latte.png",
      price: 4,
      quantity: 0,
    },
    {
      id: 2,
      name: "Espresso",
      img: "/Espresso.png",
      price: 2.5,
      quantity: 0,
    },
    {
      id: 3,
      name: "Mocha",
      img: "/Mocha.png",
      price: 4.5,
      quantity: 0,
    },
    {
      id: 4,
      name: "Americano",
      img: "/Americano.png",
      price: 3,
      quantity: 0,
    },
  ];

  const [quantity, setQuantity] = React.useState<QuantityType>({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  const [total, setTotal] = React.useState<number>(0);
  const [submit, setSubmit] = React.useState<boolean>(true);

  function totalPrice() {
    const totalAmount = list.reduce((sum, el) => {
      return sum + quantity[el.id] * el.price;
    }, 0);
    setTotal(totalAmount);
  }
  const addToCart = (id: number) => {
    setQuantity((prevQuantity) => {
      const newQuantity = { ...prevQuantity, [id]: prevQuantity[id] + 1 };
      return newQuantity;
    });
  };

  const removeFromCart = (id: number) => {
    setQuantity((prevQuantity) => {
      if (prevQuantity[id] > 0) {
        const newQuantity = { ...prevQuantity, [id]: prevQuantity[id] - 1 };
        return newQuantity;
      }
      return prevQuantity;
    });
  };

  React.useEffect(() => {
    totalPrice();

    const hasItems = Object.values(quantity).some((qty) => qty > 0);
    setSubmit(!hasItems);
  }, [quantity]);

  return (
    <main className="bg-gray-400 container mx-auto p-3">
      <section className="flex flex-col gap-y-2">
        <div className="flex items-center justify-center gap-3">
          <img src="logo.png" alt="" />
          <p className="font-bold text-3xl">Starbucks</p>
        </div>
      </section>
      <p className="text-center py-2 text-xl font-bold md:text-lg md:font-semibold">
        Starbucks Online Coffee Order
      </p>
      <section className="grid sm:grid-cols-3 gap-3 md:grid-cols-5 gap-x-2">
        {list.map((el) => (
          <Card
            id={el.id}
            key={el.id}
            name={el.name}
            img={el.img}
            price={el.price}
            quantity={quantity[el.id]}
            onAdd={() => addToCart(el.id)}
            onLower={() => removeFromCart(el.id)}
          />
        ))}
      </section>
      <p className="text-center h-6 leading-6 pt-3 text-2xl font-bold md:text-lg md:font-semibold">
        Bill
      </p>
      <section className="grid sm:grid-cols-3 gap-2 md:grid-cols-5 gap-x-2 pt-6">
        {list.map((el) => (
          <Bill
            id={el.id}
            key={el.id}
            name={el.name}
            img={el.img}
            price={el.price}
            quantity={quantity[el.id]}
          />
        ))}
      </section>
      <div className="flex flex-col item-center justify-center h-3 leading-3 py-6">
        {total > 0 && (
          <p className="text-center text-2xl font-bold md:text-lg md:font-semibold">
            Total: ${total.toFixed(2)}
          </p>
        )}
      </div>
      <section>
        <button
          disabled={submit}
          className="bg-orange-300 w-full text-white py-2 rounded-lg text-xl font-bold md:text-lg md:font-semibold disabled:bg-gray-500"
        >
          Submit Order
        </button>
      </section>
    </main>
  );
}
