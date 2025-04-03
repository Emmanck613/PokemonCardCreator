"use client"
import React from 'react'
import { useState } from 'react';


const InputPokemon = () => {
    const pokemonList = [
        "Pikachu", "Charizard", "Bulbasaur", "Squirtle", "Jigglypuff",
        "Gengar", "Eevee", "Snorlax", "Mewtwo", "Dragonite"
      ];

     const [search, setSearch] = useState("");
     const [showOptions, setShowOptions] = useState(false);

    const filteredOptions = pokemonList.filter((pokemon) =>
        pokemon.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className='w-full md:w-1/3 px-3 mb-6'>
        
        <input
            type="text"
            name="pokemonName"
            placeholder="Pokemon Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowOptions(true)}
            onBlur={() => setTimeout(() => setShowOptions(false), 150)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />

        {showOptions && filteredOptions.length > 0 && (
            <ul className="absolute w-full bg-white border border-gray-300 rounded shadow-md max-h-40 overflow-y-auto max-w-50">
            {filteredOptions.map((pokemon) => (
                <li
                    key={pokemon}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onMouseDown={() => setSearch(pokemon)}
                >
                {pokemon}
                </li>
            ))}
            </ul>
        )} 

    </div>
  )
}

export default InputPokemon