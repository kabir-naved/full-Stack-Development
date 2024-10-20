import React from 'react'

function Notfound() {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div class="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button className="mt-5">
      <a href='/'
        className="relative inline-block text-sm font-medium text-blue-500 group active:text-blue-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform bg-blue-500 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
        ></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current"> Back
        </span>
      </a>
    </button>
</main>
  )
}

export default Notfound