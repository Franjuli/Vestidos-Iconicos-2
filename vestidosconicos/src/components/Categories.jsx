import React from "react";
import CategoryCard from "./CategoryCard";
import "./Categories.css";

export default function Categories() {
  return (
    <section className="categories">
      <h2>Explore Categorias</h2>
      <div className="category-grid">
        <CategoryCard icon="" title="Realeza" />
        <CategoryCard icon="" title="Do Cinema" />
        <CategoryCard icon="" title="De Época" />
        <CategoryCard icon="" title="Live-action" />
      </div>
    </section>
  );
}

