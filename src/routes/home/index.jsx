import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState("");

  const navigate = useNavigate();

  const handleJoin = () => {
    console.log(roomId);
    navigate(`room/${roomId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen shadow-lg">
      <div className="flex flex-col items-center justify-center p-10 gap-6 shadow-lg rounded-2xl">
        <div className="text-center text-xl">
          <h1 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Cloud Based Video Conferencing Platform
          </h1>
        </div>
        <input
          className="border border-black p-2 rounded-lg w-96"
          type="text"
          placeholder="Enter room id"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button
          className="py-2 px-8 rounded-lg bg-blue-700 text-white"
          onClick={handleJoin}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Home;
