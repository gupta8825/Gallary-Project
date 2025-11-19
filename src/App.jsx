import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=21`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-300 p-2 absolute top-1/2 left-1/2 translax-x-1/2 font-semibold translax-y-1/2  ">
      Loading...{" "}
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, index) {
      return (
        <div key={index}>
       <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className=" flex h-[82%] flex-wrap gap-4">{printUserData}</div>

      <div className="flex justify-center mt-10 fixed-center gap-6 items-center p-4">
        {/* //Previous Button */}

        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-black text-sm  cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold"
        >
          Previous
        </button>

        {/* ///Next Button */}

        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
