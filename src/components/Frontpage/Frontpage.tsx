"use server";
import WhistleBlowerModal from "./FrontpageComponents/WhistleBlowerModal";

export default async function Frontpage() {
  return (
    <section className="bg-gradient-to-b from-background to-background/80 min-h-screen flex flex-col items-center justify-center h-screen space-y-6 p-4">
      <WhistleBlowerModal />
    </section>
  );
}
