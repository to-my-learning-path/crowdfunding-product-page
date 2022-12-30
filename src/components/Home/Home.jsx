import React from "react";

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
    <main>
      <section>
        <img src="" alt="" />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div>
          <button>Back this project</button>
          <button>
            <img src="" alt="" />
            <p>Bookmark</p>
          </button>
        </div>
      </section>
      <section>
        <div>
          <p>$89,914</p>
          <p>of $100,000 backed</p>
        </div>
        <div>
          <p>5,007</p>
          <p>total backers</p>
        </div>
        <div>
          <p>56</p>
          <p>days left</p>
        </div>
        <div></div>
      </section>
      <section>
        <p>About this project</p>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        {list.map((item) => (
          <ModelItem
            key={item.title}
            title={item.title}
            price={item.price}
            description={item.description}
            amount={item.amount}
          />
        ))}
      </section>
    </main>
  );
};

const ModelItem = ({ title, price, description, amount }) => {
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>Pledge ${price} or more</p>
      </div>
      <p>{description}</p>
      <div>
        <p>
          <span>{amount}</span> left
        </p>
        <button>Select More</button>
      </div>
    </div>
  );
};

export default Home;
