import GiftReward from "../modules/gift/features/mainGift";
import GreetingsSection from "../modules/greetings/features/banner";
import QaPage from "../modules/user/pages/Qa.page";

const Home = () => {
  return (
    <>
      <GreetingsSection />
      <QaPage />
      <GiftReward/>
    </>
  );
};

export default Home;
