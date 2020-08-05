import React from "react";
import "./Footer.css";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PLayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import Player from "./Player";

function Footer(){
    return (
        <div className="footer">
            <div className="footer__left">
                <img 
                    className="footer__albumLogo"
                    src="https://i.pinimg.com/originals/7a/58/54/7a585473a136dd875d95378cb583015b.jpg" alt=""/>
              <div className="footer__songInfo">
                  <h4>Yupp!!</h4>
                  <p>User</p>
              </div>  
            </div>
          
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PLayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}

export default Footer;