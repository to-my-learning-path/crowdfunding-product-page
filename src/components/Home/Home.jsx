import React, { useState } from "react";
import MastercraftIcon from ".././.././assets/images/logo-mastercraft.svg";
import BookmarkIcon from "../../assets/images/icon-bookmark.svg";
import CloseIcon from "../../assets/images/icon-close-modal.svg";
import {
  Divider,
  useMediaQuery,
  LinearProgress,
  Modal,
  Radio,
} from "@mui/material";

const list = [
  {
    id: 0,
    title: "Bamboo Stand",
    price: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    amount: 101,
  },
  {
    id: 1,
    title: "Black Edition Stand",
    price: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: 64,
  },
  {
    id: 2,
    title: "Mahogany Special Edition",
    price: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    amount: 0,
  },
];

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <main className=" mx-8 mt-16 lg:mt-20 xl:mt-28 space-y-8 max-w-[730px] md:mx-auto">
      <section className=" relative shadow-sm bg-[#fff] rounded-lg p-8 text-center space-y-6">
        <img
          className=" mx-auto absolute -translate-y-14 translate-x-28"
          src={MastercraftIcon}
          aria-hidden="true"
          alt=""
        />
        <h1 className=" text-xl px-8 font-700 -mt-14">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className=" text-darkGray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className=" flex justify-between gap-2 items-center">
          <button
            onClick={() => setIsModelOpen(!isModelOpen)}
            className=" bg-moderateCyan hover:bg-darkCyan text-[#fff] py-3 px-4 w-full md:w-fit md:px-12 font-500 rounded-full"
          >
            Back this project
          </button>
          {isBookmarked ? (
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="hover:opacity-80 flex justify-between items-center gap-2 md:bg-[#e5e7eb] md:rounded-full pr-4"
            >
              <img
                src={BookmarkIcon}
                style={{
                  filter:
                    "invert(62%) sepia(70%) saturate(353%) hue-rotate(127deg) brightness(85%) contrast(92%)",
                }}
                aria-hidden="true"
                alt=""
              />
              <p className=" hidden md:block text-darkCyan font-700">
                Bookmarked
              </p>
            </button>
          ) : (
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="hover:opacity-80 flex justify-between items-center gap-2 md:bg-[#e5e7eb] md:rounded-full pr-4"
            >
              <img src={BookmarkIcon} aria-hidden="true" alt="" />
              <p className=" hidden md:block font-700">Bookmark</p>
            </button>
          )}
        </div>
      </section>
      <section className="bg-[#fff] shadow-sm rounded-lg p-8 text-center space-y-6 ">
        <div className="  md:flex md:justify-around md:items-center space-y-6 md:space-y-0">
          <div>
            <p className=" text-3xl font-700">$89,914</p>
            <p className=" text-darkGray">of $100,000 backed</p>
          </div>
          <Divider
            varient="middle"
            aria-hidden="true"
            flexItem
            orientation={isMobile ? "horizontal" : "vertical"}
          />
          <div>
            <p className=" text-3xl font-700">5,007</p>
            <p className=" text-darkGray">total backers</p>
          </div>
          <Divider
            varient="middle"
            flexItem
            aria-hidden="true"
            orientation={isMobile ? "horizontal" : "vertical"}
          />
          <div>
            <p className=" text-3xl font-700">56</p>
            <p className=" text-darkGray">days left</p>
          </div>
        </div>
        <div className=" text-moderateCyan">
          <LinearProgress
            sx={{
              height: 10,
              borderRadius: "2rem",
            }}
            color="inherit"
            variant="determinate"
            value={(89914 / 100000) * 100}
          />
        </div>
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
            <RewardList
              key={item.title}
              title={item.title}
              price={item.price}
              description={item.description}
              amount={item.amount}
            />
          ))}
        </div>
      </section>
      <Modal
        open={isModelOpen}
        onClose={() => setIsModelOpen(!isModelOpen)}
        sx={{ overflowY: "scroll" }}
      >
        <div className=" my-14 bg-[#fff] shadow-sm rounded-lg p-8 max-w-[730px] md:mx-auto relative">
          <button
            onClick={() => setIsModelOpen(!isModelOpen)}
            className=" absolute top-8 right-8 hover:brightness-100"
          >
            <img src={CloseIcon} alt="" />
          </button>
          <div className=" space-y-6 text-left">
            <p className=" text-xl font-700">Back this project</p>
            <p className=" text-darkGray">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
          </div>
          <div className=" space-y-8 mt-8">
            {list.map((item) => (
              <ModelItemList
                key={item.title}
                title={item.title}
                price={item.price}
                description={item.description}
                amount={item.amount}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </Modal>
    </main>
  );
};

const RewardList = ({ title, price, description, amount }) => {
  return (
    <div
      className={` ${
        amount > 0 ? "" : "opacity-60 cursor-not-allowed"
      } border-[1px] border-darkGray text-left p-6 space-y-4 rounded-lg`}
    >
      <div className=" md:flex md:justify-between md:items-center">
        <p className="text-xl font-700 ">{title}</p>
        <p className=" text-moderateCyan font-500">Pledge ${price} or more</p>
      </div>
      <p className=" text-darkGray">{description}</p>
      <div className=" space-y-4 md:flex md:justify-between md:items-center">
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

const ModelItemList = ({ title, price, description, amount, id }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(Number(event.target.value));
  };

  return (
    <div
      className={` ${
        amount > 0 ? "" : "opacity-60 cursor-not-allowed"
      } border-[1px] border-darkGray p-6 rounded-lg grid grid-cols-[1fr_3fr] items-start`}
    >
      <div>
        <input
          type="radio"
          disabled={amount > 0 ? false : true}
          className=" w-8 h-8 accent-moderateCyan"
          name="id"
          value={id}
          defaultChecked={selectedValue === id}
          onChange={handleChange}
        />
      </div>
      <div className=" space-y-4 text-left">
        <div className=" md:flex md:justify-between md:items-center">
          <p className="text-xl font-700 ">{title}</p>
          <p className=" text-moderateCyan font-500">Pledge ${price} or more</p>
        </div>
        <p className=" text-darkGray">{description}</p>
        <div className=" space-y-4 md:flex md:justify-between md:items-center">
          <p className=" flex items-center gap-2">
            <span className=" text-3xl font-700">{amount}</span> left
          </p>
          <button className=" bg-moderateCyan hover:bg-darkCyan text-[#fff] py-3 px-8 font-500 rounded-full">
            Select Reward
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
