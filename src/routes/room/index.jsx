import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 } from "uuid";

const Room = () => {
  const { roomId } = useParams();

  const mettingUi = async (element) => {
    const appId = parseInt(import.meta.env.VITE_VIDEO_APP_ID);
    const serverSecret = import.meta.env.VITE_VIDEO_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      v4(),
      "Noufiya"
    );

    const ui = ZegoUIKitPrebuilt.create(kitToken);

    ui.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
        ref={mettingUi}
      ></div>
    </div>
  );
};

export default Room;
