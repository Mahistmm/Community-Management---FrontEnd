import React from "react";
import "./FeaturedInfo.css";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Students</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">450</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last year</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Working Professionals</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">123</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last year</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Government Job</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">140</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last year</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
