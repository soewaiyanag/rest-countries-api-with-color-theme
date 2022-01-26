import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";

export default function App() {
  return (
    <div
      className="
      font-nunito
      bg-neutral-50
      dark:bg-dark-blue-200
      text-dark-blue-300
      dark:text-white
    "
    >
      <Nav />
      <Header />
    </div>
  );
}
