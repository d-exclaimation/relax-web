import { rc } from "@d-exclaimation/next";
import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

const SPEED = 700;
type Props = ComponentPropsWithoutRef<"span"> & {
  count: number;
};

export default rc<Props>(({ count, ...rest }) => {
  const targetRef = useRef(count);
  const intervalRef = useRef<number | NodeJS.Timeout>();
  const currentRef = useRef(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const delay = SPEED / targetRef.current;
    intervalRef.current = setInterval(() => {
      if (currentRef.current >= targetRef.current)
        return clearInterval(intervalRef.current);
      setCurrent((prev) => prev + 1);
      currentRef.current++;
    }, delay);
    return () => clearInterval(intervalRef.current);
  }, []);

  return <span {...rest}>{current}</span>;
});
