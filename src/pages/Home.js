import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms";

function Home() {
  return (
    <div>
      <Hero>
        <Banner title="Luxurious rooms" subtitle="Delux rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </div>
  );
}

export default Home;
