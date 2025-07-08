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
  },
  {
    name: "Hyperlife",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://monkeybuzz.com.br/wp-content/uploads/2019/12/beck-hyperspace-album-artwork.jpg",
      name: "Hyperlife",
      album: "Hyperspace",
      animation_url: "/music/Hyperlife.mp3",
    })
  },
  {
    name: "DA ONES",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://d1fdloi71mui9q.cloudfront.net/QCgjMRouQHeLFuDfhG22_IMG_1278.JPG",
      name: "DA ONES",
      album: "Treezus 2",
      animation_url: "/music/DA ONES.mp3",
    })
  },
  {
    name: "Strange Clouds",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://upload.wikimedia.org/wikipedia/en/6/69/B.o.B_-_Strange_Clouds_-_LP_Cover.jpg",
      name: "Strange Clouds",
      album: "Strange Clouds",
      animation_url: "/music/strange clouds.mp3",
    })
  },
  {
    name: "Starboy",
    url: "https://drive.google.com/drive/u/0/folders/1qybHvweboeoxJFqTbt8pilXB6adI1RWN",
    metadata: JSON.stringify({
      image: "https://i.pinimg.com/originals/49/a0/7a/49a07a20041787942f62dbe900573ecb.jpg",
      name: "Starboy",
      album: "Starboy",
      animation_url: "/music/Starboy.mp3",
    })
  },
  {
    name: "Next To Me",
    url: "",
    metadata: JSON.stringify({
      image: "https://external-preview.redd.it/v_5XzwOWnjqrz5gBDfENNoMV9Kl8OAAy3015hcTsVYs.jpg?auto=webp&s=5485881fc8e107c14bca6d16c61fa085a78b70b6",
      name: "Next To Me",
      album: "Evolve",
      animation_url: "/music/Next To Me.mp3",
    })
  },
  {
    name: "Hard as a Rock",
    url: "",
    metadata: JSON.stringify({
      image: "https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AN5W2E/b0cb0df8c30d479da36443c10bc85b96.jpg/f/ac-dc-ballbreaker-framed-album-cover-30x30cm.jpg",
      name: "Hard as a Rock",
      album: "Ball Breaker",
      animation_url: "/music/Hard as a Rock.mp3",
    })
  },
  {
    name: "Rampage",
    url: "",
    metadata: JSON.stringify({
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a5/16/62/a5166262-81f6-724e-8393-cdca234c81a1/artwork.jpg/316x316bb.webp",
      name: "Rampage",
      album: "Back From The Dead",
      animation_url: "/music/Rampage.mp3",
    })
  },
  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "Flavors",
      animation_url: "",
    })
  },
  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "Shakira",
      animation_url: "",
    })
  },

  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "Adele 21",
      animation_url: "",
    })
  },
  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "Strange Clouds",
      animation_url: "",
    })
  },
  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "Shadow",
      animation_url: "",
    })
  },
  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "Arctic Monkeys",
      animation_url: "",
    })
  },
  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "My Everything",
      animation_url: "",
    })
  },
  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "Have A Nice Day",
      animation_url: "",
    })
  },
  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "Happier",
      animation_url: "",
    })
  },
  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "Stoney",
      animation_url: "",
    })
  },
  {
    name: "",
    url: "",
    metadata: JSON.stringify({
      image: "",
      name: "",
      album: "The Eminem Show",
      animation_url: "",
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