import React from 'react';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-10 md:px-20 lg:px-40">
      <div className="text-white text-5xl font-bold mb-6 md:mb-0" style={{ fontFamily: "'Playfair Display', serif" }}>
        refokus.
      </div>

      <div className="flex flex-col md:flex-row gap-10 text-sm">
        <div>
          <h3 className="text-gray-300 font-semibold mb-3">Socials</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Twitter (X?)</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-300 font-semibold mb-3">Sitemap</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Work</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contacts</a></li>
          </ul>
        </div>
      </div>

     
      <div className="mt-6 md:mt-0 md:text-right">
        <p className="text-gray-300 text-sm mb-4">
          Refokus is pioneering digital agency driven by design and empowered by technology.
        </p>
        
        <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold">
          <img className='w-auto h-8 mr-1' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="enterprise" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
