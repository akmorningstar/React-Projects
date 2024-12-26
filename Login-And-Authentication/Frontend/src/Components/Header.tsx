import React, { useEffect, useState } from "react";

const Header: React.FC<{username:string}> = ({username}) => {
  const [isVisible, setIsVisible] = useState(true);
  console.log(username)
  useEffect(() => {
    // Set a timeout to hide the tag after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="welcome-tag">
          <h1>Welcome {username}!</h1>
        </div>
      )}
    </>
  );
};

export default Header;
