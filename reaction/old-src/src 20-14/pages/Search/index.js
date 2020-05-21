import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import API from "../../utils/API";
import DeveloperContext from "../../utils/DeveloperContext"
function Search() {
  // const [search, setSearchState] = useState("Wikipedia");
  // const [title, setSearchStateState] = useState("");
  // const [url, setSearchStateState] = useState("");
  // const [error, setSearchState] = useState("");

  const [searchState, setSearchState] = useState({
    search: "",
    title: "",
    url: "",
    error: ""
  });

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    if (!searchState.search) {
      return;
    }

    API.searchTerms(searchState.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearchState({title:res[1][0], url: res[3][0]});
        // setSearchStateState(res.data[3][0]);
      })
      .catch(err => setSearchState({error: err}));
  }, [searchState.search]);

  const handleInputChange = event => {
    setSearchState({search: event.target.value});
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <DeveloperContext.Provider value ={searchState}>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: searchState.error ? 1 : 0, marginBottom: 10 }}>
          {searchState.error}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={searchState.search}
        />
        <SearchResults title={searchState.title} url={searchState.url} />
      </Container>
      </DeveloperContext.Provider>
    </div>
  );
}

export default Search;
