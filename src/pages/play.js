import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import Chat from "../components/chat.js";
import GameState from "../components/gameState";

const Play = () => {
  const { socket } = useLoaderData();

  useEffect(() => {
    socket.on("new-round", (res) => {
      localStorage.setItem("session", JSON.stringify(res));
    });
  }, [socket]);

  return (
    <div className="flex h-screen flex-col justify-between">
      <GameState />
      <Chat socket={socket} />
    </div>
  );
};

export default Play;
