export function Yellow500Container({ text, imgPath, imgAlt }) {
    return (
        <div className="bg-yellow-500 px-4 pt-4 rounded-lg h-62 overflow-hidden shadow-lg">
            <h1 className="font-dmsans font-medium text-3xl">
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
        <div className="bg-white rounded-lg shadow-lg px-5 py-2">
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
                    <span className="block">{startTitle} </span>
                    <span className="block">
                        <em className="text-yellow-500 not-italic"> {emTitle}</em>
                        <em className="italic"> {italicTitle} </em>
                    </span>
                    <span className="block">{endTitle}</span>
                </h1>
            </div>
            <div className="px-8 py-4">
                <img className="px-8" src={imgPath} alt={imgAlt} />
                <p className="font-dmsans font-normal text-white text-center">{imgText}</p>
            </div>
        </div>
    );
}

export function PurpleContainer({ text, imgPath, imgAlt }) {
    return (
        <div className="flex flex-col items-center justify-center bg-purple-500 rounded-lg shadow-lg p-5 space-y-8">
            <img className="w-2/3 "src={imgPath} alt={imgAlt} />
            <h1 className="w-2/3 font-dmsans font-medium text-3xl text-white text-center">{text}</h1>
        </div>
    );
}

export function Purple100Container({ textTitle, textDescription, imgPath, imgAlt }) {
    return (
        <div className="flex flex-col items-center justify-center bg-purple-100 rounded-lg shadow-lg space-y-3 p-5">
            <h1 className="font-dmsans font-medium text-center text-3xl">{textTitle}</h1>
            <img src={imgPath} alt={imgAlt} />
            <p className="font-dmsans font-normal text-xl text-center px-5 ">{textDescription}</p>
        </div>
    );
}