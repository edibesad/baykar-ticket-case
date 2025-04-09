import { Seats } from "./components/seats/Seats";

export default function Home() {
  return (
    <div className="container mx-auto md:h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 w-full items-center justify-center">
        <Seats />
      </div>
    </div>
  );
}
