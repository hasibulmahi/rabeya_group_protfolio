import React from 'react';

const OurProjectPageCards = ({ project }) => {

    const { _id, image, projectName, projectDescription} = project;


    return (

        // Our Completed Project Card

        <div className="lg:pt-[24px]">

            <h2 className='text-[#BCBCBC] lg:text-[24px]'>Commercial</h2>

            {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}

            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                </div>
               
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
                </div>
            </div>

            <div className="">
                {/* Black Rock wind farm, West Virgnia, USA */}
                <h2 className="card-title text-[20px] lg:pb-[12px] lg:pt-[16px] text-[#333]">{projectName}</h2>

                {/* Rabeya Construction, your trusted partner from real estate to global ventures, blending precision and excellence. Where dreams meet construction, we're your unwavering ally. Rabeya Construction, your trusted partner from real estate to global ventures, blending precision and excellence. Where dreams meet construction, we're your unwavering ally. */}
                <p className='lg:text-[14px] text-[#3E3C3C] pb-[21px]'>{projectDescription}</p>
                
            </div>
        </div>
    );
};

export default OurProjectPageCards;