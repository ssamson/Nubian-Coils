import React from "react";
import WWB from "../images/woman-wearing-wearing-brown-earrings-3452557.jpg";
import WIW from "../images/woman-in-white-tube-top-3154827.jpg";
import SFP from "../images/selective-focus-photo-of-woman-with-braided-hair-1374296.jpg";
import WWY from "../images/woman-wearing-yellow-cardigan-3252316.jpg";
export default function Home() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <div className="card">
            <img src={WWB} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src={WIW} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src={SFP} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src={WWY} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
