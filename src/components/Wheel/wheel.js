import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import styles from "../Maintenance/Maintenance.module.css";

export default function Wheel() {
  return (
    <div>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/wheelnav@1.7.1/js/dist/raphael.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/wheelnav@1.7.1/js/dist/wheelnav.min.js"></script>
        <script src={withPrefix("wheel.js")} type="text/javascript" />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.section_1}>
          <h1>Great Apps Built Fast</h1>
          <p>
            To build an app that fits the market, we build and test often. To
            build fast with minimum investment we found that it’s best to repeat
            this loop fast and often:
          </p>
        </div>
        <div className={styles.section_2}>
          <div
            id="wheelDiv"
            style={{
              height: "300px",
              width: "300px",
              
            }}
          ></div>
        </div>
        <div className={styles.section_3}>
          <div className={styles.text}>
            <div id="nav0" >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
