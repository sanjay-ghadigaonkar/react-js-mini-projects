import React, { useState } from "react";

const Faqs = [
  { id: 1, question: "What is React?", answer: "A JavaScript library." },
  { id: 2, question: "What is Vite?", answer: "A build tool." },
  { id: 3, question: "What is Git?", answer: "A version control system." },
];

const Faq = () => {
  // 1. State ban gayi. Shuru mein koi ID nahi hai isliye 'null' rakha.
  const [activeId, setActiveId] = useState(null);

  return (
    <div>
      <h2>Faqs Accordion</h2>

      {/* 2. Map loop chal raha hai */}
      {Faqs.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          {/* 3. onClick par hum current item ki ID state mein daal rahe hain */}
          <h3
            onClick={() => {
              activeId === item.id ? setActiveId(null) : setActiveId(item.id);
            }}
            style={{ cursor: "pointer" }}
          >
            {item.question}
          </h3>

          {activeId === item.id && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
