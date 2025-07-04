export function Yellow500Container({ text, imgPath, imgAlt }) {
    return (
        <div>
            <h1>
                {text}
            </h1>
            <img src={imgPath} alt={imgAlt} />
        </div>
    );
}

export function Yellow100Container({ text, emText, imgPath, imgAlt }) {
    return (
        <div>
            <h1>
                {text} <em>{emText}</em>
            </h1>
            <img src={imgPath} alt={imgAlt} />
        </div>
    );
}

export function WhiteContainer({ text, imgPath, imgAlt }) {
    return (
        <div className="bg-white rounded-md shadow-lg px-5 py-2">
            <img className="drop-shadow-md rounded-[10lh]" src={imgPath} alt={imgAlt} />
            <h1 className="font-dmsans font-medium text-2xl">{text}</h1>
        </div>
    );
}

export function WhiteContainerDescriptive({ textTitle, textDescription, imgPath, imgAlt }) {
    return (
        <div>
            <h1>{textTitle}</h1>
            <p>{textDescription}</p>
            <img src={imgPath} alt={imgAlt} />
        </div>
    );
}

export function PurpleContainerDescriptive({ startTitle, emTitle, italicTitle, endTitle, imgPath, imgAlt, imgText }) {
    return (
        <div className="flex flex-col items-center bg-purple-500 p-4 rounded-md shadow-lg">
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
        <div className="bg-purple-500">
            <img src={imgPath} alt={imgAlt} />
            <h1 className="font-dmsans font-medium text-white">{text}</h1>
        </div>
    );
}

export function Purple100Container({ textTitle, textDescription, imgPath, imgAlt }) {
    return (
        <div>
            <h1>{textTitle}</h1>
            <img src={imgPath} alt={imgAlt} />
            <p>{textDescription}</p>
        </div>
    );
}