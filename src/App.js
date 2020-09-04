import React, { useState } from "react";

import "./App.css";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";

import Details from "./components/Details";

function App() {
    const [loading, setLoading] = useState(false); // Is the data loading?
    const [input, setInput] = useState(""); // User input for brewery query
    const [breweries, setBreweries] = useState([]); // Array of breweries that will be set after fetching
    const [emptyResult, setEmptyResult] = useState(false); // Is the fetch result empty?

    const getBreweries = () => {
        fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(true);
                setTimeout(function () {
                    if (data.length < 1) {
                        setEmptyResult(true); // NO results for the query
                    }
                    setBreweries(data);
                    setLoading(false);
                }, 500);
            })
            .catch((error) => {
                console.error(error.message);
                alert("There was an error fetching the data");
            });
    };

    // Handle clearing the search input, the results displayed, and the empty result state.
    const handleClearingResults = () => {
        setBreweries([]);
        setEmptyResult(false);
        setInput("");
    };

    const breweriesArr = breweries
        .sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        .map((brewery) => (
            <>
                <li
                    className='list-item'
                    key={brewery.id}
                    data-toggle='modal'
                    data-target={"#detailsModal_" + brewery.id}
                >
                    <h3>{brewery.name}</h3>
                    <p className='lead'>
                        {brewery.city + ", " + brewery.state}
                    </p>
                </li>
                <Details brewery={brewery} />
            </>
        ));

    return (
        <>
            <main>
                <div className='d-flex flex-row justify-content-center align-items-center pt-4'>
                    <h1 className='mt-1'>Open Brewery React</h1>
                    <i className='fa fa-beer fa-3x ml-3'></i>
                </div>
                <p className='text-center my-0'>
                    Search for breweries based off keywords.
                </p>
                <div className='search-bar-container'>
                    <div className='input-group mb-0'>
                        <input
                            type='text'
                            value={input}
                            placeholder='Search breweries...'
                            aria-label='Search'
                            className='form-control'
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            className='btn btn-warning mx-1'
                            type='button'
                            id='button-addon1'
                            data-ripple-color='dark'
                            onClick={getBreweries}
                        >
                            Search
                        </button>
                        <button
                            className='btn btn-info'
                            type='button'
                            id='button-addon2'
                            data-ripple-color='dark'
                            onClick={handleClearingResults}
                        >
                            Clear
                        </button>
                    </div>
                </div>
                <div className='results-container'>
                    {loading && (
                        <div className='spinner-border' role='status'>
                            <span className='sr-only'>Loading...</span>
                        </div>
                    )}
                    <ul className='list'>{breweries && breweriesArr}</ul>
                    {emptyResult === true && (
                        <p className='lead text-center'>NO RESULTS</p>
                    )}
                </div>
            </main>
            <footer className='my-4'>
                <p className='text-center my-0'>
                    Credit to{" "}
                    <a
                        href='https://chrisjmears.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Chris J Mears
                    </a>{" "}
                    and{" "}
                    <a
                        href='https://wanderingleafstudios.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Wandering Leaf Studios LLC
                    </a>{" "}
                    for the{" "}
                    <a
                        href='https://www.openbrewerydb.org/'
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        Open Brewery DB API
                    </a>
                    .
                </p>
                <div className='d-flex justify-content-center my-0'>
                    <p>View the code for this project on </p>
                    <a
                        href='https://github.com/ramos07'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i
                            className='fab fa-github fa-lg mx-2'
                            style={{ color: "#032535" }}
                        ></i>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default App;
