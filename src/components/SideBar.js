import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            アップロード画面
            <ul>
              <li>
                <Link to="/">Upload</Link>
              </li>
            </ul>
          </li>
          <li>
            表画面
            <ul>
              <li>
                <Link to="/main">View</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
