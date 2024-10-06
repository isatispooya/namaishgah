import GiftReward from "../modules/user/features/gift/mainGift";
import GreetingsSection from "../modules/user/features/greetings/greetings";
import QaPage from "../modules/user/features/Qa/Qa.page";

const Home = () => {
  return (
    <>
      <GreetingsSection />
      <QaPage />
      <GiftReward />
    </>
  );
};

export default Home;
