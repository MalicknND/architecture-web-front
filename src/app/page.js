"use client";
import { useState, useEffect } from "react";
import Header from "../components/partials/Header";

export default function Home() {
  const [data, setArticles] = useState([]);

  useEffect(() => {
    // Récupérer les articles depuis l'API
    fetch("http://localhost:8080/api/v1/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data); // Mettre à jour l'état avec les articles reçus
      });
  }, []); // un tableau vide en tant que dépendance pour que useEffect s'exécute une seule fois

  return (
    <div>
      <Header />
      <div className="container">
        <div className="title__page">
          <h2>homepage</h2>
        </div>
        <div className="grid">
          {data.map((article, i) => (
            <div className="item" key={i}>
              <h2>{article.titre}</h2>
              <p>{article.description}</p>
              <p>Date : {article.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
