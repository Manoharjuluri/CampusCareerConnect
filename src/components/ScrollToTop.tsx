import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls to top on route change
 * and handles hash links properly
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element after a short delay
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      // Otherwise, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

