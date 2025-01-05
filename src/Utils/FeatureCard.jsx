import { Link } from "react-router-dom";
import ReactRating from "react-rating";
import { FaStar } from "react-icons/fa";

const FeatureCard = ({ r }) => {
    const { _id, name, images, category, room_type, availability, description, price, rating, reviews } = r;

    return (
        <div className="border border-indigo-200 rounded-lg hover:shadow-md  h-full flex flex-col">
            <div className="flex flex-col h-full">
                <div className="h-[220px] md:h-[250px]">
                    <img className="w-full h-full object-cover rounded-md" src={images.img_1} alt={name} />
                </div>
                <div className="p-4 flex-grow">
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <p className="text-sm text-gray-500">{category} | {room_type}</p>
                    <p className="mt-2 text-gray-700">{description.slice(0, 100)}...</p>
                    <div className="flex items-center mt-3">
                        <ReactRating
                            emptySymbol={<FaStar className="text-gray-400" />}
                            fullSymbol={<FaStar className="text-yellow-500" />}
                            initialRating={rating}
                            readonly
                        />
                        <span className="ml-2 text-sm text-gray-500">({reviews} reviews)</span>
                    </div>
                    <p className="text-lg font-semibold text-green-600">{price} BDT</p>
                    <div className="flex justify-between items-center mt-4">
                        <div className="">
                            {
                                availability === "Unavailable" && <p className="text-sm text-red-500 flex justify-center items-center p-1 px-3 rounded-full bg-red-100 w-fit">{availability === "Unavailable" && availability}</p>
                            }
                            {
                                availability === "Available" && <p className="text-sm text-green-500 p-1 px-3 rounded-full bg-green-100 w-fit">{availability === "Available" && availability}</p>
                            }
                        </div>
                        <div className="btn btn-outline btn-sm">
                            <Link to={`/room/${_id}`}>Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
