import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position on route change. Without this, navigating from
 * halfway down the sightseeing page lands you halfway down the next one.
 * Jumps instantly rather than smooth-scrolling — a half-second glide
 * through a whole page on every navigation reads as a bug, not polish.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
