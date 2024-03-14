import "./App.css";
import Courses from "./Component/Courses/Courses";

import Cart from "./Component/Cart";
import { useState } from "react";

function App() {
  const [carts, setCarts] = useState([]);
  const handleAddCourse = (selected) => {
    const newCarts = [...carts, selected];
    setCarts(newCarts);
  };
  return (
    <div>
      <div className="bg-purple-600 text-white">
        <h1 className="text-center font-bold text-3xl p-2 ">
          Course Registration
        </h1>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-10">
          <Courses handleAddCourse={handleAddCourse}></Courses>
        </div>
        <div className="col-span-2">
          <Cart carts={carts}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
