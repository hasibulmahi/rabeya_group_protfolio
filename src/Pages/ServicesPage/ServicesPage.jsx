import serviceimg from "../../assets/service-img-1.jpg";


const ServicesPage = () => {
    return (
        
        <article className="bg-[#F3F3F3] max-w-[1800px] mx-auto">
            <div className="bg-black  h-[174px]"></div>
            <div className=" max-w-[1280px] m-auto">

                {/* <div className="flex  gap-[22.88px] btn border-[1.164px] border-[#D2D2D2]  ">
                    <button className="text-[#000] text-[16px] ">Construction</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                        <path d="M11.8257 16.2829L18.7791 8.98508C18.8952 8.86331 18.96 8.70153 18.96 8.5333C18.96 8.36507 18.8952 8.20329 18.7791 8.08152L18.7713 8.07367C18.715 8.01443 18.6473 7.96726 18.5722 7.93503C18.4971 7.9028 18.4163 7.88618 18.3346 7.88618C18.2528 7.88618 18.172 7.9028 18.0969 7.93503C18.0218 7.96726 17.9541 8.01443 17.8978 8.07367L11.3503 14.9459L4.80545 8.07366C4.74918 8.01443 4.68144 7.96726 4.60637 7.93503C4.53129 7.9028 4.45044 7.88618 4.36874 7.88618C4.28703 7.88618 4.20618 7.9028 4.1311 7.93503C4.05603 7.96726 3.98829 8.01443 3.93202 8.07366L3.92416 8.08152C3.80808 8.20329 3.74332 8.36507 3.74332 8.5333C3.74332 8.70153 3.80808 8.86331 3.92416 8.98508L10.8776 16.2829C10.9388 16.3471 11.0123 16.3982 11.0938 16.4331C11.1753 16.468 11.263 16.486 11.3516 16.486C11.4403 16.486 11.528 16.468 11.6095 16.4331C11.691 16.3982 11.7645 16.3471 11.8257 16.2829Z" fill="black" />
                    </svg>
                </div> */}
                <button className="btn  ml-[1110px] text-[#3E3C3C] border-[#DFDFDF]  text-[14px]  mt-[61px] mb-[47px]">
                    <div className="flex gap-[22.88px] align-center">
                        <p>Construction</p>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="white">
                            <path d="M11.8257 16.2829L18.7791 8.98508C18.8952 8.86331 18.96 8.70153 18.96 8.5333C18.96 8.36507 18.8952 8.20329 18.7791 8.08152L18.7713 8.07367C18.715 8.01443 18.6473 7.96726 18.5722 7.93503C18.4971 7.9028 18.4163 7.88618 18.3346 7.88618C18.2528 7.88618 18.172 7.9028 18.0969 7.93503C18.0218 7.96726 17.9541 8.01443 17.8978 8.07367L11.3503 14.9459L4.80545 8.07366C4.74918 8.01443 4.68144 7.96726 4.60637 7.93503C4.53129 7.9028 4.45044 7.88618 4.36874 7.88618C4.28703 7.88618 4.20618 7.9028 4.1311 7.93503C4.05603 7.96726 3.98829 8.01443 3.93202 8.07366L3.92416 8.08152C3.80808 8.20329 3.74332 8.36507 3.74332 8.5333C3.74332 8.70153 3.80808 8.86331 3.92416 8.98508L10.8776 16.2829C10.9388 16.3471 11.0123 16.3982 11.0938 16.4331C11.1753 16.468 11.263 16.486 11.3516 16.486C11.4403 16.486 11.528 16.468 11.6095 16.4331C11.691 16.3982 11.7645 16.3471 11.8257 16.2829Z" fill="black" />
                        </svg>
                    </div>
                </button>

                <section className="banner ">
                    <div>
                        <img className="w-full h-[650px] relative" src={serviceimg} alt="" />

                        {/* <div className="flex gap-[550px] absolute mt-[-150px] text-white bg-black  w-[1280px] bg-opacity-30 ">
                            <div className="pl-[10px]">
                                <h1 className="text-[40px] pb-[16px]">Construction an Building</h1>
                                <div className="flex gap-[28px] ">
                                    <div>
                                        <h5 className="text-[24px] pb-[4px]">2003</h5>
                                        <p className="text-[14px]">Year established</p>
                                    </div>
                                    <div>
                                        <h5 className="text-[24px] pb-[4px]">2003</h5>
                                        <p className="text-[14px]">Year established</p>
                                    </div>
                                    <div>
                                        <h5 className="text-[24px] pb-[4px]">2003</h5>
                                        <p className="text-[14px]">Year established</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-ghost text-[18.572px] text-gray-200 p-[40px] text-center">View all 160 <br /> photos</button>
                            </div>
                        </div> */}
                    </div>

                </section>

                <section className="brief">
                    <h2 className="text-[#333] pt-[28px] pb-[19px] text-[24px]">A company with an expertise on any architectural, and <br />engineering needs</h2>

                    <div className="flex gap-[156px] pb-[48px]">
                        <div>
                            <p className="text-[#3E3C3C] pb-[29px]">Rabeya Construction, your trusted partner from real estate to global ventures, blending precision and excellence. Where dreams meet construction, we're your unwavering ally. Rabeya Construction, your trusted partner from real estate to global ventures, blending precision and excellence. Where dreams meet construction, we're your unwavering ally.</p>

                            <div>
                                <p className="pb-[16px] text-[#333] text-[16px]">Our working priciple</p>

                                <div className="flex gap-[8px] pb-[16px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_571_70)">
                                            <path d="M14 0.5L4.7 10.7273L2 8.68225H0.5L4.7 15.5L15.5 0.5H14Z" fill="#FF6C22" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_571_70">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="text-[#3E3C3C]">Experienced Team</p>
                                </div>
                                <div className="flex gap-[8px] pb-[16px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_571_70)">
                                            <path d="M14 0.5L4.7 10.7273L2 8.68225H0.5L4.7 15.5L15.5 0.5H14Z" fill="#FF6C22" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_571_70">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="text-[#3E3C3C]">Structured Work</p>
                                </div>
                                <div className="flex gap-[8px] pb-[16px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_571_70)">
                                            <path d="M14 0.5L4.7 10.7273L2 8.68225H0.5L4.7 15.5L15.5 0.5H14Z" fill="#FF6C22" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_571_70">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="text-[#3E3C3C]">100% Satisfaction</p>
                                </div>
                                <div className="flex gap-[8px] pb-[16px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_571_70)">
                                            <path d="M14 0.5L4.7 10.7273L2 8.68225H0.5L4.7 15.5L15.5 0.5H14Z" fill="#FF6C22" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_571_70">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="text-[#3E3C3C]">Sustainable planning</p>
                                </div>
                                <div className="flex gap-[8px] pb-[16px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_571_70)">
                                            <path d="M14 0.5L4.7 10.7273L2 8.68225H0.5L4.7 15.5L15.5 0.5H14Z" fill="#FF6C22" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_571_70">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="text-[#3E3C3C]">On time delivery</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#1D1D1D] pb-[16px]">Brief Information</p>
                            <p className="text-[#1D1D1D] pb-[16px]">Owner: Rabeya construction</p>
                            <div className="flex gap-3 ">
                                <p className="text-[#1D1D1D] pb-[16px]">Our client satisfaction:</p>
                                <div className="flex gap-3 items-center">
                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="91" height="16" viewBox="0 0 91 16" fill="none">
                                        <path d="M8.21555 -0.00205994L10.3886 5.08685L16.029 5.52729L11.7316 9.11285L13.0445 14.474L8.21555 11.6011L3.38657 14.474L4.69949 9.11285L0.402098 5.52729L6.04251 5.08685L8.21555 -0.00205994Z" fill="#FF6C22" />
                                        <path d="M26.6999 -0.00225067L28.873 5.08666L34.5134 5.5271L30.216 9.11266L31.5289 14.4738L26.6999 11.6009L21.8709 14.4738L23.1839 9.11266L18.8865 5.5271L24.5269 5.08666L26.6999 -0.00225067Z" fill="#FF6C22" />
                                        <path d="M45.1853 -0.00225067L47.3583 5.08666L52.9987 5.5271L48.7013 9.11266L50.0142 14.4738L45.1853 11.6009L40.3563 14.4738L41.6692 9.11266L37.3718 5.5271L43.0122 5.08666L45.1853 -0.00225067Z" fill="#FF6C22" />
                                        <path d="M63.6696 -0.00225067L65.8427 5.08666L71.4831 5.5271L67.1857 9.11266L68.4986 14.4738L63.6696 11.6009L58.8407 14.4738L60.1536 9.11266L55.8562 5.5271L61.4966 5.08666L63.6696 -0.00225067Z" fill="#FF6C22" />
                                        <path d="M82.156 -0.00225067L84.329 5.08666L89.9694 5.5271L85.672 9.11266L86.985 14.4738L82.156 11.6009L77.327 14.4738L78.6399 9.11266L74.3425 5.5271L79.9829 5.08666L82.156 -0.00225067Z" fill="#FF6C22" />
                                    </svg></p>
                                    <p>(4.9)</p>
                                </div>
                            </div>
                            <p className="text-[#1D1D1D] pb-[12px]">Our support: </p>
                            <div className="flex gap-[12px] pb-[12px]">
                                <button className="btn btn-outline text-[#3E3C3C] border-[#DFDFDF]  text-[14px] ">Construction</button>
                                <button className="btn btn-outline text-[#3E3C3C] border-[#DFDFDF]  text-[14px] ">Consultation</button>
                                <button className="btn btn-outline text-[#3E3C3C] border-[#DFDFDF]  text-[14px] ">Machinaries</button>
                            </div>
                            <button className="btn btn-outline text-[#3E3C3C] border-[#DFDFDF]  text-[14px] ">Labour</button>
                        </div>
                    </div>
                </section>

                <section className="achievements">
                    <div>
                        <h1 className="text-[#333] text-[20px] pb-[24px]">Our achievements</h1>
                        <div className="text-[#3E3C3C] text-[16px]">
                            <div className="flex  pb-[28px]">
                                <p className="">Types of work</p>
                                <p className="pl-[118px]">Describe</p>
                                <p className="pl-[838px]">Count</p>
                                
                            </div>
                            
                           
                            <div className="flex  pb-[24px]">
                                <p className="">Govt office</p>
                                <p className="pl-[138px]">Rabeya Construction, your trusted partner from real estate to global ventures, blending precision <br /> and excellence. Where dreams meet construction, we're your unwavering ally. Rabeya Construction,<br /> your trusted partner from real estate to global ventures, blending precision and excellence.</p>
                                <p className="pl-[153px]">306</p>

                            </div>
                            <hr className="pb-[18px]" />
                            <div className="flex  pb-[24px]">
                                <p className="">Business development</p>
                                <p className="pl-[54px]">Rabeya Construction, your trusted partner from real estate to global ventures, blending precision <br />and excellence. Where dreams meet construction, we're your unwavering ally. Rabeya Construction,<br /> your trusted partner from real estate to global ventures, blending precision and excellence.</p>
                                <p className="pl-[153px]">306</p>

                            </div>
                            <hr className="pb-[18px]" />
                            <div className="flex  pb-[24px]">
                                <p className="">Engineering structure</p>
                                <p className="pl-[64px]">Rabeya Construction, your trusted partner from real estate to global ventures, blending precision<br /> and excellence. Where dreams meet construction, we're your unwavering ally. Rabeya Construction,<br /> your trusted partner from real estate to global ventures, blending precision and excellence.</p>
                                <p className="pl-[153px]">306</p>

                            </div>
                            <hr className="pb-[82px]" />
                        </div>
                    </div>

                    <button className="btn btn-active btn-accent bg-[#2AD4A9] rounded-[10px] pt-[16px] pb-[17px] px-[25px] ml-[500px] mb-[160.49px]">
                        <div className="flex gap-[4px] items-center">
                            <p className="text-[15.493px]">Take our services</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M11.6505 16.2342L16.2339 11.6509C16.3173 11.5637 16.3827 11.4609 16.4264 11.3484C16.518 11.1252 16.518 10.8749 16.4264 10.6517C16.3827 10.5392 16.3173 10.4364 16.2339 10.3492L11.6505 5.76586C11.5651 5.68039 11.4636 5.61259 11.3519 5.56634C11.2402 5.52008 11.1206 5.49628 10.9997 5.49628C10.7556 5.49628 10.5215 5.59325 10.3489 5.76586C10.1762 5.93847 10.0793 6.17258 10.0793 6.41669C10.0793 6.6608 10.1762 6.89492 10.3489 7.06753L13.3739 10.0834L6.41635 10.0834C6.17324 10.0834 5.94008 10.1799 5.76817 10.3518C5.59626 10.5238 5.49969 10.7569 5.49969 11C5.49969 11.2431 5.59626 11.4763 5.76817 11.6482C5.94008 11.8201 6.17324 11.9167 6.41635 11.9167L13.3739 11.9167L10.3489 14.9325C10.2629 15.0177 10.1947 15.1191 10.1482 15.2308C10.1017 15.3425 10.0777 15.4624 10.0777 15.5834C10.0777 15.7044 10.1017 15.8242 10.1482 15.9359C10.1947 16.0476 10.2629 16.149 10.3489 16.2342C10.4341 16.3201 10.5355 16.3883 10.6472 16.4348C10.7589 16.4814 10.8787 16.5053 10.9997 16.5053C11.1207 16.5053 11.2405 16.4814 11.3522 16.4348C11.4639 16.3883 11.5653 16.3201 11.6505 16.2342Z" fill="#2B2B2B" />
                            </svg>
                        </div>
                    </button>
                  

                </section>
            </div>
        </article>
    );
};

export default ServicesPage;