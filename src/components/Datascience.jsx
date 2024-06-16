import { useEffect, useState } from "react";
import './Styles.css'
import ProductCard from "../components/ProductCard/ProductCard";

export default function Datascience() {
  const  data = [
    {
      "id": 1,
      "name": "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      "mentor": "By Meghana D",
      "date": "27 Mar, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp"
    },
    {
      "id": 2,
      "name": "Can A Commerce Student Do Data Science?",
      "mentor": "By Lukesh S",
      "date": "03 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png"
    },
    {
      "id": 3,
      "name": "Top Product-Based Companies for Data Scientists in 2024",
      "mentor": "By Lukesh S",
      "date":  "03 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp"
    },
    {
      "id": 4,
      "name": "Roles and Responsibilities of a Data Scientist",
      "mentor": "By Meghana D",
      "date": "04 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png"
    }
  ];
  return (
    <div>
      <section>
        <div className='course-display-list'>
          {data.map((data, index) => (
            <ProductCard key={`${data.name}-${index}`} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
}
