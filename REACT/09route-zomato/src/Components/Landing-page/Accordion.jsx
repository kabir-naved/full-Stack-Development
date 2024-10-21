import React, { useState } from "react";
// import './App.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl text-gray-800 mb-4">Explore options near me</h1>

      <div className="accordion-section">
        
        <button className="border-2 rounded-lg w-full p-2 mb-4">
          <div className="pr-3 pl-3">
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full text-left py-3 font-medium flex justify-between items-center"
            >
              Popular Cuisines Near Me
              <span>{activeIndex === 0 ? "▲" : "▽"}</span>
            </button>
            {activeIndex === 0 && (
              <div className="text-gray-600 text-sm py-2">
                <p>
                  Bakery near me ・ Beverages near me ・ Biryani near me ・
                  Burger near me ・ Chinese near me ・ Desserts near me ・ Ice
                  Cream near me ・ Kebab near me ・ Mithai near me ・ Momos near
                  me ・ Mughlai near me ・ North Indian near me ・ Pasta near me
                  ・ Pizza near me ・ Rolls near me ・ Sandwich near me ・ Shake
                  near me ・ Sichuan near me ・ South Indian near me ・ Street
                  near me
                </p>
              </div>
            )}
          </div>
        </button>

        
        
        <button className="border-2 rounded-lg w-full p-2 mb-4">
        <div className=" pr-3 pl-3">
          <button
            onClick={() => toggleAccordion(1)}
            className="w-full text-left py-3 font-medium flex justify-between items-center"
          >
            Popular Restaurant Types Near me
            <span>{activeIndex === 1 ? "▲" : "▽"}</span>
          </button>
          {activeIndex === 1 && (
            <div className="text-gray-600 text-sm py-2">
              <p>Bakery near me ・ Beverages near me ・ Biryani near me ・
                  Burger near me ・ Chinese near me ・ Desserts near me ・ Ice
                  Cream near me ・ Kebab near me ・ Mithai near me ・ Momos near
                  me ・ Mughlai near me ・ North Indian near me ・ Pasta near me
                  ・ Pizza near me ・ Rolls near me ・ Sandwich near me ・ Shake
                  near me ・ Sichuan near me ・ South Indian near me ・ Street
                  near me.</p>
            </div>
          )}
        </div>
         </button>

    
        <button className="border-2 rounded-lg w-full p-2 mb-4">
        <div className="pr-3 pl-3">
          <button
            onClick={() => toggleAccordion(2)}
            className="w-full text-left py-3 font-medium flex justify-between items-center"
          >
            Top Restaurant Chains
            <span>{activeIndex === 2 ? "▲" : "▽"}</span>
          </button>
          {activeIndex === 2 && (
            <div className="text-gray-600 text-sm py-2">
              <p>Bakery near me ・ Beverages near me ・ Biryani near me ・
                  Burger near me ・ Chinese near me ・ Desserts near me ・ Ice
                  Cream near me ・ Kebab near me ・ Mithai near me ・ Momos near
                  me ・ Mughlai near me ・ North Indian near me ・ Pasta near me
                  ・ Pizza near me ・ Rolls near me ・ Sandwich near me ・ Shake
                  near me ・ Sichuan near me ・ South Indian near me ・ Street
                  near me.</p>
            </div>
          )}
        </div>
         </button>
      

        
        <button className="border-2 rounded-lg w-full p-2 mb-4">
        <div className="pr-3 pl-3">
          <button
            onClick={() => toggleAccordion(3)}
            className="w-full text-left py-3 font-medium flex justify-between items-center"
          >
            Cities We Deliver To
            <span>{activeIndex === 3 ? "▲" : "▽"}</span>
          </button>
          {activeIndex === 3 && (
            <div className="text-gray-600 text-sm py-2">
              <p>Bakery near me ・ Beverages near me ・ Biryani near me ・
                  Burger near me ・ Chinese near me ・ Desserts near me ・ Ice
                  Cream near me ・ Kebab near me ・ Mithai near me ・ Momos near
                  me ・ Mughlai near me ・ North Indian near me ・ Pasta near me
                  ・ Pizza near me ・ Rolls near me ・ Sandwich near me ・ Shake
                  near me ・ Sichuan near me ・ South Indian near me ・ Street
                  near me.</p>
            </div>
          )}
        </div>
         </button>
       
      </div>
    </div>
  );
};

export default Accordion;
