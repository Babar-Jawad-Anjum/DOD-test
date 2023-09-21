"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { incrementByAmount } from "@/lib/redux/actions";
// import { incrementByAmount } from "@/lib/redux";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const dispatch = useDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Derm on demand
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Button onClick={() => dispatch(incrementByAmount(23))}>
        testsdjf kjshdfkahsdfkjhasfkahwefkjhasfkjashe fkjh
      </Button>
    </main>
  );
}
