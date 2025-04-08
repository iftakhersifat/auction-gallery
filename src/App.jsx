import './App.css'


function App() {

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm lg:px-12">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Auctions</a></li>
        <li><a>Categories</a></li>
        <li><a>How to works</a></li>
      </ul>
    </div>
    <h1 className="btn btn-ghost text-xl text-[#003EA4] gap-0">Auction<span className="text-[#FFD337] font-[800]">Gallery</span></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>Auctions</a></li>
        <li><a>Categories</a></li>
        <li><a>How to works</a></li>
    </ul>
  </div>
  <div className="navbar-end space-x-5">
    
    {/* notification button */}
    <button className="btn btn-ghost btn-circle bg-[#EBF0F5]">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary btn-circle indicator-item bg-[#0E2954] text-[12px]">9</span>
      </div>
    </button>
    
    <div className="avatar">
  <div className="w-10  rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
  </div>
</div>

{/* banner section */}
<div class="relative lg:h-[500px] md:h-[300px] h-[300px] w-full">
  <div class="absolute inset-0">
    <img src="../assets/Banner-min.jpg" alt="" class="w-full h-full object-cover" />
  </div>

  <div class="relative z-10 flex items-center h-full px-6 md:px-16">
    <div class="text-white max-w-xl">
      <h1 class="text-3xl md:text-5xl font-semibold mb-4">Bid on Unique Items from <br />Around the World</h1>
      <p class="text-sm md:text-base mb-6">Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.</p>
      <button class="bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-gray-200">Explore Auctions</button>
    </div>
  </div>
</div>



{/* footer section */}
<footer className="footer footer-horizontal footer-center bg-white p-10">
  <div>
  <h1 className="btn btn-ghost text-xl text-[#003EA4] gap-0">Auction<span className="text-[#FFD337] font-[800]">Gallery</span></h1>
    <ul className='flex space-x-4'>
      <p>Bid.</p>
      <p>Win.</p>
      <p>Own.</p>
    </ul>
    <ul className='flex space-x-4'>
        <li><a>Home</a></li>
        <li><a>Auctions</a></li>
        <li><a>Categories</a></li>
        <li><a>How to works</a></li>
    </ul>
    <p>© 2025 AuctionHub. All rights reserved.</p>
  </div>
</footer>



    </>
  )
}

export default App
