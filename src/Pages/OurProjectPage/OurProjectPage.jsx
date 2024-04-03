import React, { useEffect, useState } from 'react';
import OurProjectPageCards from './OurProjectPageCards';
import { data } from 'autoprefixer';

const OurProjectPage = () => {

    // Load Jason Data

    const [completedProject, setcompletedProject] = useState([]);
    
    useEffect(() => {

        fetch('CompletedProjectData.json')
            
            .then(res => res.json())
            .then(data => setcompletedProject(data))
        
    }, [])
    
    return (
        <section className='max-w-[1800px] mx-auto'>

            {/* Navbar background */}
            <div className="bg-black  h-[174px]"></div>

            <div className="max-w-[1280px] m-auto">
                

                {/* Section Title */}

                <div className='md:flex  lg:justify-between lg:items-center '>
                    <div className='pt-[22px] pb-[17px] lg:pt-[42px] lg:pb-[35px]'>
                        <h3 className='text-[48px] text-[#0B0B0B]'>Our completed project </h3>
                    </div>
                    <div>
                        <button className='p-[16px] rounded-[12px] border-[1px] '>
                            <div className='md:flex lg:flex gap-[80px] items-center'>

                                <h2>Search project </h2>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M14.1667 14.1667L17.5 17.5M2.5 9.16667C2.5 10.9348 3.20238 12.6305 4.45262 13.8807C5.70286 15.131 7.39856 15.8333 9.16667 15.8333C10.9348 15.8333 12.6305 15.131 13.8807 13.8807C15.131 12.6305 15.8333 10.9348 15.8333 9.16667C15.8333 7.39856 15.131 5.70286 13.8807 4.45262C12.6305 3.20238 10.9348 2.5 9.16667 2.5C7.39856 2.5 5.70286 3.20238 4.45262 4.45262C3.20238 5.70286 2.5 7.39856 2.5 9.16667Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </button>
                    </div>
                </div>

                <div>
                    <p className='border-[1px] border-[#E3E3E3] mb-[32px]'></p>
                </div>

                {/* <OurProjectPageCards></OurProjectPageCards> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[23px] md:gap-[23px]  relative ">

                    {
                        completedProject.map(project => <OurProjectPageCards key={project.id} project={project}></OurProjectPageCards>)
                    }

                </div>
            </div>

        </section>
    );
};

export default OurProjectPage;