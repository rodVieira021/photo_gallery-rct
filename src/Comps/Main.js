import "../App.css";
import React from "react";
import { useContext } from "react";
import { Context } from "../App.js";

const Main = () => {
  const newPhoto = useContext(Context);

  return (
    <div className="main-container">
      {newPhoto.map((photo) => {
        return (
          <div className="imgs-container">
            <img
              className="user-photo"
              src={photo.user.profile_image.small}
              alt="prof"
            />
            <img className="imgs" src={photo.urls.regular} alt="pictures" />
            <div className="container-arrow flex">
              <p className="img-description">Likes: ({photo.likes})</p>
              <a
                href={photo.links.download}
                download="image"
                src={photo.links.download}
              >
                ↓
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
