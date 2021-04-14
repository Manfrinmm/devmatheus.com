import React, { useEffect, useState } from "react";
import axios from "axios";

import photo from "../../assets/photo.jpg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import link from "../../assets/link.svg";

import projects from "../../data.json";
import {
  Container,
  AdsContainer,
  ProfileContainer,
  ProfileInfo,
  ProjectsContainer,
  ProjectItem,
} from "./styles";

export default function Home() {
  const [gif, setGif] = useState(null);

  const api_key = "6STszV0RpYwd7ynrI66O5idh8nDyW3hs",
    tag = "neiva do ceu",
    rating = "G";

  useEffect(() => {
    async function loadGif() {
      const { data } = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}&rating=${rating}`,
      );

      console.log(data.data.image_original_url);
      setGif(data.data.image_original_url);
    }

    loadGif();
  }, []);

  return (
    <Container>
      <AdsContainer gif={gif}>
        <p>Waiting for google ads...</p>
      </AdsContainer>

      <ProfileContainer>
        <img src={photo} alt="Matheus Menezes Manfrin" />

        <ProfileInfo>
          <h2>Matheus Menezes Manfrin</h2>

          <ul>
            <li>
              <a
                href="https://github.com/Manfrinmm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Matheus Menezes Manfrin" />
                <p>github.com/Manfrinmm</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/matheusmmm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Matheus Menezes Manfrin" />
                <p>linkedin.com/in/matheusmmm</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/matheus.mmn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Matheus Menezes Manfrin" />
                <p>instagram.com/matheus.mmn</p>
              </a>
            </li>
          </ul>
        </ProfileInfo>
      </ProfileContainer>
      <ProjectsContainer>
        <ul>
          {projects.map((project) => (
            <ProjectItem key={project.name}>
              <strong>{project.name}</strong>
              <p>{project.description}</p>

              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Matheus Menezes Manfrin" />
                  <span>Acessar projeto no github</span>
                </a>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={link} alt="Matheus Menezes Manfrin" />
                    <span>Acessar site do projeto</span>
                  </a>
                )}
              </div>
            </ProjectItem>
          ))}
        </ul>
      </ProjectsContainer>
    </Container>
  );
}
