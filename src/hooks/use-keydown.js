import React from "react";

export function useKeydown(key, onKeydown) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.key === key) {
        onKeydown();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [key, onKeydown]);
}
