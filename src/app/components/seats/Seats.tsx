"use client";

import { useEffect, useState } from "react";

import { UserType } from "@/types/UserType";
import { SeatInfo } from "./components/SeatInfo";
import { SeatGrid } from "./components/SeatGrid";

export const Seats = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [seats, setSeats] = useState<UserType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSeats(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span>Yükleniyor...</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 flex flex-col gap-12 py-12 px-64 w-full h-full justify-center items-center">
      <SeatGrid seats={seats} />
      <SeatInfo />
    </div>
  );
};
