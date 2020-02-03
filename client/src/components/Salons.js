import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Salons() {
  const params = useParams();

  const [salons, setSalons] = useState([]);

  useEffect(() => {
    const getSalons = async () => {
      const res = await axios.get(`/api/user/search?text=${params.text}`);
      setSalons(res.data);
    };
    getSalons();
  }, []);

  return (
    <div>
      {salons.map(salon => (
        <div className="search-result">
          <div className="image-container">
            {salon.image ? (
              <img
                src={`data:${salon.image.mimeType};base64,${new Buffer(
                  salon.image.data
                ).toString("base64")}`}
                alt="user"
                width="100"
              />
            ) : null}
          </div>
          <div class="d-block">
            <h2>{salon.salonName}</h2>
            <p>{salon.streetName}</p>
            <p>{`${salon.cityName}, ${salon.stateName}, ${salon.zipCode}`}</p>
            <p>{salon.phoneNumber}</p>
            <button type="button" className="btn btn-secondary">
              View More Info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}