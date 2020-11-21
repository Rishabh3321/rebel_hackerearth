import Axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/card";

function App() {
  const [beers, setBeers] = useState([
    {
      abv: "0.05",
      ibu: "",
      id: 1436,
      name: "Pub Beer",
      style: "American Pale Lager",
      ounces: 12.0,
    },
  ]);

  const [beerImages, setBeerImages] = useState([
    {
      image:
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/csm_01_02-2019_Beer_Brewing_53ef2818e58285158.png",
    },
  ]);

  const fetchBeers = async () => {
    const response = await Axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"
    );
    setBeers(response.data.slice(0, 20));
  };

  const fetchBeerImages = async () => {
    const response = await Axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"
    );

    setBeerImages(response.data);
  };

  useEffect(() => {
    fetchBeers();
    fetchBeerImages();
  }, []);

  return (
    <div className="w-full min-h-screen bg-rebel-purple-100 text-center">
      <h1 className="text-5xl text-rebel-yellow-100 font-serif">
        BeerDB <span className="text-base font-bold">grab one</span>
      </h1>
      <div className="w-full px-4">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg md:mx-auto py-10">
          {beers.map((beer, index) => {
            return (
              <Card
                beer={beer}
                link={
                  beerImages[index % 5].image ||
                  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/csm_01_02-2019_Beer_Brewing_53ef2818e58285158.png"
                }
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full text-xl border-t border-rebel-yellow-100 py-4">
        <p className="text-rebel-yellow-100">
          Made with{" "}
          <span role="img" aria-label="emoji">
            ❤️
          </span>{" "}
          | Rishabh Mishra
        </p>
      </div>
    </div>
  );
}

export default App;
