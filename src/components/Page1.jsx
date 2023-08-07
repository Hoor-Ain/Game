import React from "react";
import Navbar from "../layout/Navbar";



const games = [
  {
    id: 1,
    img: "/csgo.png",
    img2: "/frame.png",
  },
  {
    id: 2,
    img: "/csgo.png",
    img2: "/frame.png",
  },
];

const events = [
  {
    id: 1,
    pic: "/CSGO2.png",
    heading: "CS:GO 5v5",
    read: "Read More",
    prgh: "Lorem ipsum dolor sit amet, consectetur adi elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est ",
  },
  {
    id: 2,
    pic: "/CSGO2.png",
    heading: "CS:GO 5v5",
    read: "Read More",
    prgh: "Lorem ipsum dolor sit amet, consectetur adi elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est ",
  },
  {
    id: 3,
    pic: "/CSGO2.png",
    heading: "CS:GO 5v5",
    read: "Read More",
    prgh: "Lorem ipsum dolor sit amet, consectetur adi elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est ",
  },
  {
    id: 1,
    pic: "/CSGO2.png",
    heading: "CS:GO 5v5",
    read: "Read More",
    prgh: "Lorem ipsum dolor sit amet, consectetur adi elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est ",
  },
  {
    id: 2,
    pic: "/CSGO2.png",
    heading: "CS:GO 5v5",
    read: "Read More",
    prgh: "Lorem ipsum dolor sit amet, consectetur adi elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est ",
  },
  {
    id: 3,
    pic: "/CSGO2.png",
    heading: "CS:GO 5v5",
    read: "Read More",
    prgh: "Lorem ipsum dolor sit amet, consectetur adi elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est ",
  },
  {
    id: 1,
    pic: "/CSGO2.png",
    heading: "CS:GO 5v5",
    read: "Read More",
    prgh: "Lorem ipsum dolor sit amet, consectetur adi elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est ",
  },
  {
    id: 2,
    pic: "/CSGO2.png",
    heading: "CS:GO 5v5",
    read: "Read More",
    prgh: "Lorem ipsum dolor sit amet, consectetur adi elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est ",
  },
  {
    id: 3,
    pic: "/CSGO2.png",
    heading: "CS:GO 5v5",
    read: "Read More",
    prgh: "Lorem ipsum dolor sit amet, consectetur adi elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est ",
  },
];

const trending = [
  {
    id: 1,
    videos: "/trade.png",
    heading: "Video Title",
    prgh: "Author: tem",
  },
  {
    id: 2,
    videos: "/trade.png",
    heading: "Video Title",
    prgh: "Author: tem",
  },
  {
    id: 3,
    videos: "/trade.png",
    heading: "Video Title",
    prgh: "Author: tem",
  },
];

const post = [
  {
    img: "/image-14.png",
    heading: "User: tem",
    prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est rhoncus odio, eget volutpat sem nibh a dolor.",
  },
  {
    img: "/image-14.png",
    heading: "User: tem",
    prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est rhoncus odio, eget volutpat sem nibh a dolor.",
  },
  {
    img: "/image-14.png",
    heading: "User: tem",
    prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est rhoncus odio, eget volutpat sem nibh a dolor.",
  },
  {
    img: "/image-14.png",
    heading: "User: tem",
    prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ornare neque. Pellentesque varius, elit ac aliquam congue, lectus est rhoncus odio, eget volutpat sem nibh a dolor.",
  },
];
const news = [
  {
    img: "/Frame-38.png",
    heading: "Source 2 Leaks!",
    prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ac aliquam elit. Curabitur eu ornare neque. Pellentesque varius, congue elit ac aliquam congue, lectus est rhoncus odio, eget ornare neque volutpat sem nibh a dolor.",
    read: "Read More",
  },
  {
    img: "/Frame-38.png",
    heading: "Source 2 Leaks!",
    prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ac aliquam elit. Curabitur eu ornare neque. Pellentesque varius, congue elit ac aliquam congue, lectus est rhoncus odio, eget ornare neque volutpat sem nibh a dolor.",
    read: "Read More",
  },
  {
    img: "/Frame-38.png",
    heading: "Source 2 Leaks!",
    prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ac aliquam elit. Curabitur eu ornare neque. Pellentesque varius, congue elit ac aliquam congue, lectus est rhoncus odio, eget ornare neque volutpat sem nibh a dolor.",
    read: "Read More",
  },
  {
    img: "/Frame-38.png",
    heading: "Source 2 Leaks!",
    prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ac aliquam elit. Curabitur eu ornare neque. Pellentesque varius, congue elit ac aliquam congue, lectus est rhoncus odio, eget ornare neque volutpat sem nibh a dolor.",
    read: "Read More",
  },
];

export default function Page1() {
  return (
    <div>
      <div class="bg-[#19171F] min-h-screen wrapper pt-[12px] md:px-6 sm:px-5 pr-3 ">
        <Navbar />
        {/* ------------------------------------------------------------------------ */}
        <div className="flex text-white gap-6">
          <div className="border max-w-[290px] w-full"> div 1</div>
          <div className="border max-w-[726px] w-full
          grid grid-cols-3
          ">
            {events.map((item, idx) => (<div key={idx} className="border w-full">
              <img src={item.pic} />
              <p className="font-bold">
                {item.heading}
              </p>
              <p className="text-gray-400">{item.prgh}</p>
            </div>))}

          </div>
          <div className="border max-w-[580px] w-full"> div 1</div>
        </div>
      </div>
    </div>
  );
}
