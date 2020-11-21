import React from "react";

function Card({ beer, link }) {
  return (
    <div className="w-full bg-white flex items-center p-4 rounded-lg hover:shadow-rebel-card">
      <img
        src={link}
        alt="beer"
        className="w-20 h-20 rounded-lg border-2 border-rebel-yellow-100 p-2 mr-4 hover:shadow-2xl"
      />
      <div className="text-left">
        <p className="mb-1 text-rebel-purple-100 text-xl font-medium font-serif">
          {beer.name}
        </p>
        <p className="mb-2 text-gray-600">{beer.style}</p>
        <p className="mb-2">{beer.ounces} ounces</p>
        <p className="mb-2">
          <span>{beer.abv}</span> abv
        </p>
        {/* <p className="mb-2">
          ibu : <span>{beer.ibu}</span>
        </p> */}
      </div>
    </div>
  );
}

export default Card;
