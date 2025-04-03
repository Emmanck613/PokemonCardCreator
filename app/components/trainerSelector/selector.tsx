import React from 'react'

const TrainerSelector = () => {


  return (
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Trainer Sprite
            </label>
            <div className="relative">
                <select 
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="sprite-gen"
                    name="spriteGen"
                >
                    <option value={1}>Gen 1</option>
                    <option value={2}>Gen 2</option>
                    <option value={3}>Gen 3</option>
                    <option value={4}>Gen 4</option>
                    <option value={5}>Gen 5</option>
                </select>

            </div>
        </div>

        <div className="w-full md:w-1/3 px-3 ">
            <div className="flex flex-col space-y-2">
                <label className="flex items-center">
                    <input
                    type="radio"
                    name="region"
                    value="hgss"
                    className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="ml-2">HGSS</span>
                </label>

                <label className="flex items-center">
                    <input
                    type="radio"
                    name="region"
                    value="dp"
                    className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <span className="ml-2">SINNOH</span>
                </label>
            </div>
        </div>

        
        <div className="w-full md:w-1/3 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Select a sprite
            </label>
            <div className="relative">
                <select 
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="sprite-gen"
                    name="spriteGen"
                >
                    <option value={1}>Gen 1</option>
                    <option value={2}>Gen 2</option>
                    <option value={3}>Gen 3</option>
                    <option value={4}>Gen 4</option>
                    <option value={5}>Gen 5</option>
                </select>

            </div>
        </div>
    </div>
  )
}

export default TrainerSelector