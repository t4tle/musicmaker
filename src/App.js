import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import "./App.css";
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import Hitmakr from "./images/Hitmakr.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";

const { Content, Sider, Footer } = Layout;

const App = () => {
  const [nftAlbum, setNftAlbum] = useState(); // this is the state that will hold the album data
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={300} className="sideBar">
            <img src={Hitmakr} alt="Logo" className="logo"></img>
            <div className="searchBar">
              <span> Search </span>
              <SearchOutlined style={{ fontSize: "30px" }} />
            </div>
            <Link to="/">
              <p style={{ color: "#5ba5b9" }}> Home </p>
            </Link>
            <Link to="/">
              <p style={{ color: "#5ba5b9" }}> SFX </p>
            </Link>
            <Link to="/">
              <p style={{ color: "#5ba5b9" }}> Hitmakr Picks </p>
            </Link>
            <Link to="/">
              <p style={{ color: "#5ba5b9" }}> Your Audio </p>
            </Link>

            <div className="recentPlayed">
              <p className="recentTitle">RECENTLY PLAYED</p>
              <div className="install">
                <span> Install App </span>
                <DownCircleOutlined style={{ fontSize: "30px" }} />
              </div>
            </div>
          </Sider>
          <Content className="contentWindow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/album"
                element={<Album setNftAlbum={setNftAlbum} />}
              />
            </Routes>
          </Content>
        </Layout>
        <Footer className="footer">
          {nftAlbum && <Player url={nftAlbum} />}

          <p>© 2023 Hitmakr </p>
        </Footer>
      </Layout>
    </>
  );
};
//
//

export default App;
