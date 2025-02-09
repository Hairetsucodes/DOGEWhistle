"use server";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import WhistleBlowerModal from "./FrontpageComponents/WhistleBlowerModal";

export default async function Frontpage() {
  return (
    <section className="bg-gradient-to-b from-background to-background/80 flex flex-col items-center justify-center h-screen space-y-6 p-4">
      <WhistleBlowerModal />
      <footer className="w-full flex flex-col items-center justify-center px-4 py-2 absolute bottom-4 bg-background/70 backdrop-blur-sm rounded">
        <Link
          href="https://github.com/hairetsucodes/dogewhistle"
          className="flex items-center gap-2 underline font-medium text-primary hover:text-primary/80"
        >
          <GithubIcon className="w-5 h-5" /> MIT License Open Source
        </Link>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Protected under federal whistleblower laws · This is a concept demo and not affiliated with any government agency
        </p>
      </footer>
    </section>
  );
}
