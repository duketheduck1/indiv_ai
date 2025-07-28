"use client";
import { sidebar} from "@/components/contents";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { getQueueContent } from "@/database/content";
import { useEffect, useState } from "react";
// import Image from "next/image";

const Home = () => {
  
  return (
    <>    
    <main className=" flex-center min-h-screen flex-col gap-4 px-4 py-12">
      <WelcomeScreen />;
    </main>
    </>
  );
}

export default Home;
