import { useState } from "react";

interface userProps {
  setEventGroup: (arg0: string) => void;
}

const NavigationTiles = ({ setEventGroup }: userProps) => {
  const [selectedTile, setSelectedTile] = useState(""); 

  const handleTileClick = (tileName: string) => {
    setSelectedTile(tileName); 
    setEventGroup(tileName); 
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <nav className="p-3">
        <form className="d-flex flex-wrap gap-3 justify-content-center">
          <button
            className={`nav-tile ${selectedTile === "" ? "selected" : ""}` }
            type="button"
            onClick={() => handleTileClick("")}
          >
            All
          </button>
          <button
            className={`nav-tile ${selectedTile === "NCC Events" ? "selected" : ""}`}
            type="button"
            onClick={() => handleTileClick("sk5xoq3rg21dqiq2vtgluyzc")}
          >
            NCC Events
          </button>
          <button
            className={`nav-tile ${selectedTile === "Annual Day" ? "selected" : ""}`}
            type="button"
            onClick={() => handleTileClick("cmrgkoca2rpxe8hnlesey4rk")}
          >
            Annual Day
          </button>
          <button
            className={`nav-tile ${selectedTile === "Sports Day" ? "selected" : ""}`}
            type="button"
            onClick={() => handleTileClick("ivmf6b3er6mog3zo10tpnp71")}
          >
            Sports Day
          </button>
          <button
            className={`nav-tile ${selectedTile === "Science Labs" ? "selected" : ""}`}
            type="button"
            onClick={() => handleTileClick("ann5l3s8k971my1qsfim7006")}
          >
            Science Labs
          </button>
          <button
            className={`nav-tile ${selectedTile === "Alumni Association" ? "selected" : ""}`}
            type="button"
            onClick={() => handleTileClick("j9xolgn06gyhk5m3fqujuoxf")}
          >
            Alumni Association
          </button>
          <button
            className={`nav-tile ${selectedTile === "Cleanliness Drive" ? "selected" : ""}`}
            type="button"
            onClick={() => handleTileClick("thavtty2deuj360jnld5jb9q")}
          >
            Cleanliness Drive
          </button>
          <button
            className={`nav-tile ${selectedTile === "Plantation Drive" ? "selected" : ""}`}
            type="button"
            onClick={() => handleTileClick("bgnwdtn5c7ayecdy32pvobmu")}
          >
            Plantation Drive
          </button>
        </form>
      </nav>
    </div>
  );
};

export default NavigationTiles;