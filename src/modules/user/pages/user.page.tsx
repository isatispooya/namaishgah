import GiftReward from "../../gift/features/mainGift";
import GreetingsSection from "../../greetings/features/banner";
import QaPage from "./Qa.page";

const UserPage = () => {
  return (
    <>
      <GreetingsSection />
      <QaPage />
      <GiftReward />
    </>
  );
};

export default UserPage;
