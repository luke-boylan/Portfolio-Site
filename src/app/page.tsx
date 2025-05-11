"use client"
import { motion } from "motion/react";
import { useState } from "react";
import ProjectBox  from "./Components/ProjectBox";

export default function Home() {

  const [brightness, setBrightness] = useState(10);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="statusBlock grid rounded-3xl p-8 absolute top-8 left-8">

          <div className= "bottom-4">
          <span className="font-bold">
            Dev status:
          </span>
          </div>

          <span>
            Hello 👋👷, I'm currently building this website!!!
          </span>
        </div>

        <div className="grid">
            <h1>
              Luke Boylan
            </h1>
            <h3>
              4th year ICS student @ Trinity College Dublin
            </h3>
          </div>
          <div className="border">
            <span className="underline text-2xl font-bold">
              Projects
            </span>
            <ProjectBox image="" description ="A student timetable app with built in chatbot created for my Software Engineering Project class."/>
          </div>

      </main>
    </div>
  );
}
