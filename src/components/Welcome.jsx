import styles, { layout } from '../style';
import Welcome1 from '../assets/welcome.png'

const Welcome = () =>  (
  <section className={`${layout.section} m-2`}>
    <div className={`${layout.sectionInfo} md:gap-2 gap-4`}>
        <p className={`${styles.paragraph} text-[18px] text-blue-950`}>Welcome</p>
        <h2 className={`${styles.heading2} md:text-[64px] text-blue-950`}>TechProCraft</h2>
        <p className={` font-nunito font-normal text-blue-950 ss:text-[18px] text:[14px] text-justify max-w-[auto]`}>In a world fueled by bytes and pixels, where innovation shapes industries and technology holds the key to progress, there emerges a beacon of expertise, a haven for dreamers, and a force propelling tech brilliance to new horizons. <br />Welcome to TechProCraft. A realm where visionary prowess intertwines with cutting-edge solutions, and where the future of technology is not just imagined, but actively crafted. In the dynamic landscape of IT, where challenges are as diverse as opportunities, TechProCraft stands as a pillar of expertise, ready to guide you through the intricacies of this digital universe. With a commitment to revolutionizing the way businesses harness technology, we offer a comprehensive suite of services that redefine the boundaries of IT solutions.
        </p>
        <div className={`${styles.flexCenter} box1 bg-blue-gradient2 cursor-pointer mt-4`}>
          <p className="font-poppins font-normal ss:text-[24px] text-[16px] leading[23px] text-[white]">Read More</p>
        </div>
    </div>

    <div className={`${layout.sectionImg} md:-mr-20 mr-0`}>
        <img src={Welcome1}/>
    </div>
  </section>
);


export default Welcome