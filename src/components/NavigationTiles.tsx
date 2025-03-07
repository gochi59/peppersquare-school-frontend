import React from "react";

interface userProps{
  setEventGroup:()=>{}
}

const NavigationTiles = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <nav className="p-3">
        <form className="d-flex flex-wrap gap-3 justify-content-center">
          <button className="nav-tile" type="button">
            All
          </button>
          <button className="nav-tile" type="button">
            NCC Events
          </button>
          <button className="nav-tile" type="button">
            Annual Day
          </button>
          <button className="nav-tile" type="button">
            Sports Day
          </button>
          <button className="nav-tile" type="button">
            Science Labs
          </button>
          <button className="nav-tile" type="button">
            Alumni Association
          </button>
          <button className="nav-tile" type="button">
            Cleanliness Drive
          </button>
          <button className="nav-tile" type="button">
            Plantation Drive
          </button>
        </form>
      </nav>
    </div>
  );
};

export default NavigationTiles;
