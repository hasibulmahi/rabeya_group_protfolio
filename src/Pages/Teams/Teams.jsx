import { useEffect, useState } from "react";
import TeamsCard from "./TeamsCard";

const Teams = () => {
  // Load Data

  const [teamDetails, setTeamDetails] = useState([]);
  useEffect(() => {
    fetch("TeamData.json")
      .then((res) => res.json())
      .then((data) => setTeamDetails(data));
  }, []);

  return (
    <div className=" max-w-screen-xl mx-auto">
      <div>
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g filter="url(#filter0_f_135_595)">
              <circle cx="11" cy="11" r="5" fill="#2AD4A9" />
            </g>
            <defs>
              <filter
                id="filter0_f_135_595"
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
                  result="effect1_foregroundBlur_135_595"
                />
              </filter>
            </defs>
          </svg>
          <h1 className="text-[#2AD4A9] text-[16px] pb-[12px]">
            Our expert team
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-6xl text-gray-500 font-bold pb-[66px]">
            We Are Building For You
          </h2>
          <div>
            <button className="btn btn-ghost text-[#2AD4A9] text-[20px] ">
              See all teams
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

      <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-4 lg:gap-[74px] pb-[49px] relative">
        {teamDetails.map((team,i) => (
          <div key={i}>
            <TeamsCard key={team._id} team={team}></TeamsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
