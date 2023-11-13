import styles from '../style';
import GetStarted from './GetStarted';

const Hero = () => (
  <section className={`flex flex-col relative ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px:16 px-6`}>
      <div className="flex flex-col justify-between items-center md:w-[1024px] ss:w-[720px] xs:w-[420px] w-[280px] p-2 gap-2">
        <h1 className='font-poppins font-semibold ss:text-[56px] xs:text-[36px] text:[24px] text-blue-400'>
          Your trusted IT Consulting Partner: <br />
          <span className="ss:text-[56px] xs:text-[36px] text:[24px] text-white">Empower Your Digital Journey With Us</span>
        </h1>
      </div>

      <div className="flex flex-col justify-between items-center">
        <p className={`${styles.paragraph} items-start ss:w-[720px] xs:w-[420px] w-[280px] mt-6 text-[white]`}>Transform Your Business and Master the Art of IT with Expert Consulting and Cutting-Edge <br className='ss:block hidden' /> Training Solutions, Explore exciting opportunities with us
        </p>
      </div>

      <div className='flex md:mr-4 mr-0'>
        <GetStarted />
      </div>
    </div>
  </section>
);


export default Hero