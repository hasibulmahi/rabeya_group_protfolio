import { Link } from 'react-router-dom';
import './Banner.css'

import brain from "../../../assets/icons/brain.png"
import award from "../../../assets/icons/award1.png"
import home from "../../../assets/icons/home.png"

const Banner = () => {
    return (
        <div className=' max-w-[1800px] mx-auto'>
            <div className="banner_bg_Img lg:h-full h-[340px] lg:object-cover  ">
                {/* py-[150px]  bg-black bg-opacity-70  */}
                <div className="  text-white ">
                    {/* <svg className='ml-[810px]' xmlns="http://www.w3.org/2000/svg" width="234" height="26" viewBox="0 0 234 26" fill="none">
                        <path d="M2 23.5C16.5 17 58.1174 9.25664 86.5 5.50007C120.5 1.00001 190.5 -1.00003 231.5 11" stroke="#2AD4A9" stroke-width="4" stroke-linecap="round" />
                    </svg> */}
                    <h2 className='text-[25px] lg:text-[65px] text-center  lg:pt-[18%] pt-[18%] '>Crafting Your <span className='text-[#2AD4A9]'>Dreams</span> <br />
                        Into Structures</h2>


                    <div className='lg:flex lg:gap-[250px] lg:pt-[236px] '>
                        <div>
                            <button className="btn lg:mt-4 lg:pt-[18px] lg:pb-[38px]  lg:pl-[45px] lg:pr-[45px] bg-[#2AD4A9]
                               ml-[120px] text-[#2B2B2B] text-[15.493px] ">Our Services <span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                    <rect x="22" y="0.0849609" width="22.1248" height="22" rx="11" transform="rotate(90 22 0.0849609)" fill="#2AD4A9" />
                                    <path d="M11.6505 16.4111L16.2339 11.8018C16.3173 11.7141 16.3827 11.6108 16.4264 11.4976C16.518 11.2732 16.518 11.0214 16.4264 10.797C16.3827 10.6838 16.3173 10.5804 16.2339 10.4928L11.6505 5.88342C11.5651 5.79746 11.4636 5.72928 11.3519 5.68276C11.2402 5.63625 11.1206 5.6123 10.9997 5.6123C10.7556 5.6123 10.5215 5.70983 10.3489 5.88342C10.1762 6.05701 10.0793 6.29245 10.0793 6.53794C10.0793 6.78344 10.1762 7.01888 10.3489 7.19247L13.3739 10.2254L6.41635 10.2254C6.17324 10.2254 5.94008 10.3225 5.76817 10.4954C5.59626 10.6683 5.49969 10.9028 5.49969 11.1473C5.49969 11.3918 5.59626 11.6263 5.76817 11.7991C5.94008 11.972 6.17324 12.0691 6.41635 12.0691L13.3739 12.0691L10.3489 15.1021C10.2629 15.1878 10.1947 15.2898 10.1482 15.4021C10.1017 15.5144 10.0777 15.6349 10.0777 15.7566C10.0777 15.8783 10.1017 15.9988 10.1482 16.1111C10.1947 16.2235 10.2629 16.3254 10.3489 16.4111C10.4341 16.4975 10.5355 16.5661 10.6472 16.6129C10.7589 16.6597 10.8787 16.6838 10.9997 16.6838C11.1207 16.6838 11.2405 16.6597 11.3522 16.6129C11.4639 16.5661 11.5653 16.4975 11.6505 16.4111Z" fill="#2B2B2B" />
                                </svg></span></button>
                        </div>

                        <div className='lg:flex '>
                            <div className='lg:flex '>

                                <svg xmlns="http://www.w3.org/2000/svg" width="153" height="152" viewBox="0 0 153 152" fill="none">
                                    <g filter="url(#filter0_d_135_170)">
                                        <rect x="50.9365" y="20" width="52" height="52" rx="12" fill="#EDE7E7" />
                                    </g>
                                    <path d="M87.468 48.3453L85.5433 45.3855C85.4433 45.2085 85.3933 45.0061 85.3683 44.8037C85.0434 41.161 82.2188 38.2518 78.6193 37.8977C78.6943 38.6566 78.3943 39.4155 77.8194 39.9214L76.5446 41.0092L76.9446 42.6535C77.1195 43.3618 76.9446 44.0954 76.4946 44.6772C76.0447 45.2338 75.3698 45.5879 74.6449 45.5879C74.2199 45.5879 73.795 45.4867 73.4201 45.2591L71.9953 44.3737L70.5955 45.2591C70.5455 45.3097 70.4705 45.335 70.3955 45.3603C70.3955 45.4108 70.3955 45.4361 70.3955 45.4867C70.3955 47.9911 71.5703 50.4196 73.4201 52.0133C73.645 52.2157 73.77 52.4687 73.77 52.7722V57.6798C73.77 58.034 74.045 58.3123 74.3699 58.3376H80.844C81.2439 58.3628 81.5689 58.0593 81.5689 57.6798V54.5936C81.5689 54.3912 81.7439 54.2395 81.9188 54.2395H84.1685C84.8684 54.2395 85.4183 53.6576 85.4183 52.9746V49.8884C85.4183 49.7619 85.5183 49.6354 85.6683 49.6354H86.7681C87.443 49.6607 87.843 48.9018 87.468 48.3453Z" fill="#2AD4A9" />
                                    <path d="M72.4209 42.6485L74.3206 43.8122C74.8455 44.141 75.5204 43.6604 75.3704 43.0533L74.8455 40.8777C74.7955 40.6248 74.8705 40.3465 75.0705 40.1694L76.7702 38.7022C77.2451 38.2975 76.9952 37.5133 76.3703 37.4627L74.1456 37.2856C73.8956 37.2603 73.6457 37.1085 73.5457 36.8555L72.6958 34.7812C72.4459 34.1994 71.646 34.1994 71.396 34.7812L70.5461 36.8555C70.4462 37.1085 70.2212 37.2603 69.9462 37.2856L67.7216 37.4627C67.0967 37.488 66.8467 38.2722 67.3216 38.6769L69.0214 40.1441C69.2213 40.3212 69.2963 40.5995 69.2463 40.8524L68.7214 43.0533C68.5714 43.6604 69.2463 44.141 69.7713 43.8122L71.671 42.6485C71.9209 42.522 72.1959 42.522 72.4209 42.6485Z" fill="#2AD4A9" />
                                    <defs>
                                        <filter id="filter0_d_135_170" x="0.936523" y="0" width="152" height="152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={"0"} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect1_dropShadow_135_170" />
                                            <feOffset dy="30" />
                                            <feGaussianBlur stdDeviation="30" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_170" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_135_170" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <div className=' lg:mt-3'>
                                    <h2 className='lg:text-xl font-bold text-white lg:text-[24px]'>10+</h2>
                                    <p className='lg:text-[13px] text-[#EDE7E7]'>Years in the industry </p>
                                </div>

                            </div>
                            <div className='lg:flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="153" height="152" viewBox="0 0 153 152" fill="none">
                                    <g filter="url(#filter0_d_135_179)">
                                        <rect x="50.9365" y="20" width="52" height="52" rx="12" fill="#EDE7E7" />
                                    </g>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M71.1493 34.3448H83.3383C83.8431 34.3448 84.2759 34.7828 84.2759 35.2937V37.0455C88.7476 37.7754 88.3148 45.5854 83.771 45.6584C82.7613 47.8482 80.8139 49.162 78.7223 49.5999V53.4685H80.3091C80.5976 53.4685 80.8139 53.7604 80.8861 54.0524L81.6073 56.899C81.6794 57.191 81.3188 57.483 81.0303 57.483H73.5294C73.1688 57.483 72.8082 57.191 72.8803 56.899L73.6015 54.0524C73.7458 53.7604 73.89 53.4685 74.2507 53.4685H75.7653V49.5999C73.6737 49.162 71.7263 47.8482 70.7166 45.6584C66.1728 45.5854 65.74 37.7754 70.2117 37.0455V35.2937C70.2117 34.7828 70.6445 34.3448 71.1493 34.3448ZM77.5684 38.0674L78.2896 40.1841H80.5976C81.3909 40.1841 81.3909 40.4031 80.7418 40.841L78.9387 42.1549L79.6599 44.4176C79.8763 45.1475 79.6599 45.2205 79.083 44.7825L77.2799 43.4687L75.4046 44.7825C74.7555 45.2935 74.6834 45.1475 74.8998 44.4176L75.621 42.2278L73.7458 40.841C73.0967 40.4031 73.2409 40.1841 73.9622 40.2571H76.198L76.9192 37.9944C77.1356 37.2645 77.352 37.3374 77.5684 38.0674ZM84.2759 44.1986V38.4323C86.656 39.1622 86.656 43.4687 84.2759 44.1986ZM70.2117 44.1986V38.4323C67.8316 39.1622 67.8316 43.4687 70.2117 44.1986Z" fill="#2AD4A9" />
                                    <defs>
                                        <filter id="filter0_d_135_179" x="0.936523" y="0" width="152" height="152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect1_dropShadow_135_179" />
                                            <feOffset dy="30" />
                                            <feGaussianBlur stdDeviation="30" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_179" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_135_179" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <div className=' lg:mt-3'>
                                    <h2 className='lg:text-xl font-bold text-white lg:text-[24px]'>29</h2>
                                    <p className='lg:text-[13px] text-[#EDE7E7]'>Award won</p>
                                </div>

                            </div>
                            <div className='lg:flex '>
                                <svg className='' xmlns="http://www.w3.org/2000/svg" width="153" height="152" viewBox="0 0 153 152" fill="none">
                                    <g filter="url(#filter0_d_135_187)">
                                        <rect x="50.9365" y="20" width="52" height="52" rx="12" fill="#EDE7E7" />
                                    </g>
                                    <path d="M76.1518 51.8943L74.9307 51.8662C74.5422 51.8662 74.2092 51.6135 74.0704 51.2483C73.9316 50.8832 74.0427 50.4619 74.3202 50.2092L77.1787 47.5971V36.9805C77.1787 36.5311 76.8179 36.1379 76.3461 36.1379H65.2173C64.7733 36.1379 64.3848 36.5031 64.3848 36.9805V55.7141C64.3848 56.1634 64.7455 56.5567 65.2173 56.5567H69.0472V52.7369C69.0472 52.5684 69.186 52.3999 69.3802 52.3999H72.2665C72.433 52.3999 72.5995 52.5403 72.5995 52.7369V56.5286H76.3184C76.2351 56.332 76.2073 56.1354 76.2073 55.9388V51.8943H76.1518ZM66.6327 40.6037C66.6327 40.4632 66.7437 40.3509 66.8825 40.3509H69.4635C69.6022 40.3509 69.7133 40.4632 69.7133 40.6037V43.2157C69.7133 43.3561 69.6022 43.4685 69.4635 43.4685H66.8825C66.7437 43.4685 66.6327 43.3561 66.6327 43.2157V40.6037ZM69.7688 48.861C69.7688 49.0014 69.6577 49.1138 69.519 49.1138H66.938C66.7992 49.1138 66.6882 49.0014 66.6882 48.861V46.249C66.6882 46.1086 66.7992 45.9962 66.938 45.9962H69.519C69.6577 45.9962 69.7688 46.1086 69.7688 46.249V48.861ZM71.7947 40.5756C71.7947 40.4351 71.9057 40.3228 72.0445 40.3228H74.6532C74.792 40.3228 74.903 40.4351 74.903 40.5756V43.1876C74.903 43.328 74.792 43.4404 74.6532 43.4404H72.0722C71.9335 43.4404 71.8224 43.328 71.8224 43.1876V40.5756H71.7947ZM72.1 49.1138C71.9612 49.1138 71.8502 49.0014 71.8502 48.861V46.249C71.8502 46.1086 71.9612 45.9962 72.1 45.9962H74.681C74.8197 45.9962 74.9307 46.1086 74.9307 46.249V48.861C74.9307 49.0014 74.8197 49.1138 74.681 49.1138H72.1Z" fill="#2AD4A9" />
                                    <path d="M87.2743 49.0384V45.2468H85.2206V47.1285L82.5009 44.6008C82.4176 44.5165 82.3066 44.4884 82.1956 44.4884C82.0846 44.4884 81.9736 44.5165 81.8903 44.6008L74.9521 50.9202L77.0891 50.9764V55.9477C77.0891 56.2566 77.3389 56.5094 77.6442 56.5094H80.697V53.6727C80.697 53.3356 80.9745 53.0548 81.3075 53.0548H83.1392C83.4722 53.0548 83.7497 53.3356 83.7497 53.6727V56.5094H86.7748C87.0801 56.5094 87.3298 56.2566 87.3298 55.9477V51.0887L89.3558 50.9483L87.2743 49.0384ZM83.5 49.7687C83.5 50.0214 83.3057 50.218 83.0559 50.218H81.3908C81.141 50.218 80.9467 50.0214 80.9467 49.7687V49.3193C80.9467 49.0665 81.141 48.8699 81.3908 48.8699H83.0559C83.3057 48.8699 83.5 49.0665 83.5 49.3193V49.7687Z" fill="#2AD4A9" />
                                    <defs>
                                        <filter id="filter0_d_135_187" x="0.936523" y="0" width="152" height="152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={"0"} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="10" operator="erode" in="SourceAlpha" result="effect1_dropShadow_135_187" />
                                            <feOffset dy="30" />
                                            <feGaussianBlur stdDeviation="30" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_187" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_135_187" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <div className=' lg:mt-3'>
                                    <h2 className='lg:text-xl font-bold text-white lg:text-[24px]'>Bangladesh</h2>
                                    <p className='lg:text-[13px] text-[#EDE7E7]'>Origin</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Banner;