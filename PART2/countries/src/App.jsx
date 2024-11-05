import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [searchText, setSearchText] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        const data = response.data;
        // console.log("Datos obtenidos: ", data[0].name.common);
        setAllCountries(data);
      });
  }, []);

  useEffect(() => {
    if (!searchText) {
      setFilteredCountries([]);
      setError(null);
      return;
    }

    const matches = allCountries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    if (matches.length >= 10) {
      setError("Too many matches, specify another filter.");
      setFilteredCountries([]);
      return;
    }

    if (matches.length === 1) {
      const countryName = matches[0].name.common.toLowerCase();
      // console.log("País con mayor coincidencia: ", countryName);

      axios
        .get(
          `https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`
        )
        .then((response) => {
          // console.log("Datos obtenidos: ", response.data);
          setSelectedCountry(response.data);
        })
        .catch((error) => {
          console.error("Ocurrió un error: ", error);
          setError("Ocurrió un error al buscar el país.");
        });

      setFilteredCountries([]);
      setError(null);
      return;
    }

    setFilteredCountries(matches);
    setSelectedCountry(null);
    setError(null);
  }, [searchText, allCountries]);

  return (
    <div>
      <label htmlFor="find">Find countries: </label>
      <input type="text" placeholder="search" onChange={handleInputChange} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {filteredCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>

      {selectedCountry && (
        <div>
          <h1>{selectedCountry.name.common}</h1>
          <p>Capital {selectedCountry.capital}</p>
          <p>Area {selectedCountry.area}</p>
          <strong>Languages:</strong>
          <ul>
            {Object.values(selectedCountry.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>

          <img
            src={selectedCountry.flags.png}
            alt={selectedCountry.flags.alt}
            width="150"
          />
        </div>
      )}
    </div>
  );
}
