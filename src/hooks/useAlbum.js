import { useEffect, useState } from "react";
import useAudio from "./useAudio";
import lib from "../helpers/albumList";
const localSongs = [
  {
    name: "my war",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.idntimes.com%2Fcontent-images%2Fcommunity%2F2023%2F11%2Fmagen-43da29a867d49c1f351ac6b665d26419-45197694406ca8d0fb63c2465701122f.jpg&f=1&nofb=1&ipt=afa034da8411051b559e62c33365e6c6607696eb983c36366746a80bf9d2720e",
      name: "Boku no sensou",
      artist:"them boys",
      animation_url: "/music/mywar.mp3",
      year: 2020,
      genre: "Rock",
      description: "This is the first song in the album.",
      duration: "3:45"
    })
  },
  {
    name: "Song Two",
    url: "../music/mywar.mp3",
    metadata: JSON.stringify({
      image: "https://www.example.com/song2.jpg",
      name: "Song Two",
      animation_url: "/music/Marvelous Battle.mp3"
    })
  },
  {
    name: "Song Three",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://www.example.com/song2.jpg",
      name: "Song meta name three",
      animation_url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    })
  }
  // Add more songs as needed
];

export const useAlbum = () => {
  const [album, setAlbum] = useState(localSongs);

  // Optionally, you can add a fetchAlbum function for compatibility
  const fetchAlbum = async () => localSongs;

  return { fetchAlbum, album };
};