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