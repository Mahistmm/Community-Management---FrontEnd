import React from "react";
import "./Analytics.css";
import { Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LineCharts from "../../components/lineChart/LineCharts";

const Analytics = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Analytics</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <LineCharts />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://www.shutterstock.com/image-vector/human-resource-logo-can-be-600nw-1612286182.jpg"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Community Info</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Students:</span>
              <span className="productInfoValue">400</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Government Employees:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Private Employees:</span>
              <span className="productInfoValue">234</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Others:</span>
              <span className="productInfoValue">233</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>College Completed</label>
            <input type="text" placeholder="Enter College Name" />
            <label>Degree</label>
            <select name="inStock" id="idStock">
              <option value="yes">Bachelor</option>
              <option value="no">Master</option>
              <option value="ph.d">Ph.D</option>
            </select>
            <label>Looking for job</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://www.shutterstock.com/image-vector/human-resource-logo-can-be-600nw-1612286182.jpg"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Analytics;
