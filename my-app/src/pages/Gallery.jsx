import React from "react";
import PageLayout from "../components/PageLayout";
import img1 from "../images/Gallery/img1.jpg";
import img2 from "../images/Gallery/img2.jpg";
import img3 from "../images/Gallery/img3.jpg";
import img4 from "../images/Gallery/img4.jpg";
import img5 from "../images/Gallery/img5.jpg";
import img6 from "../images/Gallery/img6.jpg";
import img7 from "../images/Gallery/img7.jpg";
import img8 from "../images/Gallery/img8.jpg";
import img9 from "../images/Gallery/img9.jpg";
import img10 from "../images/Gallery/img10.jpg";
import img11 from "../images/Gallery/img11.jpg";
import img12 from "../images/Gallery/img12.jpg";
import img13 from "../images/Gallery/img13.jpg";
import img14 from "../images/Gallery/img14.jpg";
import img15 from "../images/Gallery/img15.jpg";
import img16 from "../images/Gallery/img16.jpg";
import img17 from "../images/Gallery/img17.jpg";
import img18 from "../images/Gallery/img18.jpg";
import img19 from "../images/Gallery/img19.jpg";
import img20 from "../images/Gallery/img20.jpg";
import img21 from "../images/Gallery/img21.jpg";
import img22 from "../images/Gallery/img22.jpg";
import img23 from "../images/Gallery/img23.jpg";
import img24 from "../images/Gallery/img24.jpg";
import img25 from "../images/Gallery/img25.jpg";
import img26 from "../images/Gallery/img26.jpg";
import img27 from "../images/Gallery/img27.jpg";
import img28 from "../images/Gallery/img28.jpg";
import img29 from "../images/Gallery/img29.jpg";
import img30 from "../images/Gallery/img30.jpg";
import img31 from "../images/Gallery/img31.jpg";
import img32 from "../images/Gallery/img32.jpg";
import img33 from "../images/Gallery/img33.jpg";
import img34 from "../images/Gallery/img34.jpg";
import img35 from "../images/Gallery/img35.jpg";

const data = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  {id:3,
    img: img3,
  },
  {
    id:4,
    img: img4,
  },
  {
    id:5,
    img: img5,
  },
  {
    id:6,
    img: img6,
  },
  {
    id:7,
    img: img7,
  },
  {
    id:8,
    img: img8,
  },
  {
    id:9,
    img: img9,
  },
  {
    id:10,
    img: img10,
  },
  {
    id:11,
    img: img11,
  },
  {
    id:12,
    img: img12,
  },
  {
    id:13,
    img: img13,
  },
  {
    id:14,
    img: img14,
  },
  {
    id:15,
    img: img15,
  },
  {
    id:16,
    img: img16,
  },
  {
    id:17,

    img: img17,
  },
  {
    id:18,

    img: img18,
  },
  {
    id:19,
    img: img19,
  },
  {
    id:20,
    img: img20,
  },
  {
    id:21,
    img: img21,
  },
  {
    id:22,
    img: img22,
  },
  {
    id:23,
    img: img23,
  },
  {
    id:24,
    img: img24,
  },
  {
    id:25,
    img: img25,
  },
  {
    id:26,
    img: img26,
  },
  {
    id:27,
    img: img27,
  },
  {
    id:28,
    img: img28,
  },
  {
    id:29,
    img: img29,
  },
  {
    id:30,
    img: img30,
  },
  {
    id:31,
    img: img31,
  },
  {
    id:32,
    img: img32,
  },
  {
    id:33,
    img: img33,
  },
  {
    id:34,
    img: img34,
  },
  {
    id:35,
    img: img35,
  },
];

const Gallery = () => {
  const listItems = data.map((d) => (
    <div key={d.id} className="rounded-md bg-white overflow-hidden group relative transition duration-300 ease-in-out transform hover:scale-105 origin-top-right">
      <div className="w-full h-96 bg-cover rounded-md relative grayscale hover:grayscale-0 duration-1000" style={{ backgroundImage: `url(${d.img})` }}></div>
    </div>
  ));

  return (
    <PageLayout>
      <div className="mt-14">
        <div className="flex justify-center"> {/* Added flex justify-center class here */}
          <h1 className="font-extrabold text-2xl sm:text-5xl font-montserrat text-subHeadingBlue nav-link">
            OUR WORK GALLERY
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-14">
          {listItems}
        </div>
      </div>
    </PageLayout>
  );
};

export default Gallery;

