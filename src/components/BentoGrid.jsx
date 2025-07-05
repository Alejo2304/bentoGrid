import {Yellow100Container, Yellow500Container} from './Containers.jsx'
import {Purple100Container, PurpleContainer, PurpleContainerDescriptive} from './Containers.jsx'
import {WhiteContainerDescriptive, WhiteContainer} from './Containers.jsx'

import GrowFollowersImg from '../assets/images/illustration-grow-followers.webp'
import FiveStarsImg from '../assets/images/illustration-five-stars.webp'
import SocialMediaImg from '../assets/images/illustration-multiple-platforms.webp'
import CalendarImg from '../assets/images/illustration-consistent-schedule.webp'
import SchedulePostImg from '../assets/images/illustration-schedule-posts.webp'

export default function BentoGrid(){
    return(
        <div className='bg-whitebg px-4 py-6 space-y-6'>
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

            <Yellow500Container 
                text="Maintain a consistent posting schedule."
                imgPath={CalendarImg}
                img alt="Calendar with schedule."
            />

            <Purple100Container 
                textTitle="Schedule to social media."
                textDescription="Optimize post timings to publish content at the pefect time for your audience."
                imgPath={SchedulePostImg}
                imgAlt="Schedule of best time to post"
            />

            {/* 
            
            
            
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