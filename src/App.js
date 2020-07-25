import React from "react";
import { Search, SearchResults } from "./components";
import { SearchProvider } from "./utils/globalState";

function App() {
  // JSX
  return (
    <SearchProvider>
      <div className="container">
        <Search />
        <SearchResults />
      </div>
    </SearchProvider>
  );
}

export default App;
