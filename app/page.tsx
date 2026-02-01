import Form from "./components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full bg-zinc-50 items-center justify-between p-8">
      <div className="w-1/3 ml-30">
        <Form />
      </div>
    </main>
  );
}
