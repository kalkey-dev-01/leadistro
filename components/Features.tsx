import * as React from 'react';


import { StyledCanvas } from './misc/Canvas';
import { Card } from './misc/Card';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { FBackground, FContent, Feature, FeaturesBackground, FeaturesContainer, FeaturesLeft, FeaturesRight, TitleWrapper } from './FeaturesContainer';

gsap.registerPlugin(ScrollTrigger)



interface FeatureProps {

}

export const Features: React.FC<FeatureProps> = ({ }) => {
    // const ref = React.useRef<HTMLDivElement>(null)
    // React.useEffect(() => {
    //     const el = ref.current
    //     gsap.fromTo(el, { translateX: -1000, }, {
    //         translateX: 0, duration: 1, scrollTrigger: {
    //             trigger: el,
    //         }
    //     })
    // }, [])




    return (
        <TitleWrapper numOfPages={5}>
            <FBackground>
                <FeaturesBackground />
            </FBackground>
            {/* Feature Section - 1 */}
            <FContent>
                <Feature page={0} renderContent={
                    ({ progress }) =>
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <h1 className="text-3xl px-10 pb-5 text-center md:text-start md:text-6xl font-bold text-white font-['Comfortaa']">
                                    Personalized email campaigns
                                </h1>
                                <h3 className="text-xl px-10 text-center md:text-start md:text-4xl font-light  tracking-wide text-white font-['Poppins']">
                                    Create targeted and personalized email campaigns for your cold leads, using
                                    our advanced segmentation and personalization tools.
                                </h3>
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <div className="text-5xl md:text-7xl text-center text-black  font-semibold"> Image or Lottie </div>
                            </FeaturesRight>
                        </FeaturesContainer>
                }></Feature>
            </FContent>
            {/* Feature Section - 2 */}
            <FContent>
                <Feature page={1} renderContent={
                    ({ progress }) =>
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <h1 className="text-3xl px-10 pb-5 text-center md:text-start md:text-6xl font-bold text-white font-['Comfortaa']">
                                    Advanced lead scoring
                                </h1>
                                <h3 className="text-xl px-10 text-center md:text-start md:text-4xl font-light  tracking-wide text-white font-['Poppins']">
                                    Automatically score your leads based on their behavior and engagement, to prioritize your outreach and increase conversions.
                                </h3>
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <div className="text-5xl md:text-7xl text-center text-black  font-semibold"> Image or Lottie </div>
                            </FeaturesRight>
                        </FeaturesContainer>
                }></Feature>
            </FContent>
            {/* Feature Section - 3 */}
            <FContent>
                <Feature page={2} renderContent={
                    ({ progress }) =>
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <h1 className="text-3xl px-10 pb-5 text-center md:text-start md:text-6xl font-bold text-white font-['Comfortaa']">
                                    Email automation
                                </h1>
                                <h3 className="text-xl px-10 text-center md:text-start md:text-4xl font-light  tracking-wide text-white font-['Poppins']">
                                    Automate your email campaigns to reach your cold leads at the right time, with the right message.
                                </h3>
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <div className="text-5xl md:text-7xl text-center text-black  font-semibold"> Image or Lottie </div>
                            </FeaturesRight>
                        </FeaturesContainer>
                }></Feature>
            </FContent>
            {/* Feature Section - 4 */}
            <FContent>
                <Feature page={3} renderContent={
                    ({ progress }) =>
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <h1 className="text-3xl px-10 pb-5 text-center md:text-start md:text-6xl font-bold text-white font-['Comfortaa']">
                                    Comprehensive reporting
                                </h1>
                                <h3 className="text-xl px-10 text-center md:text-start md:text-4xl font-light  tracking-wide text-white font-['Poppins']">
                                    Track the success of your email campaigns with comprehensive reporting, including open rates, click-through rates, and conversion metrics.
                                </h3>
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <div className="text-5xl md:text-7xl text-center text-black  font-semibold"> Image or Lottie </div>
                            </FeaturesRight>
                        </FeaturesContainer>
                }></Feature>
            </FContent>
            {/* Feature Section - 5 */}
            <FContent>
                <Feature page={4} renderContent={
                    ({ progress }) =>
                        <FeaturesContainer>
                            <FeaturesLeft progress={progress}>
                                <h1 className="text-3xl px-10 pb-5 text-center md:text-start md:text-6xl font-bold text-white font-['Comfortaa']">
                                    Integration with CRM
                                </h1>
                                <h3 className="text-xl px-10 text-center md:text-start md:text-4xl font-light  tracking-wide text-white font-['Poppins']">
                                    Integrate with your existing CRM to seamlessly import and manage your cold lead data, and keep all your data in one place.
                                </h3>
                            </FeaturesLeft>
                            <FeaturesRight progress={progress}>
                                <div className="text-5xl md:text-7xl text-center text-black  font-semibold"> Image or Lottie </div>
                            </FeaturesRight>
                        </FeaturesContainer>
                }></Feature>
            </FContent>
        </TitleWrapper>
    )
}