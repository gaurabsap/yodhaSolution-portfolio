import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopPage = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return <>{children}</>; // render children
};

export default ScrollTopPage;
