import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import styles from "./UserInfo.module.css";
import proimg from "../../assests/img/profile.png";
const UserInfo = ({ userInfo }) => {
  return (
    <div className="row mb-4">
      <div className={`col-md-3 py-3  card ${styles.textCenter}`}>
        <img
          src={proimg}
          alt="User Profile"
          className={`img-fluid rounded-circle mb-3 mx-auto ${styles.profileImage}`}
        />
        <h4>{`${userInfo.username}`}</h4>
        <h4>{`${userInfo.first_name} ${userInfo.last_name}`}</h4>

        <button
          className="btn mt-2"
          style={{ backgroundColor: "#6050DC", color: "white" }}
        >
          Edit Profile
        </button>
      </div>
      <div className="col-md-9">
        <div className="card">
          <div
            className="card-header"
            style={{ backgroundColor: "#6050DC", color: "white" }}
          >
            <h5>Account Overview</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Full Name:</strong> {`${userInfo.username}`}
                  {`${userInfo?.first_name} ${userInfo?.last_name}`}
                </p>
                <p>
                  <strong>Email:</strong> {userInfo?.email}
                </p>
                <p>
                  <strong>Phone:</strong> {userInfo?.phone}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>City:</strong> {userInfo.city}
                </p>
                <p>
                  <strong>Country:</strong> {userInfo.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
