import Form from "./components/form/form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 ">
      <Form />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      </div>
    </div>
  );
}
