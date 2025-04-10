import { Payment } from "./components/payment/Payment";
import { Seats } from "./components/seats/Seats";

export default function Home() {
  return (
    <div className="container mx-auto p-12">
      <div className="grid grid-cols-2 w-full items-center justify-center">
        <Seats />
        <Payment />
      </div>
    </div>
  );
}
