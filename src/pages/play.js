import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import Chat from "../components/chat.js";

const Play = () => {
  const { socket } = useLoaderData();

  useEffect(() => {
    socket.on("new-round", (res) => {
      localStorage.setItem("session", JSON.stringify(res));
    });
  }, [socket]);

  return (
    <div>
      <h1 className="text-3xl font-bold justify-center text-center">In Game</h1>
      <Chat socket={socket} />
    </div>
  );
};

export default Play;
