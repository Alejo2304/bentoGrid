export function Yellow500Container(text, imgPath, imgAlt){
    return(
        <div>
            <h1>
                {text}
            </h1>
            <img src={imgPath} alt={imgAlt} />
        </div>
    )
}

export function Yellow100Container(text, emText,imgPath, imgAlt){
    return(
        <div>
            <h1>
                {text} <em>{emText}</em>
            </h1>
            <img src={imgPath} alt={imgAlt} />
        </div>
    )
}

export function WhiteContainer(text, imgPath, imgAlt){
    return(
        <div>
            <img src={imgPath} alt={imgAlt}></img>
            <h1>{text}</h1>
        </div>
    )
}

export function WhiteContainerDescriptive({textTitle}, {textDescription}, imgPath, imgAlt){
    return(
        <div>
            <h1>{textTitle}</h1>
            <p>{textDescription}</p>
            <img src={imgPath} alt={imgAlt} />
        </div>
    )
}

export function PurpleContainerDescriptive(titleBeforeEm, emTitle, titleAfterEm,imgPath, imgAlt, imgText){
    return(
        <div>
            <h1>
                {titleBeforeEm} <em>{emTitle}</em> {titleAfterEm}
            </h1>
            <div>
                <img src={imgPath} alt={imgAlt} />
                <p>{imgText}</p>
            </div>
            
        </div>
    )
}

export function PurpleContainer(text, imgPath, imgAlt){
    return(
        <div>
            <img src={imgPath} alt={imgAlt} />
            <h1>{text}</h1>
        </div>
    )
}

export function Purple100Container(textTitle, textDescription, imgPath, imgAlt ){
    return(
        <div>
            <h1>{textTitle}</h1>
            <img src={imgPath} alt={imgAlt}/>
            <p>{textDescription}</p>
        </div>
    )
    
}