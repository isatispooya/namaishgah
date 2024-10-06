import { useState } from "react";
import GiftReward from "../features/gift/mainGift";
import GreetingsSection from "../features/greetings/greetings";
import QaPage from "../features/Qa/Qa.page";

const UserPage = () => {

    const [goToQa , setGoToQa] = useState(false)

    const HandleClick = () => {
        return(<QaPage />)

    }
  return (
    <>
      <GreetingsSection onclick={HandleClick} />
      <QaPage />
      <GiftReward />
    </>
  );
};

export default UserPage;
