import React from "react";
import MastercraftIcon from ".././.././assets/images/logo-mastercraft.svg";
import BookmarkIcon from "../../assets/images/icon-bookmark.svg";
import { Divider } from "@mui/material";

const list = [
  {
    title: "Bamboo Stand",
    price: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    amount: 101,
  },
  {
    title: "Black Edition Stand",
    price: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: 64,
  },
  {
    title: "Mahogany Special Edition",
    price: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    amount: 0,
  },
];

const Home = () => {
  return (
    <main className=" mx-8 mt-16 space-y-8 ">
      <section className=" relative shadow-sm bg-[#fff] rounded-lg p-8 text-center space-y-6">
        <img
          className=" mx-auto absolute -translate-y-14 translate-x-28"
          src={MastercraftIcon}
          alt=""
        />
        <h1 className=" text-xl px-8 font-700 -mt-14">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className=" text-darkGray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className=" flex justify-between gap-2">
          <button className=" bg-moderateCyan hover:bg-darkCyan text-[#fff] py-3 px-4 w-full font-500 rounded-full">
            Back this project
          </button>
          <button>
            <img className=" hover:opacity-80" src={BookmarkIcon} alt="" />
            <p className=" hidden md:block">Bookmark</p>
          </button>
        </div>
      </section>
      <section className=" bg-[#fff] shadow-sm rounded-lg p-8 text-center space-y-6">
        <div>
          <p className=" text-3xl font-700">$89,914</p>
          <p className=" text-darkGray">of $100,000 backed</p>
        </div>
        <Divider varient="middle" />
        <div>
          <p className=" text-3xl font-700">5,007</p>
          <p className=" text-darkGray">total backers</p>
        </div>
        <Divider varient="middle" />
        <div>
          <p className=" text-3xl font-700">56</p>
          <p className=" text-darkGray">days left</p>
        </div>
        <div></div>
      </section>
      <section className=" bg-[#fff] shadow-sm rounded-lg p-8 text-center">
        <div className=" space-y-6 text-left">
          <p className=" text-xl font-700">About this project</p>
          <p className=" text-darkGray">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className=" text-darkGray">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <div className=" space-y-8 mt-8">
          {list.map((item) => (
            <ModelItem
              key={item.title}
              title={item.title}
              price={item.price}
              description={item.description}
              amount={item.amount}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

const ModelItem = ({ title, price, description, amount }) => {
  return (
    <div
      className={` ${
        amount > 0 ? "" : "opacity-60 cursor-not-allowed"
      } border-[1px] border-darkGray text-left p-6 space-y-4 rounded-lg`}
    >
      <div>
        <p className="text-xl font-700 ">{title}</p>
        <p className=" text-moderateCyan font-500">Pledge ${price} or more</p>
      </div>
      <p className=" text-darkGray">{description}</p>
      <div className=" space-y-4">
        <p className=" flex items-center gap-2">
          <span className=" text-3xl font-700">{amount}</span> left
        </p>
        {amount > 0 ? (
          <button className=" bg-moderateCyan hover:bg-darkCyan text-[#fff] py-3 px-8 font-500 rounded-full">
            Select Reward
          </button>
        ) : (
          <button className=" cursor-not-allowed bg-darkGray text-[#fff] py-3 px-8 font-500 rounded-full">
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
