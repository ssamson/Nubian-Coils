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
      <div className="banner-image-two"></div>

      <div className="result-name-container">
        {salon.image ? (
          <img
            className="rounded float-left"
            src={`data:${salon.image.mimeType};base64,${new Buffer(
              salon.image.data
            ).toString("base64")}`}
          />
        ) : null}

        <h1 className="display-4">{salon.salonName}</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="first-row-col col-sm-6">
            <div className="profile-container row mx-md-n5">
              <div className="col px-md-5 about-container text-center">
                <div className="px-3 border bg-light">
                  <h4>ABOUT</h4>
                  <p>{salon.salonAbout}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="first-row-col col-sm-6">
            <div className="location-container row mx-md-n5">
              <div className="col px-md-5 about-container text-center">
                <div className="p-3 border bg-light">
                  <h4>LOCATION</h4>
                  <h6>{salon.salonName}</h6>
                  <p>{salon.streetName}</p>
                  <p>{`${salon.cityName}, ${salon.stateName}, ${salon.zipCode}, ${salon.countryName}`}</p>
                  <p>Phone:{salon.phoneNumber}</p>
                  <a href={salon.salonWebsite}> {salon.salonWebsite}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mt-3">
            <div className="salon-services-container row mx-md-n5">
              <div className="col px-md-5 salon-services-container text-center">
                <div className="p-3 border bg-light">
                  <h4>SALON SERVICES</h4>
                  <ul>
                    {salon.salonServices
                      ? salon.salonServices.map(service => (
                          <li key={service}>{service}</li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-3">
            <div className="location-container row mx-md-n5">
              <div className="col px-md-5 hours-container text-center">
                <div className="p-3 border bg-light">
                  <h4>HOURS OF OPERATION</h4>
                  {salon.salonHours.split("\n").map(day => (
                    <p>{day}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
