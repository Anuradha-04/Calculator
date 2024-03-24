import React from "react";

const About = () => {

    return (
        <div>
            <div className="font-bold text-4xl text-pink-800 flex justify-center mt-[3%] py-10" >
                Calculater </div>;
            <input type="text" value={result} disabled />
        </div>
    )
};

export default About;