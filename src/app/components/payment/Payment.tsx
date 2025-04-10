import { Accordion } from "./components/Accordion";

export const Payment = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-12 w-full container">
        <Accordion num={1} />
        <Accordion num={2} />
        <Accordion num={3} />
      </div>
    </div>
  );
};
