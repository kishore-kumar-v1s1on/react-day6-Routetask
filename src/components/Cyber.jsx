import { useEffect, useState } from "react";
import './Styles.css'
import ProductCard from "../components/ProductCard/ProductCard";

export default function Cyber() {
  const data =  [
    {
      "id": 1,
      "name": "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      "mentor": "By Meghana D",
      "date": "27 Mar, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png"
    },
    {
      "id": 2,
      "name": "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      "mentor": "By Lukesh S",
      "date": "03 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp"
    },
    {
      "id": 3,
      "name": "8 Different Types of Cybersecurity and Threats Involved",
      "mentor": "By Lukesh S",
      "date":  "03 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png"
    },
    {
      "id": 4,
      "name": "What is Cybersecurity? Importance and its uses & the growing challenge...",
      "mentor": "By Meghana D",
      "date": "04 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif"
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
