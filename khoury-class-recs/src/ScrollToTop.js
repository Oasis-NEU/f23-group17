import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Used to scroll to the top when the Route changes.
 *
 * Code from:
 * https://dev.to/kunalukey/scroll-to-top-when-route-changes-reactjs-react-router-3bgn
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
