"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    AOS?: {
      init: (options: {
        duration: number;
        once: boolean;
        easing: string;
        offset: number;
      }) => void;
    };
  }
}

export function AosInit() {
  useEffect(() => {
    let attempts = 0;
    const timer = window.setInterval(() => {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          once: true,
          easing: "ease-out-cubic",
          offset: 80
        });
        window.clearInterval(timer);
      }

      attempts += 1;
      if (attempts > 20) {
        window.clearInterval(timer);
      }
    }, 100);

    return () => window.clearInterval(timer);
  }, []);

  return null;
}
