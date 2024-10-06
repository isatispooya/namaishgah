import GiftReward from "../features/gift/mainGift";
import GreetingsSection from "../features/greetings/banner";
import QaPage from "../features/Qa/Qa.page";


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
