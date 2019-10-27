import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "./styles";

export default function Home() {
  const [gif, setGif] = useState(null);

  const api_key = "6STszV0RpYwd7ynrI66O5idh8nDyW3hs",
    tag = "neiva do ceu",
    rating = "PG";

  useEffect(() => {
    async function loadGif() {
      const { data } = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}&rating=${rating}`
      );

      console.log(data.data.image_original_url);
      setGif(data.data.image_original_url);
    }

    loadGif();
  }, []);

  return (
    <Container gif={gif}>
      <h1>Building...</h1>
    </Container>
  );
}
