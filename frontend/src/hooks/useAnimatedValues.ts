import { useEffect, useState } from "react";

const useAnimatedValues = <T>(
  finalValue: number,
  changeDependency: T
): number => {
  const [value, setValue] = useState<number>(0);
  const [intervalCount, setCountInterval] = useState<number>(0);

  useEffect(() => {
    const startAnimation = () => {
      setCountInterval(
        window.setInterval(() => {
          setValue((prevValue) => {
            if (prevValue < finalValue) return prevValue + 1;
            window.clearInterval(intervalCount);
            return prevValue;
          });
        }, 30)
      );
    };
    startAnimation();
    return () => window.clearInterval(intervalCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeDependency]);

  return value;
};

export default useAnimatedValues;
