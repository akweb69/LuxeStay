
const HeadingTitle = ({ one, two }) => {
    return (
        <div className="w-11/12 mx-auto text-center py-10 md:py-14">
            <h1 className="text-3xl md:text-5xl font-bold font-font1 text-transparent bg-gradient-to-tr from-indigo-600 to-pink-600 w-fit mx-auto bg-clip-text pb-2">{one}</h1>
            <p className="text-gray-500 md:w-2/3 mx-auto text-center">{two}</p>
        </div>
    );
};

export default HeadingTitle;