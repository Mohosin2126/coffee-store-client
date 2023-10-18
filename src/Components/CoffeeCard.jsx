import { Link } from "react-router-dom";


const CoffeeCard = ({coffee}) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src=""alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
            
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`updateCoffee/id`}>
                        <button className="btn">Edit</button>
                        </Link>
                        <button
                            
                            className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;