import React from "react";

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
      <div class="bg-[#19171F] wrapper pt-[12px] md:px-6 sm:px-5 pr-3 ">
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
        {/* ------------------------------------------------------------------------ */}

        <div className=" flex justify-around lg:flex md:block sm:block ">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-28 xl:grid-cols-3">
            <div class=" px-8  rounded-2xl bg-[#1F1E26] h-[54vh] items-center w-[270px] mt-[26px] overflow-hidden  ">
              <h1 class="text-center p-2 text-white ">Games</h1>
              {games.map((data, id) => {
                return (
                  <div key={id} class=" ">
                    <div class="flex gap-6 ">
                      <img src={data.img} class=" w-[94px] h-[86px] pt-2 " />
                      <img src={data.img2} class=" w-[94px] h-[96px] pt-2" />
                    </div>

                    <div class="flex gap-6 ">
                      <img src={data.img2} class=" w-[94px] h-[96px] pt-2" />
                      <img src={data.img} class=" w-[94px] h-[86px] pt-2" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div class=" px-4 rounded-2xl bg-[#1F1E26] lg:h-[50vh] w-[270px] mt-[28px] overflow-hidden md:h-[58vh] sm:h-[58vh]  ">
              <h1 class="text-center text-[18px] p-2 text-white pb-[12px] ">
                Community Posts
              </h1>
              {post.map((posts, id) => {
                return (
                  <div key={id} className="flex gap-4 pb-[20px] ">
                    <img
                      src={posts.img}
                      className="rounded-full h-[38px] mt-1 "
                    />
                    <div>
                      <p className="text-[12px] leading-[13px] text-white bold ">
                        {posts.heading}
                      </p>
                      <p className="text-[8px] leading-[10px] text-[#6A6778] ">
                        {posts.prgh}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ------------------------------234--------------------- */}
          <div>
            <div class=" px-5  rounded-2xl bg-[#1F1E26]  mt-[28px] max-w-[688px] pr-0 h-[210px]  ">
              <p class="text-center p-2 text-[15px] text-white ">Events</p>
              <div className="grid grid-cols-3 ">
                {events.map((card, id) => {
                  return (
                    <div key={id} className=" ">
                      <div class="w-[250px] h-[160px] ">
                        <img src={card.pic} class="w-[198px] h-[105px]  " />
                        <div className="pr-10 pl-2 ">
                          <p class="text-white bold text-[14px] ">
                            {card.heading}
                          </p>
                          <p class="text-[#6A6778] text-[10px] leading-[10px] ">
                            {card.prgh}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ------------------------------------- */}
            <div class=" px-5  rounded-2xl bg-[#1F1E26]  mt-[28px] max-w-[688px] pr-0  h-[265px]  ">
              <p class="text-center p-2 pb-[22px] text-[18px] text-white ">
                League Highlights
              </p>
              <div className="grid grid-cols-3 ">
                {events.map((card, id) => {
                  return (
                    <div key={id} className=" ">
                      <div class="w-[250px] h-[170px] ">
                        <img src={card.pic} class="w-[198px] h-[105px]  " />
                        <div className="pr-10 pl-2  ">
                          <p class="text-white bold text-[14px] ">
                            {card.heading}
                          </p>
                          <p class="text-[#6A6778] text-[10px] leading-[10px]  ">
                            {card.prgh}
                          </p>
                          <button className="bg-[#19171F] rounded-full text-[10px] text-white mt-[12px] ml-[35px] px-[29px] py-[3px]  ">
                            {card.read}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ---------------------------------------------- */}

            <div class=" px-5 mt-[28px] rounded-2xl bg-[#1F1E26]  max-w-[688px] w-full ">
              <p class="text-center p-2 pb-[15px] text-[18px] text-white ">
                Trending Videos
              </p>
              {/* <img src="/chevron_left.png" /> */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {trending.map((videodata, id) => {
                  return (
                    <div key={id}>
                      <img
                        src={videodata.videos}
                        className="w-[188px] h-[105px]"
                      />

                      <div className="pl-2">
                        <p className="text-white bold text-[14px] ">
                          {videodata.heading}
                        </p>
                        <p className="text-[#6A6778] text-[10px]">
                          {videodata.prgh}
                        </p>
                      </div>
                    </div>
                  );
                })}
                {/* <img src="/chevron_right.png" /> */}
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------ */}
          <div className="lg:block md:flex gap-8 ">
            <div class=" px-5 mt-[28px] rounded-2xl bg-[#1F1E26] w-[450px] h-[74vh] overflow-hidden ">
              <p class="text-center p-2 pb-[10px] text-[15px] text-white ">
                News Block
              </p>
              {news.map((news, id) => {
                return (
                  <div key={id}>
                    <div className="flex pb-5">
                      <img src={news.img} className="w-[110px] h-[100px] " />
                      <div className="pl-[14px]">
                        <p className="bold text-white text-[16px] ">
                          {news.heading}
                        </p>
                        <p className="text-[11px] text-[#6A6778] leading-[14px] ">
                          {news.prgh}
                        </p>
                        <button className="bg-[#19171F] rounded-full text-[10px] text-white mt-[9px] px-[29px] py-[3px]  ">
                          {news.read}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div class=" px-5 mt-[28px] rounded-2xl bg-[#1F1E26] overflow-hidden lg:w-[450px] lg:h-[29.5vh] md:w-[200px]  ">
              <p class="text-center p-2 pb-[10px] text-[15px] text-white ">
                Player of the Week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
