import React from 'react'
import TrainerSelector from "../trainerSelector/selector";
import InputPokemon from "../pokemonInput/inputPokemon";

const form = () => {
    const pokemonTeam = 6;

  return (
    <form className="w-full max-w-xl">
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Trainer name
                </label>
                <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    name="trainerName" 
                    type="text" 
                    placeholder="Jane"/>
            </div>
        </div>

        <TrainerSelector/>

        {/* <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Password
                </label>
                <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="grid-password" 
                type="password" 
                placeholder="******************" />
                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
        </div> */}

        <div className="flex flex-wrap -mx-3 mb-2">
            <h3 className='w-full px-3 mb-2'>
                Team
            </h3>
            {/* we use the spread syntax for brevity, we are simply maping pokemonTeam, with a length of 6, so iterating 6 times, to create 6 inputs  */}
            {[...Array(pokemonTeam)].map((_, index) => (
                    <InputPokemon key={index} />
                ))
            }

        </div>
    </form>
  )
}

export default form