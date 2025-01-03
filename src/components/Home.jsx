import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import AllCountriesContainer from "./AllCountriesContainer";
import { useState } from "react";
import { useOutletContext } from "react-router";

const Home = () => {
  const [query, setQuery] = useState("");

  const [isDark] = useOutletContext();
  return (
    <>
      <main className={isDark ? "dark" : ""}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <AllCountriesContainer query={query} />
      </main>
    </>
  );
};

export default Home;
