import Image from "next/image";
import { dummyDB } from "../dummyDB";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Create a header centered on the screen with the text: "Courses and Modules" */}
      <header className="text-4xl font-bold">Courses and Modules</header>

    </main>
  );
}
