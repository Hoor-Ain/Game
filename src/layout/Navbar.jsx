import React from 'react'

const row = [
  {
    id: "1",
    home: "Home",
    forums: "Forums",
    news: "News",
    videos: "Videos",
    search: "Search",
    cyber: "CYBERLETE.NET",
    create: "Create a Team",
    myteam: "My Teams",
    img14: "/image-14.png",
    tem: "tem",
    down: "/chevron_down.png",
    bell: "/bell.png",
  },
];


export default function Navbar() {
  return (
    <div>
         <div class="flex ">
          {row.map((card, id) => {
            return (
              <div
                key={id}
                class="flex pl-20 gap-14 text-[#6A6778] font-sans text-[17px] p-2   "
              >
                <div className="flex gap-12 text-[#6A6778] font-sans text-[17px]  " >
                <p>{card.home}</p>
                <p>{card.forums}</p>
                <p>{card.news}</p>
                <p>{card.videos}</p>
                <p>{card.search}</p>
                </div>
                <div className="lg:flex gap-9 text-[#6A6778] font-sans text-[17px] md:hidden sm:hidden  " >


                  <p class=" text-[#FFFF] font-bold text-[22px] px-20  ">
                    {card.cyber}
                  </p>
                  <p className="  ">{card.create}</p>
                  <p>{card.myteam}</p>

                  <div class="flex">
                    <img src={card.img14} class="rounded-full mr-2 h-7 " />
                    <p class="text-[13px] pt-2 flex ">
                      {card.tem} <img src={card.down} class="h-6" />
                    </p>
                    <img src={card.bell} class=" pt-2 h-8 " />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <img src="/underline.png" alt="img" />
    </div>
  )
}
