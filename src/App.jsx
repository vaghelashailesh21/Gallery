import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

const App = () => {
  const [userData, setUserdata] = useState([]);
  const [index, setIndex] = useState(1);
 
  const getData = async () => {
  const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserdata(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let printUserData = (
    <h3 className="text-gray-300 text-xs font-semibold absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  ">
      Loading.....
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen w-full text-white p-4 overflow-auto">
      <div className="flex justify-center items-center flex-wrap gap-4 p-2">
        {printUserData}
      </div>

      <div >
        <Buttons index={index} setIndex={setIndex} />
      </div>
    </div>
  );
};

export default App;

