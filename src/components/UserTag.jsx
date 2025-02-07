import React, { useEffect, useState } from "react";
import axios from "axios";

function UserTag(props) {
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !=null) {
      axios
        .get("http://localhost:5000/api/users/", {
          headers: {
            Authorization: `Bearer ${token}`, // FIX: Use backticks instead of single quotes
          },
        })
        .then((res) => {
          console.log(res); // ✅ Debugging
          // setUserData(res.data);
          setName(res.data.user.firstName + " " + res.data.user.lastName); // Store user data in state
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }
  }, []); // ✅ Runs only once when component mounts

  return (
    <div className="absolute right-0 top-0 flex items-center cursor-pointer">
      <img src={props.imageLink} className="rounded-full w-[75px] h-[75px]" />
      <span className="text-white ml-[5px] text-xl ">
      {name}
      </span>
    </div>
  );
}

export default UserTag;
