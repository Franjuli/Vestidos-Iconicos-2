import React from "react";
import "./IntroText.css";

export default function IntroText() {
  return (
    <section className="intro-text">
      <p>
        Bem-vindo(a) ao <strong>Once Upon a Dress</strong> —  um espaço que você entendera que para muitas garotas e garotos, é ali, naquele momento mágico, que tudo começa a fazer sentido.
      </p>
      <p>
       Como se, ao olhar para aquele vestido, pudéssemos vislumbrar, pela primeira vez, as infinitas possibilidades de quem podemos nos tornar.
      </p>
      <p className="quote">
        “Give a girl the right dress and she can conquer the world.”  
        <span> — Edith Head</span>
      </p>
    </section>
  );
}

