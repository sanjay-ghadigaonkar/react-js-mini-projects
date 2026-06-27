import React, { useState } from "react";

// Naya Dataset: Smartphones
const smartphones = [
  "Apple iPhone 15 Pro",
  "Samsung Galaxy S24 Ultra",
  "Google Pixel 8 Pro",
  "OnePlus 12",
  "Xiaomi 14 Ultra",
  "Motorola Edge 50 Pro",
];

const SmartphoneSearch = () => {
  const [smartPhone, setSmartPhone] = useState("");
  return (
    <div>
      <input
        style={{ width: "200px", height: "20px", margin: "10px" }}
        type="text"
        placeholder=" search your smartphones "
        value={smartPhone}
        onChange={(e) => {
          setSmartPhone(e.target.value);
        }}
      />
      <ul>
        {smartphones
          .filter((phones) => {
            return phones.toLowerCase().includes(smartPhone.toLowerCase());
          })
          .map((phones, index) => (
            <li
              style={{ listStyle: "none", font: "caption", margin: "5px" }}
              key={index}
            >
              {phones}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SmartphoneSearch;
