import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import AllCountriesContainer from "./AllCountriesContainer";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <main>
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
