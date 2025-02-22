import { useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  function toggleLoading(message: string | null): void {
    setIsLoading(!isLoading);
    setMessage(message);
  }

  return {
    isLoading,
    message,
    toggleLoading,
  };
};

export default useLoading;
