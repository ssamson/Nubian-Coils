import React, { useState } from "react";
import WWB from "../images/woman-wearing-wearing-brown-earrings-3452557.jpg";
import WIW from "../images/woman-in-white-tube-top-3154827.jpg";
import SFP from "../images/selective-focus-photo-of-woman-with-braided-hair-1374296.jpg";
import WWY from "../images/woman-wearing-yellow-cardigan-3252316.jpg";
import axios from "axios";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    const res = await axios.get(`/api/user/search?text=${searchText}`);
  };

  return (
    <div>
      <div className="jumbotron">
        <input
          type="text"
          name="search"
          placeholder="Service, Stylist or Salon"
          onChange={e => setSearchText(e.target.value)}
          className={`${searchText ? "extend" : null}`}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          name="search"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="home">
        <div style={{ backgroundImage: `url(${WWB})` }}>
          <button className="btn btn-primary btn-lg">dasd</button>
        </div>

        <div style={{ backgroundImage: `url(${WIW})` }}></div>

        <div style={{ backgroundImage: `url(${SFP})` }}></div>

        <div style={{ backgroundImage: `url(${WWY})` }}></div>
      </div>
    </div>
  );
}
