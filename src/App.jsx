import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setdata] = useState([]);

  const resopnse = async () => {
    await axios
      .get("https://mxpertztestapi.onrender.com/api/sciencefiction")
      .then((res) => {
        console.log("hello");
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    resopnse();
  }, []);
  return (
    <div className="pt-5" style={{ backgroundColor: "#100910" }}>
      <div className="text-white text-[8px]">2nd API is not working</div>

      <div className="flex justify-center">
        <span className="bg-white p-2 px-5 rounded-3xl text-3xl font-bold">
          Story Advenure
        </span>
      </div>
      <div className=" min-h-screen md:p-10 grid  w-fit mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((item, index) => (
          <div
            key={item._id}
            className=" flex flex-col gap-2 justify-center w-52 py-2 text-white bg-gradient-to-r from-[#2b0050] via-[#001972] to-[#6a8be8] rounded-2xl"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEdJP1SvqzkYuBG4S0NdZlQ-L03fMxpus7A&s"
              alt=""
              className="w-[90%] h-[90%] m-2 rounded-2xl"
            />
            <h1 className="text-center font-bold text-lg">
              {!item.Storyadvenure.Storytitle
                ? "Title"
                : item.Storyadvenure.Storytitle}
            </h1>
            <h1>{}</h1>
            <div className="text-center px-10 bg-white text-black rounded-full mx-5 ">
              <button className="text-md font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text ">
                {!item.Status ? "New" : item.Status}
              </button>
            </div>
          </div>
        ))}
        ;{/* })} */}
      </div>
      <div>2nd API is not working</div>
    </div>
  );
}

export default App;
