import { useState, useRef, useEffect } from "react";
import GiftReward from "../features/gift/mainGift";
import GreetingsSection from "../features/greetings/greetings";
import QaPage from "../features/Qa/Qa.page";

const UserPage = () => {
  const [goToQa, setGoToQa] = useState(false);
  const [testFinished, setTestFinished] = useState(false); // Track test completion state
  const qaRef = useRef<HTMLDivElement | null>(null); // Create a ref for QaPage

  const handleClick = () => {
  
    setGoToQa(true); 
  };

  const handleTestFinish = () => {
    setTestFinished(true); 
  };


  useEffect(() => {
    if (goToQa && qaRef.current) {
      qaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [goToQa]);

  return (
    <>
      {!goToQa && !testFinished && (
        <GreetingsSection handleClick={handleClick} />
      )} {/* Hide GreetingsSection when goToQa is true */}
      {!testFinished && goToQa && (
        <div ref={qaRef}>
          <QaPage onFinishTest={handleTestFinish} /> {/* Pass onFinishTest to QaPage */}
        </div>
      )}
      {testFinished && <GiftReward />} 
    </>
  );
};

export default UserPage;
