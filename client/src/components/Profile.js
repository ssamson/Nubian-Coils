import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const history = useHistory();
  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
    salonName: "",
    locationName: "",
    joinDate: "",
    accountType: "",
    favoriteHairStyle: "",
    stateName: "",
    streetName: "",
    cityName: "",
    zipCode: "",
    phoneNumber: "",
    salonWebsite: "",
    salonServices: "",
    salonAbout: "",
    hairSalonPics: ""
  });

  const params = useParams();

  const getUser = async () => {
    const res = await axios.get(`/api/user/${params.id}`);
    const user = res.data;
    setProfile(user);
  };

  useEffect(() => {
    getUser();
    //eslint-diable-next-line
  }, []);

  const {
    displayName,
    email,
    salonName,
    locationName,
    joinDate,
    accountType,
    favoriteHairStyle,
    stateName,
    streetName,
    cityName,
    zipCode,
    phoneNumber,
    salonWebsite,
    salonServices,
    salonAbout,
    hairSalonPics
  } = profile;

  const handleChange = e => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put("/api/user", profile);
    alert("Your info is updated");
  };

  const logout = () => {
    delete axios.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div className="profile container">
      <div className="text-center">
        <img
          src="https://static.thenounproject.com/png/15724-200.png"
          alt="user"
        />
      </div>
      <form onSubmit={handleSubmit}>
        {accountType === "customer" ? (
          <div className="form-group">
            <label htmlFor="displayName">DISPLAY NAME</label>
            <input
              type="text"
              className="form-control"
              id="displayName"
              placeholder="Enter display name here..."
              value={displayName}
              name="displayName"
              onChange={handleChange}
            />
          </div>
        ) : null}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email address here here..."
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        {accountType === "salon" ? (
          <div className="form-group">
            <label htmlFor="salonName">SALON NAME</label>
            <input
              type="text"
              className="form-control"
              id="salonName"
              placeholder="Enter salon name here..."
              value={salonName}
              name="salonName"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {accountType === "customer" ? (
          <div className="form-group">
            <label htmlFor="locationName">LOCATION</label>
            <input
              type="text"
              className="form-control"
              id="locationName"
              placeholder="Enter your location here..."
              value={locationName}
              name="locationName"
              onChange={handleChange}
            />
          </div>
        ) : null}
        <div className="form-group">
          <span>JOIN DATE</span>
          <br />
          <span>{joinDate.split("T")[0]}</span>
        </div>
        {accountType === "customer" ? (
          <div className="form-group">
            <label htmlFor="favoriteHairStyle">FAVORITE HAIRSTYLE</label>
            <input
              type="text"
              className="form-control"
              id="favoriteHairStyle"
              placeholder="Enter your favorite hairstyle here..."
              value={favoriteHairStyle}
              name="favoriteHairStyle"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {accountType === "salon" ? (
          <div className="form-group">
            <label htmlFor="streetName">STREET</label>
            <input
              type="text"
              className="form-control"
              id="streetName"
              placeholder="Enter the name of your street..."
              value={streetName}
              name="streetName"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {accountType === "salon" ? (
          <div className="form-group">
            <label htmlFor="cityName">CITY</label>
            <input
              type="text"
              className="form-control"
              id="cityName"
              placeholder="Enter the name of your city..."
              value={cityName}
              name="cityName"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {accountType === "salon" ? (
          <div className="form-group">
            <label htmlFor="stateName">STATE</label>
            <input
              type="text"
              className="form-control"
              id="stateName"
              placeholder="Enter the name of your state..."
              value={stateName}
              name="stateName"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {accountType === "salon" ? (
          <div className="form-group">
            <label htmlFor="zipCode">ZIP CODE</label>
            <input
              type="number"
              className="form-control"
              id="zipCode"
              placeholder="Enter your zip code here..."
              value={zipCode}
              name="zipCode"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {accountType === "salon" ? (
          <div className="form-group">
            <label htmlFor="phoneNumber">PHONE</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter your phone number here..."
              value={phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {accountType === "salon" ? (
          <div className="form-group">
            <label htmlFor="salonWebsite">WEBSITE</label>
            <input
              type="url"
              className="form-control"
              id="salonWebsite"
              placeholder="Enter your website url..."
              value={salonWebsite}
              name="salonWebsite"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {accountType === "salon" ? (
          <div className="form-group">
            <label htmlFor="salonServices">SERVICES</label>
            <input
              type="text"
              className="form-control"
              id="salonServices"
              placeholder="Enter your services here..."
              value={salonServices}
              name="salonServices"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {accountType === "salon" ? (
          <div className="form-group">
            <label htmlFor="salonAbout">ABOUT THE SALON</label>
            <input
              type="text"
              className="form-control"
              id="salonAbout"
              placeholder="Enter description about salon..."
              value={salonAbout}
              name="salonAbout"
              onChange={handleChange}
            />
          </div>
        ) : null}
        {accountType === "salon" ? (
          <div className="form-group">
            <label htmlFor="hairSalonPics">HAIR/SALON PICTURES</label>
            <input
              type="image"
              className="form-control"
              id="hairSalonPics"
              placeholder="Enter hair/salon pictures..."
              value={hairSalonPics}
              name="hairSalonPics"
              onChange={handleChange}
            />
          </div>
        ) : null}
        <button type="submit" className="btn btn-dark">
          Save
        </button>
        <button type="button" className="btn btn-danger">
          Cancel
        </button>
        {/* <button type="button" className="btn btn-secondary" onClick={logout}>
          Logout
        </button> */}
      </form>
    </div>
  );
}
