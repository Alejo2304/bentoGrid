export function Yellow500Container1({ text, imgPath, imgAlt }) {
    return (
        <div className="bg-yellow-500 px-4 pt-4 rounded-lg h-65 overflow-hidden shadow-lg space-y-5">
            <h1 className="font-dmsans font-medium text-3xl">
                {text}
            </h1>
            <img src={imgPath} alt={imgAlt} className="w-2/3" />
        </div>
    );
}

export function Yellow500Container2({ text, imgPath, imgAlt }) {
    return (
        <div className="bg-yellow-500 p-5 rounded-lg shadow-lg space-y-5">
            <h1 className="font-dmsans font-medium text-4xl">
                {text}
            </h1>
            <img src={imgPath} alt={imgAlt} className="w-2/3" />
        </div>
    );
}

export function Yellow100Container({ text, emText, imgPath, imgAlt }) {
    return (
        <div className="bg-yellow-100 rounded-lg shadow-lg p-5 space-y-5">
            <h1 className="font-dmsans font-medium text-4xl">
                {text} <em className="italic text-purple-500">{emText}</em>
            </h1>
            <img className="w-2/3" src={imgPath} alt={imgAlt} />
        </div>
    );
}

export function WhiteContainer({ text, imgPath, imgAlt }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5">
            <img className="drop-shadow-md rounded-[1lh]" src={imgPath} alt={imgAlt} />
            <h1 className="font-dmsans font-medium text-2xl pr-4">{text}</h1>
        </div>
    );
}

export function WhiteContainerDescriptive({ textTitle, textDescription, imgPath, imgAlt }) {
    return (
        <div className="bg-white p-6 space-y-3 rounded-lg shadow-lg">
            <h1 className="font-dmsans font-medium text-6xl">{textTitle}</h1>
            <p className="font-dmsans font-medium text-xl">{textDescription}</p>
            <img className="w-1/2"src={imgPath} alt={imgAlt} />
        </div>
    );
}

export function PurpleContainerDescriptive({ startTitle, emTitle, italicTitle, endTitle, imgPath, imgAlt, imgText }) {
    return (
        <div className="flex flex-col items-center bg-purple-500 p-4 rounded-lg shadow-lg">
            <div className="flex text-center">
                <h1 className="font-dmsans font-medium text-white text-5xl">
                    <span className="block md:inline">{startTitle} </span>
                    <span className="block md:inline">
                        <em className="text-yellow-500 not-italic"> {emTitle}</em>
                        <em className="italic"> {italicTitle} </em>
                    </span>
                    <span className="block md:inline">{endTitle}</span>
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
        <div className="flex flex-col md:flex-row md:h-auto items-center justify-center bg-purple-500 rounded-lg shadow-lg p-5 space-y-8">
            <img className="flex-1/2 "src={imgPath} alt={imgAlt} />
            <h1 className="flex-1/2 font-dmsans font-medium text-3xl text-white text-center">{text}</h1>
        </div>
    );
}

export function Purple100Container({ textTitle, textDescription, imgPath, imgAlt }) {
    return (
        <div className="flex flex-col items-center justify-center bg-purple-100 rounded-lg shadow-lg space-y-5 px-5 py-6">
            <h1 className="font-dmsans font-medium text-center text-3xl">{textTitle}</h1>
            <img src={imgPath} alt={imgAlt} />
            <p className="font-dmsans font-normal text-xl text-center px-5 ">{textDescription}</p>
        </div>
    );
}