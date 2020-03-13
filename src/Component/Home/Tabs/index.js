import React, { useState } from "react";
import "./style.scss";

let searchCategories = ["Mood", "Genre", "Year", "Director", "Actor", "Stream"];

const Tabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <section class="content">
      <div class="scrolling-wrapper-flexbox">
        {searchCategories.map(el => {
          return (
            <span
              className={`card ${el === selectedTab ? `active` : ``}`}
              key={el}
              onClick={() => setSelectedTab(el)}
            >
              {el}
            </span>
          );
        })}
      </div>

      {/* <p>On iOS, you want to add <code>-webkit-overflow-scrolling: touch;</code> to your scroll container. By default, Safari will not smoothly scroll these elements.</p> */}
      {/* <p>I wrote a <a href="https://codepen.io/colinlord/post/horizontal-scrolling-containers" >blog post</a> on this topic if you want to learn more.</p> */}
    </section>
  );
};

export default Tabs;
