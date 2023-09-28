import { useState } from "react";


const AssignmentDetails = () => {
    const [tab, setTab] = useState('description');

    const DescfontStyle = tab === 'description' ? 'font-medium' : 'text-gray-600';
    const ResfontStyle = tab === 'resource' ? 'font-medium' : 'text-gray-600'

    const toogleTab = () => {
        if (tab === 'description') {
            setTab('resource')
        } else {
            setTab('description')
        }
    }


    return (
        <section className="flex flex-col ">
            <div className="border-b py-3">
                <h3 className="text-lg text-gray-600">Assignments / <span className="text-lg font-medium text-black">Basic Linux Commands</span></h3>
                <h1 className="mt-2 mb-1 font-medium  text-xl">Assignment 1 - Basic Linux Commands</h1>
                <p className="text-gray-600 font-medium text-15px">Prof. Nana Kwesi Asante</p>
            </div>
            <div className="flex justify-between mt-6">
                <div className="w-3/4 flex flex-col border-r-2">
                    <div className="flex border-b-2 pb-3 mr-4 text-15px">
                        <p className={` mr-64 cursor-pointer ${DescfontStyle}`} onClick={toogleTab}>Description</p>
                        <p className={`text-gray-600 cursor-pointer ${ResfontStyle}`} onClick={toogleTab}>Resources</p>
                    </div>
                    <div className="mt-4 text-gray-600 text-15px mr-4">
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.Duis aute irure dolor in reprehenderit in voluptate velit </p>
                    </div>
                </div>    
                <div className=" w-1/4 flex flex-col pl-2"> 
                    <h1 className="font-medium text-15px mb-2">Course Objective</h1>
                    <p className="text-15px text-gray-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
            </div>            
        </section>
    )
};

export default AssignmentDetails