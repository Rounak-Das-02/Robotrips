import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';
// import { url } from 'node:inspector';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <div className={tw(headerStyle)} style ={{backgroundImage : `url("bg.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "50% 70%", backgroundSize: "cover"}} >
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-100`)}>
        Make your Trips using Robotrips
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-200 text-center text-xl lg:text-3xl`)}>
          An Autonomous Shuttle Service
        </p>
      </div>
      <div className={tw(`mt-12 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Pre-Book Now</Button>
        {/* <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button> */}
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-m text-gray-200`)}>These folks get it</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`m-12 mb-8`)} width={120} style = {{filter : "invert(1)"}}/>
          <Netlify className={tw(`m-12`)} width={140} style = {{filter : "invert(1)"}}/>
          <Nike className={tw(`m-12`)} width={140} style = {{filter : "invert(1)"}}/>
          <Figma className={tw(`m-12`)} width={140} style = {{filter : "invert(1)"}} />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
