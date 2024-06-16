import { useEffect, useState } from "react";
import './Styles.css'
import ProductCard from "../components/ProductCard/ProductCard";

export default function Aiml() {
  const  data =  [
    {
      "id": 1,
      "name": "10 Best DevOps Project Ideas for 2024",
      "mentor": "By Meghana D",
      "date": "27 Mar, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/07/DevOps-Project-Ideas-2048x1072.webp"
    },
    {
      "id": 2,
      "name": "How Long Will It Take to Learn DevOps?",
      "mentor": "By Lukesh S",
      "date": "03 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/08/Featured-image-Best-Way-to-Learn-DevOps-2048x1072.webp"
    },
    {
      "id": 3,
      "name": "Top 16 Product-Based Companies for DevOps Engineers in India",
      "mentor": "By Lukesh S",
      "date":  "03 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-Product-Based-Companies-for-DevOps-Engineers-in-India.webp"
    },
    {
      "id": 4,
      "name": "As a Software Engineer, How Do I Shift My Career to DevOps?",
      "mentor": "By Meghana D",
      "date": "04 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/05/2202.i402.018.S.m004.c13.Devops-engineer-flat-composition-2048x1575.jpg"
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