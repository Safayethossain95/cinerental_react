import { useContext } from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./context";
import Sidebar from "./Sidebar";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <div className="m-auto p-[1.25rem]">
        <Navbar />
      </div>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] ">
          <Sidebar />
          <MovieList />
        </div>
      </main>
    </div>
  );
};

export default Page;
