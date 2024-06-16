import { useEffect, useState } from "react";
import './Styles.css'
import ProductCard from "../components/ProductCard/ProductCard";

export default function Blockchain() {
   

  const data = [
    {
      "id": 1,
      "name": "A Guide To Learning Blockchain Technology From Scratch",
      "mentor": "By Meghana D",
      "date": "27 Mar, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2020/11/word-image-1-1.jpeg"
    },
    {
      "id": 2,
      "name": "Non-Coding Jobs in Blockchain: Exploring Opportunities Beyond Tech",
      "mentor": "By Lukesh S",
      "date": "03 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp"
    },
    {
      "id": 3,
      "name": "Best Books to Learn Blockchain",
      "mentor": "By Lukesh S",
      "date":  "03 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-Books-to-Learn-Blockchain.webp"
    },
    {
      "id": 4,
      "name": "Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional",
      "mentor": "By Meghana D",
      "date": "04 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-2048x1072.webp"
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
