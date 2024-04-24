import React, { useState, useEffect, createContext, useContext } from 'react';
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Navbar from "./Navbar";

// Create a context to hold the count value
const CountContext = createContext();

// Custom hook to access the count value
export const useCount = () => useContext(CountContext);

const Fav = () => {
    const list = [
        
        {
          title: "Tangerine",
          img: "6.jpg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "5.jpg",
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: "6.jpg",
          price: "$5.30",
        },
        {
          title: "Avocado",
          img: "5.jpg",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: "6.jpg",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "5.jpg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "6.jpg",
          price: "$12.20",
        },
        {
          title: "Banana",
          img: "5.jpg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "6.jpg",
          price: "$12.20",
        },
      ];

  const [count, setCount] = useState(list.length);

  useEffect(() => {
    setCount(list.length);
  }, [list]);

  return (
    <CountContext.Provider value={count}>
       <div>
        <Navbar />
        <div className="flex justify-center">
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-10/12 ">
            {list.map((item, index) => (
              <Card
                shadow="sm"
                key={index}
                isPressable
                onPress={() => console.log("item pressed")}
              >
                <CardBody className="overflow-visible p-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[210px]"
                  />
                </CardBody>
                <CardFooter className="text-small justify-between bg-slate-300">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.price}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </CountContext.Provider>
  );
};

export default Fav;
