
import t1 from "../../assets/EmployeeImg/t1.jpeg"
const TeamsCard = ({ team }) => {
    
    const { _id, name, position, description, role } = team;
    
    return (
        <div>
            <div className="card  bg-[#2AD4A9] shadow-xl">
                <figure className="">
                    <img src={t1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{role}</p>
                </div>
            </div>
             
        </div>
    );
};

export default TeamsCard;