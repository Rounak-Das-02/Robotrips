import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6 BIGFEATURE`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            How we change the game
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Autonomous</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Robotaxi uses the most advanced technology available on the market and has onboard intelligence for its computation power on the edge
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Scalability</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
            Each robotaxi uses 5G to communicate with the cloud and with a fleet of other robotaxi to grow and communicate in a more secure way.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Safety</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            For a safer commute, Robotaxi is equipped with industry-grade sensors, such as LiDar and proximity sensors.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Electric</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            To achieve carbon neutrality and a low carbon footprint, our entire fleet is electric
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Modern platform</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
            Experts and developers have developed our platform to allow users to view and track the progress of every robotaxi over the internet.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Integrations</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              
The computer on-board of our platform and vehicles enables organizations to integrate sensors and 3rd-party support technology to meet their specific needs and environments
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
