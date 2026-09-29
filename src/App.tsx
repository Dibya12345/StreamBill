import StreamBill from "@assets/StreamBill.png";
import MonthlyCard from "./components/MonthlyCard";

function App() {
  return (
    <main className="h-screen flex justify-center">
      <section className="m-0 p-0 w-[60%] h-screen">
        <header className="typewcond font-bold text-2xl mt-10">Stream Bills</header>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <MonthlyCard />
          <MonthlyCard />
          <MonthlyCard />
        </div>
      </section>
    </main>
  );
}

export default App;
