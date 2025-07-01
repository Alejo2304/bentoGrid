import {Yellow100Container, Yellow500Container} from './Containers'
import {Purple100Container, PurpleContainer, PurpleContainerDescriptive} from './Containers'
import {WhiteContainerDescriptive, WhiteContainer} from './Containers'

export default function BentoGrid(){
    return(
        <div>
            <PurpleContainerDescriptive />
            <WhiteContainer />
            <Yellow500Container />
            <Purple100Container />
            <PurpleContainer />
            <WhiteContainerDescriptive />
            <Yellow100Container />
            <Yellow500Container />
        </div>
    )
}