import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult.js";
import { Button } from "@material-ui/core";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays - 26 august to 30 august - 2 guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Bed</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        location="Private Room in the center of london"
        title="Spacious Luxury"
        description=" 1 guest - 2 bedroom - 1.5 bathrrom - WiFi - Kitchen - Drawing Room "
        star={4.4}
        price="$120/per night"
        total="$1100 total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        location="Private Room in the center of london"
        title="Spacious Luxury"
        description=" 1 guest - 2 bedroom - 1.5 bathrrom - WiFi - Kitchen - Drawing Room "
        star={4.56}
        price="$120/per night"
        total="$1100 total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        location="Private Room in the center of london"
        title="Spacious Luxury"
        description=" 1 guest - 2 bedroom - 1.5 bathrrom - WiFi - Kitchen - Drawing Room "
        star={4.56}
        price="$120/per night"
        total="$1100 total"
      />{" "}
      <SearchResult
        img="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        location="Private Room in the center of london"
        title="Spacious Luxury"
        description=" 1 guest - 2 bedroom - 1.5 bathrrom - WiFi - Kitchen - Drawing Room "
        star={4.56}
        price="$120/per night"
        total="$1100 total"
      />
    </div>
  );
}

export default SearchPage;
