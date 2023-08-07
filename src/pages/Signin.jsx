import React from "react";

export default function Signin() {
  return (
    <div  >
      <div class="border-2f wrapper py-[140px] ">
        <img
          src="/Rectangle 693.png"
          alt="rectangle"
          class="mx-auto w-[27px] h-[89px]   "
        />
        <h1 class="text-center mt-9 lg:text-[48px] text-white font-sans sm:text-[38px] ">
          Select your wallet:
        </h1>

        <div class=" rounded-md border-slate-50 border mt-12 gap-3 max-w-[355px] mx-auto bg-[#0000001a]">
          <button class="hover:bg-[#051b5c47] pb-2 px-12 mt-5 w-full flex text-white gap-4">
            <img src="/fox.png" alt="img" class="pt-6 w-[65px] " />
            <h3 class="pt-8 text-[30px] ">Metamask</h3>
          </button>
          <br />
          <button class="hover:bg-[#051b5c47] px-12 py-3 w-full flex gap-4">
            <img src="/Ellipse.png" alt="img" class="pt-1 w-[65px]" />
            <h3 class="pt-2 text-white text-[30px]  ">Walletconnect</h3>
          </button>
          <br />
          <button class="hover:bg-[#051b5c47] px-12 mb-5 w-full flex text-white pb-[20px] gap-4">
            <img src="/Ledger.png" alt="img" class="pt-3 w-[65px]" />
            <h3 class="pt-4 text-white text-[30px]   ">Ledger</h3>
          </button>
        </div>

        <p class="text-center pt-7 text-white font-sans text-[19px] ">
          Fama is <span class="font-bold">beta and non-audited </span>
           software, use at your own discretion!
        </p>
      </div>
    </div>
    
  )
}
// import React from "react";
// import Signin from "./pages/Signin";
// import Body from "./pages/Body";

// export default function App() {
//   return (
//     <div>
//       <Signin/>
//       <Body/>
//     </div>
//   );
// }
// const [itemId,selectItemId]=useState(0);
