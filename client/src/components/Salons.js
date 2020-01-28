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
        <div>
          <h2>{salon.salonName}</h2>
        </div>
      ))}
    </div>
  );
}
