import React from "react";
import "./Project_card_animation.styles.scss";

const Project_card_animation = () => {
  return (
    <div className="Project_anim">
      <main class="page-content">
        <div class="card">
          <div class="content">
            <h2 class="title">Mountain View</h2>
            <p class="copy">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">To The Beach</h2>
            <p class="copy">
              Plan your next beach trip with these fabulous destinations
            </p>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Desert Destinations</h2>
            <p class="copy">It's the desert you've always dreamed of</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project_card_animation;
