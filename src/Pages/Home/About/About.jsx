import about1 from "../../../assets/AboutImg/about1.png";
import about2 from "../../../assets/AboutImg/about2.png";

const About = () => {
  return (
    <div>
      <div className="z-10 border border-red-600">
        <div className="lg:flex justify-between max-w-[1800px]  border border-red-600 mx-auto  hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="131"
            height="106"
            viewBox="0 0 131 106"
            fill="none"
          >
            <g opacity="0.2">
              <rect width="64" height="64" fill="#286B5A" fillOpacity="0.54" />
              <rect
                x="106"
                y="39"
                width="25"
                height="25"
                fill="#286B5A"
                fillOpacity="0.54"
              />
              <rect
                x="64"
                y="64"
                width="42"
                height="42"
                fill="#286B5A"
                fillOpacity="0.54"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            height="106"
            viewBox="0 0 125 106"
            fill="none"
          >
            <g opacity="0.2">
              <rect
                width="64"
                height="64"
                transform="matrix(-1 0 0 1 131 0)"
                fill="#286B5A"
                fillOpacity="0.54"
              />
              <rect
                width="25"
                height="25"
                transform="matrix(-1 0 0 1 25 39)"
                fill="#286B5A"
                fillOpacity="0.54"
              />
              <rect
                width="42"
                height="42"
                transform="matrix(-1 0 0 1 67 64)"
                fill="#286B5A"
                fillOpacity="0.54"
              />
            </g>
          </svg>
        </div>

        <div className=" lg:w-max-[1440px] w-[1280px] lg:mx-auto lg:mt-[60px] border-4 border-orange-600">
          <div className="lg:hero-content lg:flex ">
            <div className="lg:w-1/2 relative  rounded-lg ">
              <div className="lg:w-[440px] w-[281.666px] ml-12 lg:ml-8 bg-[#2AD4A9] lg:h-[500px] h-[283.456px] rounded-xl">
                <img
                  src={about1}
                  className="lg:w-[370.553px] w-[203.504px] lg:h-[370.492px] h-[204.6px] lg:ml-[-50px] ml-[-25] absolute lg:top-[-40px] top-[-20px] "
                />
                <img
                  src={about2}
                  className="lg:w-[370.553px] 
                                w-[203.504px] lg:h-[370.492px] h-[204.6px] absolute lg:right-[80px] right-[900px] lg:top-[180px] top-[80px]"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g filter="url(#filter0_f_135_400)">
                    <circle cx="11" cy="11" r="5" fill="#00AA7F" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_135_400"
                      x="0"
                      y="0"
                      width="22"
                      height="22"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={"0"} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="3"
                        result="effect1_foregroundBlur_135_400"
                      />
                    </filter>
                  </defs>
                </svg>
                <h1 className="text-[#2AD4A9] text-[16px] pb-[12px]">
                  About Our Company
                </h1>
              </div>
              <h1 className="text-[48px] font-bold text-[#2B2B2B] pb-[20px]">
                Crafting Your Dreams & Your Construction <br /> Partner
              </h1>
              <p className=" pb-[36px] text-[#3E3C3C]">
                Rabeya Construction, your trusted partner from real estate to
                global ventures, blending precision and excellence. Where dreams
                meet construction, we're your unwavering ally.
              </p>
              <p className="pb-[43px] text-[#2AD4A9]">
                ----------------------------------------------------------------------------------
              </p>
              <div className="flex text-center justify-center gap-[70px]  pb-[45px]">
                <div className="">
                  <h2 className="text-[32px] text-center font-bold pb-[8px]">
                    2003
                  </h2>
                  <p className="text-[16px] text-[#3E3C3C]">Year established</p>
                </div>

                <div className="">
                  <h2 className="text-[32px] text-center font-bold pb-[8px]">
                    1200+
                  </h2>
                  <p className="text-[16px] text-[#3E3C3C]">
                    Dedicated Team Members
                  </p>
                </div>
                <div className="">
                  <h2 className="text-[32px] text-center font-bold pb-[8px]">
                    603+
                  </h2>
                  <p className="text-[16px] text-[#3E3C3C]">
                    Contractor appoined
                  </p>
                </div>
              </div>

              <div>
                <button className="btn bg-[#2AD4A9] text-[#2B2B2B] text-[15.493px]">
                  Explore more{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                    >
                      <rect
                        x="22"
                        y="0.0849609"
                        width="22.1248"
                        height="22"
                        rx="11"
                        transform="rotate(90 22 0.0849609)"
                        fill="#2AD4A9"
                      />
                      <path
                        d="M11.6505 16.4111L16.2339 11.8018C16.3173 11.7141 16.3827 11.6108 16.4264 11.4976C16.518 11.2732 16.518 11.0214 16.4264 10.797C16.3827 10.6838 16.3173 10.5804 16.2339 10.4928L11.6505 5.88342C11.5651 5.79746 11.4636 5.72928 11.3519 5.68276C11.2402 5.63625 11.1206 5.6123 10.9997 5.6123C10.7556 5.6123 10.5215 5.70983 10.3489 5.88342C10.1762 6.05701 10.0793 6.29245 10.0793 6.53794C10.0793 6.78344 10.1762 7.01888 10.3489 7.19247L13.3739 10.2254L6.41635 10.2254C6.17324 10.2254 5.94008 10.3225 5.76817 10.4954C5.59626 10.6683 5.49969 10.9028 5.49969 11.1473C5.49969 11.3918 5.59626 11.6263 5.76817 11.7991C5.94008 11.972 6.17324 12.0691 6.41635 12.0691L13.3739 12.0691L10.3489 15.1021C10.2629 15.1878 10.1947 15.2898 10.1482 15.4021C10.1017 15.5144 10.0777 15.6349 10.0777 15.7566C10.0777 15.8783 10.1017 15.9988 10.1482 16.1111C10.1947 16.2235 10.2629 16.3254 10.3489 16.4111C10.4341 16.4975 10.5355 16.5661 10.6472 16.6129C10.7589 16.6597 10.8787 16.6838 10.9997 16.6838C11.1207 16.6838 11.2405 16.6597 11.3522 16.6129C11.4639 16.5661 11.5653 16.4975 11.6505 16.4111Z"
                        fill="#2B2B2B"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
