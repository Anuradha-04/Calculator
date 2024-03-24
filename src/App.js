
import React, { useState } from "react";

function App() {

  const [result, setresult] = useState("")

  const handleClick = (e) => {
    setresult((prev) => prev.concat(e.target.id))
    console.log("id ", e.target.id);
  }

  const clearAll = () => setresult("");

  const deleteOne = () => setresult(result.slice(0, -1))

  const Calculate = () => {
    try {
      setresult(eval(result).toString())
    } catch (error) {
      setresult("Error")
    }
  }

  return (

    <div className="bg-black h-screen p-4">
      <div className="rounded mx-auto max-w-[650px] min-h-[700px] shadow-3xl bg-[#adabab]">

        <h1 className=" font-bold text-4xl text-pink-800 flex justify-center mt-[3%] py-10">Calculater</h1>

        <div className="flex justify-center">
          <div className=" bg-rose-400 p-4 max-w-[450px] rounded-md border-4 border-pink-400 shadow-[0_1px_6px_5px#000000] ">
            <input className=" bg-slate-900/80 rounded-md h-[80px] p-4 w-full  text-2xl font-semiboldss text-white tracking-wider border-2 border-pink-300 shadow-inner shadow-current" type="text" value={result} disabled />
            <p className=" bg-slate-300 inline-block rounded-full px-3 py-1 my-2 text-red-500  text-sm tracking-wider border border-slate-400 font-bold "> brand Calculater</p>

            <div className="grid grid-cols-4 font-bold h-[280px] gap-2 font-bold">
              <button onClick={clearAll} type="button" className="bg-slate-300 rounded-lg shadow-inner">AC</button>
              <button onClick={deleteOne} type="button" className="bg-slate-300 rounded-lg shadow-inner">DEL</button>
              <button onClick={handleClick} type="button" className="bg-slate-300 rounded-lg shadow-inner" id=".">.</button>
              <button onClick={handleClick} type="button" className="bg-slate-300 rounded-lg shadow-inner" id="/">/</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="7">7</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="8">8</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="9">9</button>
              <button onClick={handleClick} type="button" className="bg-slate-300 rounded-lg shadow-inner" id="*">*</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="4">4</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="5">5</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="6">6</button>
              <button onClick={handleClick} type="button" className="bg-slate-300 rounded-lg shadow-inner" id="-">-</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="1">1</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="2">2</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="3">3</button>
              <button onClick={handleClick} type="button" className="bg-slate-300 rounded-lg shadow-inner" id="+">+</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="00">00</button>
              <button onClick={handleClick} type="button" className="bg-green-500 rounded-lg shadow-inner" id="0">0</button>
              <button onClick={Calculate} type="button" className="bg-slate-300 rounded-lg shadow-inner col-span-2" id="=">=</button>
            </div>

          </div>
        </div>


      </div>

    </div>
  )
}
export default App;  