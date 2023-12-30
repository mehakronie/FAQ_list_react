import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Questions from "./Questions";

let queskey = 0;

function App() {
  const questions = [
    {
      title: "How to Create a New Customer Account in Magento 2",
      info:
        "To manage their purchases and order activities on your Magento stores",
    },
    {
      title: "How to Set up Magento Customer Configuration Step by Step",
      info:
        "To optimize the customers’ journey from account creation to after-sales service, Magento 2 provides store ",
    },
    {
      title: "An Ultimate Guide to Magento 2 Customer Group",
      info:
        "Merchants often create onsite promotions to engage a particular customer group",
    },
    {
      title: "When can I get it?",
      info:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, eveniet",
    },
  ];

  return (
    <>
      <div className="container">
        {questions.map((ques) => (
          <div key={queskey++}>
            <Questions ques={ques} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
