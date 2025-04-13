import { Payment } from "./components/payment/Payment";
import { Seats } from "./components/seats/Seats";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <Seats />
        <div>
          <Payment />
        </div>
      </div>
    </div>
  );
}
