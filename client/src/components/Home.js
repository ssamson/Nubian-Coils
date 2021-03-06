import React, { useState } from "react";
import SFP from "../images/home/selective-focus-photo-of-woman-with-braided-hair-1374296.jpg";
import WBL from "../images/home/woman-with-black-long-hair-smiling-2269890.jpg";
import WWH from "../images/home/portrait-of-woman-wearing-headband-3065016.jpg";
import WWW from "../images/home/woman-wearing-white-top-1181691.jpg";
import { useHistory, Link } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    history.push(`/search/${searchText}`);
  };

  return (
    <div className="home-container">
      <div className="jumbotron">
        <input
          type="text"
          name="search"
          placeholder="Service or Salon"
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
        <div style={{ backgroundImage: `url(${SFP})` }}>
          <Link
            to="/search/braids"
            className="btn btn-primary btn-lg"
            role="button"
          >
            BRAIDS
          </Link>
        </div>

        <div style={{ backgroundImage: `url(${WBL})` }}>
          <Link
            to="/search/weaves"
            className="btn btn-primary btn-lg"
            role="button"
          >
            WEAVES
          </Link>
        </div>

        <div style={{ backgroundImage: `url(${WWH})` }}>
          <Link
            to="/search/natural hair"
            className="btn btn-primary btn-lg"
            role="button"
          >
            NATURAL HAIR
          </Link>
        </div>

        <div style={{ backgroundImage: `url(${WWW})` }}>
          <Link
            to="search/locs"
            className="btn btn-primary btn-lg"
            role="button"
          >
            LOCS
          </Link>
        </div>
      </div>
    </div>
  );
}
