import StreamBill from "@assets/StreamBill.png";
import MonthlyCard from "./components/MonthlyCard";

function App() {
  return (
    <main className="h-screen flex justify-center ">
      <section className="m-0 p-0 w-[50%] h-screen ">
        <img src={StreamBill} className="w-[20%]" alt="" />
        <MonthlyCard />
      </section>
    </main>
  );
}

export default App;
