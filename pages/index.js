import Header from "./components/header";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-2 bg-[#0d0f11]`}
    >
      <Header />
    </main>
  );
}
