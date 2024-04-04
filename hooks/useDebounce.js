import { useEffect, useState } from "react";

export default function useDebounce(input, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(input);
    }, delay);

    return () => clearTimeout(timerId);
  }, [input, delay]);

  return debouncedValue;
}
