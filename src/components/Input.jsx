import React, { useContext, useState } from "react";
import { BtnRounded } from "react-buttons-library";
import userContext from "../context/UserContext";

const Input = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(userContext);

  const handleclick = () => {
    setUser(username);
  };

  return (
    <>
      <div className="flex w-[700px] mx-auto mt-20 gap-4 items-center">
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username..."
          className="w-[500px] h-12 bg-[#dadada] rounded-full p-3 border-none outline-none"
          type="text"
        />
        <BtnRounded
          label="Submit"
          btnClass="default"
          onClick={handleclick}
        />
      </div>
    </>
  );
};

export default Input;
