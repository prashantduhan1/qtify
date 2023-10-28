import React from "react";
import "./Album.css"
import { useState } from "react";
import Card from "../Card/Card";
import { Grid } from "@mui/material";

const Album = ({ album, type }) => {

  const [showAllTopAlbums, setShowAllTopAlbums] = useState(false);

  const handleShowTopAlbums = () => {
    let state = showAllTopAlbums
    setShowAllTopAlbums(!state)
  }

  return <>
    <div className="top-albums">
      <div className="title">
        <div>{type}</div>
        <button className="showall-button" onClick={() => handleShowTopAlbums()}>{(showAllTopAlbums) ? "collapse" : "Show all"}</button>
      </div>
      <div className="card-container">
        <Grid
          container
          direction="row"
          spacing={4}
          style={{
            color: "white",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          {album.map((element) => (
            <Grid item xs={6} md={2} key={element._id}>
              <Card
                prop={element}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    

    </div>

  </>
}
export default Album;