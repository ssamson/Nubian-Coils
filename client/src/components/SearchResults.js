import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function SearchResults() {
  const params = useParams();
  const [salon, setSalon] = useState(null);

  useEffect(() => {
    const getSalon = async () => {
      const res = await Axios.get(`/api/user/${params.id}`);
      setSalon(res.data);
    };
    getSalon();
  }, []);

  if (!salon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">{salon.salonName}</h1>
      </div>
      <div className="container">
        <div className="row row-cols-2">
          <div className="col">
            <div className="profile-container row mx-md-n5">
              <img
                src="../images/two-women-lying-their-heads-on-woman-s-shoulder-2301283.jpg"
                className="rounded float-left"
                alt="two-women-lying-their-heads-on-woman"
              />
              <div className="col px-md-5 salon-name container text-center">
                <div className="p-3 border bg-light">
                  <h4>Salon Name</h4>
                  <p>Sub-heading</p>
                  <p>Title</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
}
