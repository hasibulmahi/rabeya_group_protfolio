import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.png"

const Navbar = () => {
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/servicesPage'>Services</Link></li>
        <li><Link to='/ourProjectsPage'>Our Project</Link></li>
        <li><Link to='/ourTeamsPage '>Our Team</Link></li>
        <li><Link to='/contactUsPage'>Contact Us</Link></li>

    </>
    return (

        // lg:w-[87%] w-full lg:max-w-[1440px] mx-auto
        // <div className="mx-auto ">
        //     {/* //max-w-screen-xl ml-[95px] */}
        //     {/* w-[90%] max-w-[1440px] mx-auto */}
        //     {/*  lg:w-[87%] w-[68%] */}



        //     {/* w-[87%] max-w-[1440px] mx-auto  */}




        // </div>
        <div className="fixed lg:w-max-[1440px] lg:mx-auto z-50  lg:w-full ">
            {/* Navar top */}
            <div className="flex items-center  lg:w-[1280px] mx-auto justify-between      bg-black bg-opacity-30 text-white z-50 ">

                {/* Mobile Device */}
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn bg-[#32323280]  border-0">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="47" height="23" viewBox="0 0 47 23" fill="none">
                            <path d="M5.2666 5.46248C5.2666 5.23373 5.44834 5.01435 5.77184 4.8526C6.09534 4.69085 6.5341 4.59998 6.9916 4.59998H40.3416C40.7991 4.59998 41.2379 4.69085 41.5614 4.8526C41.8849 5.01435 42.0666 5.23373 42.0666 5.46248C42.0666 5.69122 41.8849 5.91061 41.5614 6.07236C41.2379 6.23411 40.7991 6.32498 40.3416 6.32498H6.9916C6.5341 6.32498 6.09534 6.23411 5.77184 6.07236C5.44834 5.91061 5.2666 5.69122 5.2666 5.46248ZM5.2666 11.2125C5.2666 10.9837 5.44834 10.7643 5.77184 10.6026C6.09534 10.4408 6.5341 10.35 6.9916 10.35H40.3416C40.7991 10.35 41.2379 10.4408 41.5614 10.6026C41.8849 10.7643 42.0666 10.9837 42.0666 11.2125C42.0666 11.4412 41.8849 11.6606 41.5614 11.8224C41.2379 11.9841 40.7991 12.075 40.3416 12.075H6.9916C6.5341 12.075 6.09534 11.9841 5.77184 11.8224C5.44834 11.6606 5.2666 11.4412 5.2666 11.2125ZM6.9916 16.1C6.5341 16.1 6.09534 16.1908 5.77184 16.3526C5.44834 16.5143 5.2666 16.7337 5.2666 16.9625C5.2666 17.1912 5.44834 17.4106 5.77184 17.5724C6.09534 17.7341 6.5341 17.825 6.9916 17.825H40.3416C40.7991 17.825 41.2379 17.7341 41.5614 17.5724C41.8849 17.4106 42.0666 17.1912 42.0666 16.9625C42.0666 16.7337 41.8849 16.5143 41.5614 16.3526C41.2379 16.1908 40.7991 16.1 40.3416 16.1H6.9916Z" fill="white" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-16 z-[1] p-2 shadow bg-white rounded-box text-black w-52 ">
                        {navLinks}
                    </ul>
                </div>


                <div className=" ">
                    <a className="">
                        <img className="lg:h-[81px] h-[39px]" src={logo} alt="" />
                    </a>
                </div>

                <div className="border border-red-600 btn bg-[#32323280] lg:border-0">
                    <button className="text-white lg:text-[14px] text-[12px]">Contact Us</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path d="M10.505 14.0204L14.4633 10.062C14.5354 9.98674 14.5919 9.89795 14.6296 9.80078C14.7088 9.60804 14.7088 9.39185 14.6296 9.19911C14.5919 9.10193 14.5354 9.01315 14.4633 8.93786L10.505 4.97953C10.4312 4.90571 10.3436 4.84716 10.2471 4.80721C10.1507 4.76726 10.0473 4.7467 9.94291 4.7467C9.73209 4.7467 9.5299 4.83045 9.38083 4.97953C9.23175 5.1286 9.14801 5.33079 9.14801 5.54161C9.14801 5.75243 9.23175 5.95462 9.38083 6.10369L11.9933 8.70828L5.98458 8.70828C5.77462 8.70828 5.57325 8.79168 5.42478 8.94015C5.27632 9.08862 5.19291 9.28998 5.19291 9.49994C5.19291 9.70991 5.27632 9.91127 5.42478 10.0597C5.57325 10.2082 5.77462 10.2916 5.98458 10.2916L11.9933 10.2916L9.38083 12.8962C9.30663 12.9698 9.24773 13.0573 9.20754 13.1538C9.16735 13.2503 9.14665 13.3538 9.14665 13.4583C9.14665 13.5628 9.16735 13.6663 9.20754 13.7627C9.24773 13.8592 9.30663 13.9468 9.38083 14.0204C9.45442 14.0946 9.54198 14.1535 9.63845 14.1936C9.73493 14.2338 9.8384 14.2545 9.94291 14.2545C10.0474 14.2545 10.1509 14.2338 10.2474 14.1936C10.3438 14.1535 10.4314 14.0946 10.505 14.0204Z" fill="white" />
                    </svg>
                </div>

            </div>

            {/* Navar bottom */}
            <div className=" text-white  lg:top-[85px] lg:z-50 lg:w-[1280px]  w-[420px] mx-auto ">
                <ul className="menu menu-horizontal  text-[16px]  lg:w-full   justify-center bg-black bg-opacity-30  rounded-b-lg">
                    {navLinks}
                </ul>
            </div>

        </div>


    );
};

export default Navbar;