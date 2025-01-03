import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router";
const App = () => {
  const [isDark, setisDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  return (
    <>
      <Header theme={[isDark, setisDark]} />
      <Outlet context={[isDark, setisDark]} />
    </>
  );
};

export default App;
