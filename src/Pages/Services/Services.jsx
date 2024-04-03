import projectData from "../../../public/ProjectData";

const Services = () => {
  // const { services, setServices } = useState([]);

  // useEffect(() => {
  //     fetch('ServicesData.json')
  //         .then(res => res.json())
  //         .then(data => setServices(data))
  // },[])

  return (
    <div>
      <div className="mt-[113.7px] max-w-screen-xl mx-auto">
        <div>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g filter="url(#filter0_f_135_394)">
                <circle cx="11" cy="11" r="5" fill="#2AD4A9" />
              </g>
              <defs>
                <filter
                  id="filter0_f_135_394"
                  x="0"
                  y="0"
                  width="22"
                  height="22"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="3"
                    result="effect1_foregroundBlur_135_394"
                  />
                </filter>
              </defs>
            </svg>

            <h1 className="text-[#2AD4A9] text-[16px] pb-[12px]">
              Our Services
            </h1>
          </div>
          <div className="flex justify-between items-center pb-[93px]">
            <h2 className="text-[48px] text-gray-500 font-bold">
              Explore the Range of Services
            </h2>
            <div>
              <button className="btn btn-ghost text-[#2AD4A9] text-[20px] ">
                View all services
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M10.7815 8.66664L2.66683 8.66664L2.66683 7.3333L10.7815 7.3333L7.2055 3.7573L8.14816 2.81464L13.3335 7.99997L8.14816 13.1853L7.2055 12.2426L10.7815 8.66664Z"
                      fill="#2AD4A9"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {projectData.map((service) => (
            <div key={service._id} className=" ">
              <div className="p-[16.22px]  bg-[#F6F6F6] rounded-xl group hover:bg-[#2AD4A9] ">
                <h1 className="text-[40.54px] text-gray-400 pb-[8.11px]  font-bold">
                  {service._id}
                </h1>
                <h2 className="text-[24.324px] text-black group-hover:text-[#2F3E46]  ">
                  {service.name}
                </h2>
                <hr className=" w-[27.365px] h-[2.027px] border-[#2AD4A9] pb-[13.66px] group-hover:border-[#000]" />
                <p className="text-[#2B2B2B] text-[14.189px] pb-[20.27px]">
                  {service.description}
                </p>

                <div>
                  <button className="btn btn-ghost text-black text-[16.216px] ml-[232px]">
                    Read more{" "}
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
                          fill="base"
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
          ))}
        </div>

        {/* <div className="grid lg:grid-cols-3 lg:gap-6">
                    {
                        services.map(service => <ServiceCard  service={service}></ServiceCard>)
                    }
                </div> */}
      </div>

      {/* BORDER IMAGE */}
      <div className="lg:flex justify-between max-w-[1800px]   mx-auto  hidden ">
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
    </div>
  );
};
export default Services;
