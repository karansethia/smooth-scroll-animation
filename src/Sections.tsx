import { useInView } from "motion/react";
import { MutableRefObject, useEffect, useRef } from "react";

type SectionsProps = {
  container: MutableRefObject<HTMLDivElement | null>,
  isInitial: MutableRefObject<boolean>,
  position: number,
  onInView: (id: string) => void,
  color: string,
}

const Sections = ({ position, onInView, container, color, isInitial }: SectionsProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(sectionRef, { amount: "all", root: container });

  useEffect(() => {
    if (isInView && !isInitial.current) {
      onInView(position.toString());
    }
  }, [isInView, onInView, position]);

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      id={position.toString()}
      className={` ${color} w-100 h-[70vh] pt-[5vh] flex items-center justify-center`}
    >
      <p>Section {position}</p>
    </div>
  );
};

export default Sections;
