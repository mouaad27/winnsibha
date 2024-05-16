import React, { useState, useEffect, createContext, useContext } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Navbar from "./Navbar";
import { IoIosSquare } from "react-icons/io";

// Create a context to hold the count value
const CountContext = createContext();

// Custom hook to access the count value
export const useCount = () => useContext(CountContext);

const Fav = () => {
  const list = [
    {
      title: "TSHIRT",
      img: "6.jpg",
      price: "",
    },
    {
      title: "Raspberry",
      img: "5.jpg",
      price: "",
    },
    {
      title: "Lemon",
      img: "6.jpg",
      price: "",
    },
    {
      title: "Avocado",
      img: "5.jpg",
      price: "",
    },
    {
      title: "Lemon 2",
      img: "6.jpg",
      price: "",
    },
    {
      title: "Banana",
      img: "5.jpg",
      price: "",
    },
    {
      title: "Watermelon",
      img: "6.jpg",
      price: "",
    },
    {
      title: "Banana",
      img: "5.jpg",
      price: "",
    },
    {
      title: "Watermelon",
      img: "6.jpg",
      price: "",
    },
  ];

  const [count, setCount] = useState(list.length);

  useEffect(() => {
    setCount(list.length);
  }, [list]);

  return (
    <CountContext.Provider value={count}>
      <div>
        
        <div className="flex ml-10 mt-20 mb-16">
          <div className=" align-middle mt-3 text-[#23414B] ml-20">
            <IoIosSquare />
          </div>
          <div>
            <p className=" text-3xl font ml-2 text-[#23414B] font-semibold">
              FAVOURITES LIST
            </p>
          </div>
        </div>
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
