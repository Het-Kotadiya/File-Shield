import "./App.css";
import { MyAlert } from "./CustomComponent/MyAlert";
import MyCard from "./CustomComponent/MyCard";

function App() {
  return (
    <div className="flex flex-col w-[550px] border rounded-2xl border-black m-auto p-10">
      <div className="mb-3">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
          SecureFileX{" "}
        </h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {" "}
          Your files, Your password, Your privacy.
        </h3>
      </div>

    {/* Alert */}
    <MyAlert></MyAlert>

    {/* Card */}
    <MyCard></MyCard>


    </div>
  );
}

export default App;
