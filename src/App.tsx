import { useEffect, useRef, useState } from "react";
import Sections from "./Sections";
import NavButton from "./NavButton";

const App = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initialRef = useRef(true);

  const [viewId, setViewId] = useState("1");
  const [selected, setSelected] = useState("1");

  useEffect(() => {
    setSelected(viewId);
  }, [viewId]);

  const viewChangeHandler = (id: string) => {
    if (initialRef.current) return; // Avoid updating on the initial render
    setViewId(id);
  };

  const setChangeTabHandler = (id: string) => {
    setSelected(id);
    const container = containerRef.current;
    const targetElement = document.getElementById(id);
    if (container && targetElement) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      const scrollAmount = targetRect.top - containerRect.top;

      // Animate the scroll
      container.scrollTo({
        top: container.scrollTop + scrollAmount,
        behavior: "smooth", // Smooth scroll animation
      });
    }
  };

  return (
    <div className="w-[100vw]">
      <div
        id="nav"
        className="fixed bg-white w-full flex items-center justify-end gap-10 px-10 h-[8vh]"
      >
        <NavButton text="1" selected={selected === "1"} setSelected={setChangeTabHandler} />
        <NavButton text="2" selected={selected === "2"} setSelected={setChangeTabHandler} />
        <NavButton text="3" selected={selected === "3"} setSelected={setChangeTabHandler} />
        <NavButton text="4" selected={selected === "4"} setSelected={setChangeTabHandler} />
      </div>
      <div
        id="views"
        ref={containerRef}
        className="p-10 pt-20 h-[80vh] w-full overflow-scroll"
      >
        <p className="w-full text-4xl">Hello</p>
        <div className="flex flex-col gap-2">
          <Sections
            position={1}
            onInView={viewChangeHandler}
            container={containerRef}
            color="bg-blue-300"
            isInitial={initialRef}
          />
          <Sections
            position={2}
            onInView={viewChangeHandler}
            container={containerRef}
            color="bg-red-300"
            isInitial={initialRef}
          />
          <Sections
            position={3}
            onInView={viewChangeHandler}
            container={containerRef}
            color="bg-purple-300"
            isInitial={initialRef}
          />
          <Sections
            position={4}
            onInView={viewChangeHandler}
            container={containerRef}
            color="bg-green-300"
            isInitial={initialRef}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
