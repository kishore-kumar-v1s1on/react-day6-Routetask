import { useEffect, useState } from "react";
import './Styles.css'
import ProductCard from "../components/ProductCard/ProductCard";

export default function Cloud() {
 const data = [
    {
      "id": 1,
      "name": "Effective Cloud Computing Career Roadmap 2024",
      "mentor": "By Meghana D",
      "date": "27 Mar, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Feature-image-Effective-Cloud-Computing-Career-Roadmap.webp"
    },
    {
      "id": 2,
      "name": "Top 10 Cloud Computing Project Ideas [2024]",
      "mentor": "By Lukesh S",
      "date": "03 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-7.webp"
    },
    {
      "id": 3,
      "name": "9 Astounding Websites To Learn Cloud Computing in 2024",
      "mentor": "By Lukesh S",
      "date":  "03 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Astounding-Websites-To-Learn-Cloud-Computing.png"
    },
    {
      "id": 4,
      "name": "Top 7 Cloud Computing Tools of 2024",
      "mentor": "By Meghana D",
      "date": "04 May, 2024",
      "image": "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Cloud-Computing-Tools.webp"
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