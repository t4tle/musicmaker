import React from "react";
import { useAlbum } from "../hooks/useAlbum";
import { useLocation } from "react-router";
import "./Album.css";
import Opensea from "../images/opensea.png";
import { ClockCircleOutlined } from "@ant-design/icons";

// Remove all web3/contract-related code and just use local album data

const Album = ({ setNftAlbum }) => {
  // Use album details from navigation state (for cover/title/artist)
  const { state: albumDetails } = useLocation();
  // Use local album data from the custom hook
  const { album } = useAlbum();

  // Filter songs for this album
  const albumSongs = album.filter((nft) => {
    const meta = JSON.parse(nft.metadata);
    return meta.album === albumDetails?.title;
  });

  return (
    <>
      <div className="albumContent">
        <div className="topBan">
          <img
            src={albumDetails?.image}
            alt="albumcover"
            className="albumCover"
          />
          <div className="albumDeets">
            <div>ALBUM</div>
            <div className="title">{albumDetails?.title || "Album Title"}</div>
            <div className="artist">
              {album && album[0] && JSON.parse(album[0].metadata).artist}
            </div>
            <div>
              {album && album[0] && JSON.parse(album[0].metadata).year} •{" "}
              {album && album.length} Songs
            </div>
          </div>
        </div>
        <div className="topBan">
          <div className="playButton" onClick={() => setNftAlbum(albumSongs)}>
            PLAY
          </div>
          {/* Remove OpenSea button if not needed, or keep as a placeholder */}
          <div
            className="openButton"
            onClick={() =>
              window.open("https://opensea.io/", "_blank")
            }
          >
            OpenSea
            <img src={Opensea} className="openLogo" alt="OpenSea" />
          </div>
        </div>
        <div className="tableHeader">
          <div className="numberHeader">#</div>
          <div className="titleHeader">TITLE</div>
          <div className="numberHeader">
            <ClockCircleOutlined />
          </div>
        </div>
        {albumSongs.map((nft, i) => {
          const meta = JSON.parse(nft.metadata);
          return (
            <div className="tableContent" key={i}>
              <div className="numberHeader">{i + 1}</div>
              <div
                className="titleHeader"
                style={{ color: "rgb(205, 203, 203)" }}
              >
                {meta.name}
              </div>
              <div className="numberHeader">{meta.duration || "--:--"}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Album;
