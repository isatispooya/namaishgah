import { useState, useRef, useEffect } from "react";
import GiftReward from "../features/gift/mainGift";
import GreetingsSection from "../features/greetings/greetings";
import QaPage from "../features/Qa/Qa.page";

const UserPage = () => {
  const [goToQa, setGoToQa] = useState(false);
  const qaRef = useRef<HTMLDivElement | null>(null); 

  const handleClick = () => {
    console.log("handleClick");
    setGoToQa(true);
  };


  useEffect(() => {
    if (goToQa && qaRef.current) {
      qaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [goToQa]);

  return (
    <>
      {!goToQa && <GreetingsSection handleClick={handleClick} />} 
      {goToQa && (
        <div ref={qaRef}>
          <QaPage />
        </div>
      )}
    
    </>
  );
};

export default UserPage;
