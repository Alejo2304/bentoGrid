import {Yellow100Container, Yellow500Container} from './Containers.jsx'
import {Purple100Container, PurpleContainer, PurpleContainerDescriptive} from './Containers.jsx'
import {WhiteContainerDescriptive, WhiteContainer} from './Containers.jsx'

import GrowFollowersImg from '../assets/images/illustration-grow-followers.webp'
import FiveStarsImg from '../assets/images/illustration-five-stars.webp'
import SocialMediaImg from '../assets/images/illustration-multiple-platforms.webp'


export default function BentoGrid(){
    return(
        <div className='bg-whitebg px-4 py-6 space-y-5'>
            <PurpleContainerDescriptive 
                startTitle="Social Media"
                emTitle="10x"
                italicTitle="Faster"
                endTitle="with AI"
                imgPath={FiveStarsImg}
                imgAlt="5 stars review"
                imgText="Over 4,000 5-stars reviews"
            />

            <WhiteContainer 
                text="Manage multiple accounts and platforms."
                imgPath={SocialMediaImg}
                imgAlt="Social media accounts image."
            />
            {/* 
            
            <Yellow500Container />
            <Purple100Container />
            <PurpleContainer
                text="Grow Followers with non-stop content" 
                imgPath={GrowFollowersImg}
                imgAlt="Grow Followers"
            />
            <WhiteContainerDescriptive />
            <Yellow100Container />
            <Yellow500Container />
            */}
        </div>

    );
}
/*


<WhiteContainerDescriptive />
<Yellow100Container />
<Yellow500Container />
*/