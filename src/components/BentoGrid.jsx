import {Yellow100Container, Yellow500Container1, Yellow500Container2} from './Containers.jsx'
import {Purple100Container, PurpleContainer, PurpleContainerDescriptive} from './Containers.jsx'
import {WhiteContainerDescriptive, WhiteContainer} from './Containers.jsx'

import GrowFollowersImg from '../assets/images/illustration-grow-followers.webp'
import FiveStarsImg from '../assets/images/illustration-five-stars.webp'
import SocialMediaImg from '../assets/images/illustration-multiple-platforms.webp'
import CalendarImg from '../assets/images/illustration-consistent-schedule.webp'
import SchedulePostImg from '../assets/images/illustration-schedule-posts.webp'
import AudienceGrowthImg from '../assets/images/illustration-audience-growth.webp'
import CreatePostImg from '../assets/images/illustration-create-post.webp'
import AiContentImg from '../assets/images/illustration-ai-content.webp'

export default function BentoGrid(){
    return(
        <div className='px-4 py-6 space-y-6 md:grid md:grid-cols-4 md:grid-rows-6 md:gap-5 md:space-y-0 md:w-[60rem] md:h-screen lg:h-[95vh] xl:h-[85vh] 2xl:h-[80vh]'>
            <div className='md:col-start-2 md:row-start-1 md:row-span-2 md:col-span-2'>
                <PurpleContainerDescriptive 
                    startTitle="Social Media"
                    emTitle="10x"
                    italicTitle="Faster"
                    endTitle="with AI"
                    imgPath={FiveStarsImg}
                    imgAlt="5 stars review"
                    imgText="Over 4,000 5-stars reviews"
                />
            </div>
            <div className='md:col-start-2 md:row-start-3 md:row-span-2 md:col-span-1'>
                <WhiteContainer 
                    text="Manage multiple accounts and platforms."
                    imgPath={SocialMediaImg}
                    imgAlt="Social media accounts image."
                />
            </div>
            <div className='md:col-start-3 md:row-start-3 md:row-span-2 md:col-span-1'>
                <Yellow500Container1 
                    text="Maintain a consistent posting schedule."
                    imgPath={CalendarImg}
                    imgAlt="Calendar with schedule."
                />
            </div>
            <div className='md:col-start-4 md:row-start-1 md:row-span-4 md:col-span-1'>
                <Purple100Container 
                    textTitle="Schedule to social media."
                    textDescription="Optimize post timings to publish content at the pefect time for your audience."
                    imgPath={SchedulePostImg}
                    imgAlt="Schedule of best time to post"
                />
            </div>
            <div className='md:col-start-3 md:row-start-5 md:row-span-2 md:col-span-2'>
                <PurpleContainer
                    text="Grow Followers with non-stop content." 
                    imgPath={GrowFollowersImg}
                    imgAlt="Grow Followers"
                />
            </div>
            <div className='md:col-start-2 md:row-start-5 md:row-span-2 md:col-span-1'>
                <WhiteContainerDescriptive
                    textTitle=">56%"
                    textDescription="faster audience growth"
                    imgPath={AudienceGrowthImg}
                    imgAlt="Audience icons"
                />
            </div>
            <div className='md:col-start-1 md:row-start-1 md:row-span-3 md:col-span-1'>
                <Yellow100Container 
                    text="Create and schedule content"
                    emText="quicker."
                    imgPath={CreatePostImg}
                    imgAlt="Create post button image"
                />
            </div>
            <div className='md:col-start-1 md:row-start-4 md:row-span-3 md:col-span-1'>
                <Yellow500Container2
                    text="Write your content using AI."
                    imgPath={AiContentImg}
                    imgAlt="AI interaction chat."
                />
            </div>
        </div>
    );
}