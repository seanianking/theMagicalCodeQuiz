import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
export default function Search() {
  const [search, setSearch] = useState("Wikipedia");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    API.searchTerms(search)
    .then(res => {
      if (res.data.length === 0) {
        throw new Error("No results found.");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      
      setTitle(res.data[1][0]);
      setUrl(res.data[3][0]);
      setError()
      
    })
    .catch(err => setError(err.message));
  },[search])
  const handleInputChange = event => {
setSearch( event.target.value );
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    if (!search) {
      return;
    }
    // API.searchTerms(state.search)
    //   .then(res => {
    //     if (res.data.length === 0) {
    //       throw new Error("No results found.");
    //     }
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     setState({
    //       title: res.data[1],
    //       url: res.data[3][0],
    //       error: ""
    //     });
    //   })
    //   .catch(err => setState({ error: err.message }));
  };
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For Anything on Wikipedia</h1>
          <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
            {error}
          </Alert>
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={search}
          />
          <SearchResults
            title={title}
            url={url}
          />
        </Container>
    </div>
  )
}