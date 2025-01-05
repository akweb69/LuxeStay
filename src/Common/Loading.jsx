import animation from "../assets/Backgrounds/loading.gif"

const Loading = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <img src={animation} className="max-w-[500px]" alt="" />
        </div>
    );
};

export default Loading;