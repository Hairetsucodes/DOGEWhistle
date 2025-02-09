"use client";
import React from "react";
import WhistleBlowerModal from "@/components/Frontpage/WhistleBlowerModal";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-background to-background/80 min-h-screen flex flex-col items-center justify-center h-screen space-y-6 p-4">
      {/* Logo Header */}
      <WhistleBlowerModal />
    </div>
  );
}
