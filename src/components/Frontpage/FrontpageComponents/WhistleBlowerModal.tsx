"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import WhistleblowingForm from "./WhistleBlowerForm";
import doge from "@/assets/public.avif";
import whistle from "@/assets/whistle.svg";

export default function WhistleBlowerModal() {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="transition-all duration-300 hover:scale-105 hover:rotate-12 animate-float">
            <Image
              src={doge}
              alt="Company Logo"
              width={120}
              height={120}
              className="rounded-full shadow-lg"
            />
          </div>

          <div className="cursor-pointer transform hover:scale-105 transition-transform duration-200">
            <h1 className="animate-bounce-slow text-4xl md:text-5xl font-bold text-center text-gradient">
              Blow the DOGE whistle
            </h1>
            <div className="flex justify-center items-center mt-2">
              <Image
                src={whistle}
                alt="Whistle"
                width={24}
                height={24}
                className="inline-block hover:rotate-12 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-medium text-center text-muted-foreground mt-2">
              The People Voted for Major Reform
            </h2>
            <p className="text-center text-muted-foreground/80 mt-4 text-sm">
              Click here to submit a report
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Confidential Report Submission
          </DialogTitle>
          <DialogDescription className="text-center">
            Your privacy and security are our top priorities.
            <br />
            All submissions are encrypted and handled with strict
            confidentiality.
          </DialogDescription>
        </DialogHeader>
        <WhistleblowingForm />
      </DialogContent>
    </Dialog>
  );
}
