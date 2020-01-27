import React from "react";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="subscribe-container">
        <p>SIGN UP FOR OUR NEWSLETTER</p>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email..."
          id="email"
        />
        <button type="submit" className="btn btn-dark mt-2">
          Subscribe
        </button>
      </div>

      {/* <div className="col-lg-6 mx-auto">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email for our newsletter"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  Sign up
                </button>
              </div>
            </div>
          </div> */}
      <div className="footer-copyright text-center py-3">
        ©2020 copyright: Nubian Coils
      </div>
      <div>
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-facebook" />
      </div>
    </footer>
  );
}
