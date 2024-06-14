import Image from "next/image";
import { dummyDB } from "../dummyDB";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* Create a header centered on the screen with the text: "Courses and Modules" */}
      <header className="text-4xl font-bold">Courses and Modules</header>

      {/* Create a new section for courses and modules in the middle of the screen. Loop through the dummyDB and display the CourseName, ModuleTitle, Sequence, and Professor. */}
      <section className="flex flex-col items-center">
        {dummyDB.map((course) => (
          <div key={course.id} className="flex flex-col items-center p-4 m-4 border-2 bg-blue-400">
            <h2 className="text-2xl font-bold">{course.CourseName}</h2>
            <p className="text-lg">{course.ModuleTitle}</p>
            <p className="text-lg">Sequence: {course.Sequence}</p>
            <p className="text-lg">Professor: {course.Professor}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
