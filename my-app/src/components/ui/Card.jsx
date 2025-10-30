// src/components/Card.jsx
import React from "react";

function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Card;
