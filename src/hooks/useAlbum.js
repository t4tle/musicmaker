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
      album: "Non Fungible",
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
      album: "Non Fungible",
      animation_url: "/music/Marvelous Battle.mp3"
    })
  },
  {
    name: "Song Three",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://www.example.com/song2.jpg",
      name: "Song meta name three",
      album: "Non Fungible",
      animation_url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    })
  },
  {
    name: "What Up Gangsta",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://m.media-amazon.com/images/I/61AYpcmBtpL._SY450_.jpg",
      name: "What Up Gangsta",
      album: "Get Rich Or Die Tryin'",
      animation_url: "/music/What Up Gangsta.mp3",
    })
  },
  {
    name: "Patiently Waiting",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://m.media-amazon.com/images/I/61AYpcmBtpL._SY450_.jpg",
      name: "Patiently Waiting",
      album: "Get Rich Or Die Tryin'",
      animation_url: "music/Patiently Waiting.mp3",
    })
  },
  {
    name: "Many Men (Wish Death)",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://m.media-amazon.com/images/I/61AYpcmBtpL._SY450_.jpg",
      name: "Many Men (Wish Death)",
      album: "Get Rich Or Die Tryin'",
      animation_url: "/music/Many men.mp3",
    })
  },
  {
    name: 	"In da Club",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://www.example.com/song2.https://m.media-amazon.com/images/I/61AYpcmBtpL._SY450_.jpg",
      name:	"In da Club",
      album: "Get Rich Or Die Tryin'",
      animation_url: "/music/In da Club.mp3",
    })
  },
  {
    name: "High All the Time",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://www.https://m.media-amazon.com/images/I/61AYpcmBtpL._SY450_.jpg.com/song2.jpg",
      name: "High All the Time",
      album: "Get Rich Or Die Tryin'",
      animation_url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    })
  },
  {
    name: "Heat",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://www.https://m.media-amazon.com/images/I/61AYpcmBtpL._SY450_.jpg.com/song2.jpg",
      name: "Heat",
      album: "Get Rich Or Die Tryin'",
      animation_url: "/music/Heat.mp3",
    })
  },
  {
    name: "If I Can't",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://www.https://m.media-amazon.com/images/I/61AYpcmBtpL._SY450_.jpg.com/song2.jpg",
      name: "If I Can't",
      album: "Get Rich Or Die Tryin'",
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