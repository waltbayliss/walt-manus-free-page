import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Home — redirects to /manus-free
 * This project is a single-purpose landing page for the Manus giveaway.
 */
export default function Home() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation("/manus-free");
  }, [setLocation]);

  return null;
}
