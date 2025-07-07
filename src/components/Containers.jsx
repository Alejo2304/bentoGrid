export function Yellow500Container1({ text, imgPath, imgAlt }) {
    return (
        <div className="flex flex-col bg-yellow-500 px-4 pt-4 rounded-lg h-65  overflow-hidden shadow-lg space-y-5 md:space-y-1 md:h-full md:w-full">
            <h1 className=" flex-1/2 font-dmsans font-medium text-xl md:text-2xl">
                {text}
            </h1>
            <img src={imgPath} alt={imgAlt} className="flex-1/2 w-2/3  md:h-[110%] md:w-auto" />
        </div>
    );
}

export function Yellow500Container2({ text, imgPath, imgAlt }) {
    return (
        <div className="flex flex-col md:items-center md:justify-center bg-yellow-500  rounded-lg shadow-lg p-5 space-y-2 md:h-full md:w-full">
            <h1 className="flex-none font-dmsans font-medium text-xl md:text-3xl">
                {text}
            </h1>
            <img src={imgPath} alt={imgAlt} className="flex-1/3 w-11/12 h-2/3"/>
        </div>
    );
}

export function Yellow100Container({ text, emText, imgPath, imgAlt }) {
    return (
        <div className="flex flex-col md:items-center md:justify-center bg-yellow-100 rounded-lg shadow-lg p-5 space-y-5 md:h-full  md:w-full">
            <h1 className="flex-2/3 font-dmsans font-medium text-2xl md:text-3xl">
                {text} <em className="italic text-purple-500">{emText}</em>
            </h1>
            <img className=" flex-1/3 w-[10rem]" src={imgPath} alt={imgAlt} />
        </div>
    );
}

export function WhiteContainer({ text, imgPath, imgAlt }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5 space-y-2  md:h-full md:w-full">
            <img className="drop-shadow-md rounded-[1lh] md:w-[20rem]" src={imgPath} alt={imgAlt} />
            <h1 className="font-dmsans font-medium text-xl lg:text-2xl  pr-4">{text}</h1>
        </div>
    );
}

export function WhiteContainerDescriptive({ textTitle, textDescription, imgPath, imgAlt }) {
    return (
        <div className="flex flex-col bg-white p-4 space-y-2 rounded-lg shadow-lg md:h-full md:w-full">
            <h1 className="flex-1/3 font-dmsans font-medium text-4xl">{textTitle}</h1>
            <p className="flex-1/3 font-dmsans font-medium text-lg">{textDescription}</p>
            <img className="flex-1/3 w-1/2 md:w-auto md:h-[3lh]"src={imgPath} alt={imgAlt} />
        </div>
    );
}

export function PurpleContainerDescriptive({ startTitle, emTitle, italicTitle, endTitle, imgPath, imgAlt, imgText }) {
    return (
        <div className="flex flex-col items-center justify-center bg-purple-500 p-6  rounded-lg shadow-lg md:h-full md:w-full">
            <div className="flex text-center">
                <h1 className="font-dmsans font-medium text-white text-5xl sm:text-5xl md:text-4xl lg:text-5xl">
                    <span className="block sm:inline">{startTitle} </span>
                    <span className="block sm:inline">
                        <em className="text-yellow-500 not-italic"> {emTitle}</em>
                        <em className="italic"> {italicTitle} </em>
                    </span>
                    <span className="block sm:inline">{endTitle}</span>
                </h1>
            </div>
            <div className="px-8 py-4">
                <img className="px-8 md:h-[1.5lh]" src={imgPath} alt={imgAlt} />
                <p className="font-dmsans font-normal text-white text-center text-xl">{imgText}</p>
            </div>
        </div>
    );
}

export function PurpleContainer({ text, imgPath, imgAlt }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-purple-500 rounded-lg shadow-lg p-5 space-y-4 space-x-3 md:h-full md:w-full">
            <img className="flex-1/2 md:flex-1/3 w-[15rem] md:h-[90%] md:w-auto"src={imgPath} alt={imgAlt} />
            <h1 className="flex-1/2 md:flex-2/3 font-dmsans font-medium text-3xl lg:text-4xl md:text-start text-white text-center">{text}</h1>
        </div>
    );
}

export function Purple100Container({ textTitle, textDescription, imgPath, imgAlt }) {
    return (
        <div className="flex flex-col items-center justify-center bg-purple-100 rounded-lg shadow-lg space-y-5 px-5 py-6 md:h-full md:w-full">
            <h1 className="font-dmsans font-medium text-center md:text-start text-xl lg:text-2xl">{textTitle}</h1>
            <img className='w-20rem' src={imgPath} alt={imgAlt} />
            <p className="font-dmsans font-normal text-md text-center md:text-start px-5 ">{textDescription}</p>
        </div>
    );
}
