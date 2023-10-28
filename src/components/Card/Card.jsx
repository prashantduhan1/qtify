import React from "react";
import "./Card.css"
import { CardContent, Typography, CardMedia, Card as MuiCard,Button } from "@mui/material";

const Card = ({ prop }) => {
    console.log("card",prop)

    return (

            <div className="card">
                <div className="img-and-follows">
                    <div>
                        <img
                            className="card-img"
                            src={prop.image}
                            alt="album"
                        />
                    </div>
                    <div className="follow-button-section">
                    <button className="follows-button">{prop.follows} follows</button>
                    </div>
                </div>
                <div className="album-title">{prop.title}</div>
            </div>
      
    )
}

export default Card;