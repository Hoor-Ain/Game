import React from "react";

export default function Body() {
  const data = [
    // {
    //   Date: "Date",
    //   Time: "Time",
    //   Action: "Action",
    //   Price: "Price",
    //   'ETH Held': "ETH Held" ,
    //   "USDC Held": 'USDC Held',
    //   "Total $": "Total $", 
    //   },
    {
      Date: "8/9/23",
      Time: "11:00",
      Action: "Hold",
      Price: "1672",
      "ETH Held": "522",
      "USDC Held": '0',
      "Total $": '872784',
    
    },
    {
      Date: "8/9/23",
      Time: "10:00",
      Action: "Hold",
      Price: "1672",
      "ETH Held": '522',
      "USDC Held": '0',
      "Total $": '872784',
    },
  ];

  return (
    <div className="wrapper py-[25px]  items-center xl:px-[242px] md:px-[40px] sm:p-4 ">
      <div class=" flex justify-between ">
        <div class=" flex  ">
          <div class="flex gap-[30px] ">
            <img src="/Rectangle 693.png" alt="img" class="w-[12px] " />
            <button class="text-[19px] border-2 rounded-full px-6 text-white border-[#FFFFFF] ">
              ETH/USDC Famabot
            </button>
          </div>
          <div class="flex gap-[10px] px-16 py-[12px] xl:flex md:hidden sm:hidden    ">
            <img src="/Vector.png" alt="vector" class="h-[28px]     " />
            <p class="text-[17px] text-white underline">
              Learn more about how Famabot works
            </p>
          </div>
        </div>
        <div>
          <button class="text-[16px] rounded-3xl px-4 py-2 text-white border border-[#4CC5C0] ">
            0xGdu3.....5Fys7
          </button>
        </div>
      </div>
      {/* ---------------------------------------------------- */}
      <div class=" justify-between xl:flex  ">
        <div class=" ">
          <div class="flex gap-[100px] py-[35px] lg:flex md:block sm:block  ">
            <div class="flex">
              <p class="text-white xl:text-[22px] md:text-[18px] ">All time performance:</p>
              <h2 class="text-[#44C359] px-[35px] xl:text-[22px] md:text-[18px]  ">+122%</h2>
            </div>
            <div class="flex ">
              <p class="text-white xl:text-[22px] md:text-[18px]   ">Month to date performance:</p>
              <h2 class="text-[#44C359] xl:text-[22px] md:text-[18px] px-[35px]">+17.2%</h2>
            </div>
          </div>
          <img
            src="/table.png"
            alt="img"
            class="rounded-[36px] border w-[1100px] md-[800px] p-0 sm-[400px] "
          />
          {/* --------------------------- */}
          <div class="lg:flex gap-16 py-[30px] md:block ">
            <div class=" ">
              <div class="flex gap-16">
                <p class="text-white text-[18px] px-[26px] ">Vault Capacity:</p>
                <h2 class="text-white text-[18px] ">$50,000</h2>
              </div>
              <div class="flex gap-16 py-[10px]">
                <p class="text-white text-[18px] px-[26px] ">Vault Deposits:</p>
                <h2 class="text-white text-[18px] ">$25,000 (50% capacity) </h2>
              </div>
            </div>
            <div class="">
              <div class="flex gap-4">
                <p class="text-white text-[18px] px-[26px] ">
                  Average Drawdown:
                </p>
                <h2 class="text-white text-[18px] px-[38px] ">-0.62%</h2>
              </div>
              <div class="flex py-[10px] ">
                <p class="text-white text-[18px] px-[26px] ">
                  Avg. Drawdown Occurence
                </p>
                <h2 class="text-white text-[18px] ">4.6 per month</h2>
              </div>
            </div>
          </div>
          <div class="flex py-[10px] gap-4 ">
            <p class="text-white text-[21px] px-[26px] ">Activity Logs</p>
            <h2 class="text-white text-[14px] py-[5px] ">
              Logs are delayed 24hrs
            </h2>
          </div>

          {/* ------------------------------------------------- */}
          
          <table >
            <thead>
     <th class='px-[3px] text-[white] '> Date</th>
     <th class='px-[3px] text-[white] '> Time</th>
     <th class='px-[3px] text-[white] '> Action</th>
     <th class='px-[3px] text-[white] '> Price</th>
     <th class='px-[8px] text-[white] '> ETH Held </th>
     <th class='px-[8px] text-[white] '> USDC Held</th>
     <th class='px-[3px] text-[white] '> Total $</th>
      

            </thead>

                <tbody class='border-t-2 ' >
                  {data.map((item, index) => (
                    <tr key={index} >
                      <td class='lg:px-[58px] text-white py-[5px] text-[18px] md:px-[30px] py-auto text-[13px] sm:px-[26px] ' >{item.Date}</td>
                      <td class='lg:px-[50px] text-white py-[5px] text-[18px] md:px-[30px] py-auto text-[13px] sm:px-[26px] '>{item.Time}</td>
                      <td class='lg:px-[42px] text-white py-[5px] text-[18px] md:px-[30px] py-auto text-[13px] sm:px-[26px] '>{item.Action}</td>
                      <td class='lg:px-[38px] text-white py-[5px] text-[18px] md:px-[30px] py-auto text-[13px] sm:px-[26px] '>{item.Price}</td>
                      <td class='lg:px-[46px] text-white py-[5px] text-[18px] md:px-[30px] py-auto text-[13px] sm:px-[26px] '>{item['ETH Held']}</td>
                      <td class='lg:px-[40px] text-white py-[5px] text-[18px] md:px-[30px] py-auto text-[13px] sm:px-[26px] '>{item['USDC Held']}</td>
                      <td class='lg:px-[40px] text-white py-[5px] text-[18px] md:px-[30px] py-auto text-[13px] sm:px-[26px] '>{item['Total $']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          {/* ================== */}
        </div>
        <div class="mt-[56px] ">
          <div class="border border-slate-50 bg-[#0000001a] rounded-3xl w-[317px] px-[30px] pt-[12px]">
          <p class="text-white text-[25px]   ">Manage</p>

            <p class="text-white text-[22px] pt-[15px] ">Your wallet:</p>
            <div class="flex gap-[83px] px-[15px] py-[22px] ">
              <p class="text-white text-[16px] pt-[11px] ">Ξ1.344</p>
              <p class="text-white text-[16x] pt-[11px]  ">ETH</p>
            </div>
            <div class="flex gap-[72px] px-[18px] ">
              <p class="text-white text-[16px]  ">$35.55</p>
              <p class="text-white text-[16px] ">USDC</p>
            </div>

            <p class="text-white pt-[40px] text-[23px]">Your Position:</p>
            <div class="flex gap-[72px] px-[30px] py-[22px] ">
              <p class="text-white text-[16px] pt-[12px] ">0</p>
              <p class="text-white text-[16px] pt-[12px]  ">LP Tokens</p>
            </div>
          
            <div class="flex gap-[72px] px-[22px] ">
              <p class="text-white text-[16px]  ">$0</p>
              <p class="text-white text-[16px] ">Est. Value</p>
            </div>

            <p class="text-white text-[24px] py-[34px]  ">Execute:</p>

            <div class=" px-[12px] pt-[26px] flex gap-[68px]">
              <p class="text-white text-[25px] flex pt-[10px] gap-[5px]  ">$ <span class="text-[#A0A0A0]"> 0</span></p>

              <button class="flex text-white text-[22px] gap-[6px] border-2 px-[18px] pt-[5px] rounded-full  ">
                USDC
                <img src="/Polygon.png" alt="img" class="pt-[10px] w-[29px] pr-[10px] " />
              </button>
            </div>
            <hr class="w-[83px] " />
            <div class="pt-[90px] pb-[36px] ">
              <button class="gradient rounded-full px-[80px] py-[5px] text-white text-[24px] ">
                Deposit
              </button>
              <button class="rounded-full px-[70px] py-[4px] text-white text-[24px] border border-[#4CC5C0] mt-[14px] ">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


