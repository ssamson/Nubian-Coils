import React from "react";

export default function Footer() {
  return (
    <div className="fixed-bottom">
      <footer className="footer">
        <div className="display-flex">
          <div>
            <p>SIGN UP FOR OUR NEWSLETTER</p>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email..."
              id="email"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Subscribe
          </button>
        </div>
        <div className="footer-copyright text-center py-3">
          ©2020 copyright: Nubian Coils
        </div>
        <div>
          <a href="#" className="fa fa-instagram" />
          <a href="#" className="fa fa-twitter" />
          <a href="#" className="fa fa-facebook" />
        </div>
      </footer>
    </div>
  );
}
