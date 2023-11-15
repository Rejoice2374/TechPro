import styles from "../style";

const Features = () => (
  <section className="offerings flex justify-between items-center">
    <div className="m-[2rem]">
      <h2 className={`font-nunito font-semibold sd:text-[36px] text-[24px] w-full text-white`}>Current job openings</h2>
      <p className="font-nunito font-medium sd:text-[16px] text-[10px] text-white">Elevate your career in the world of Technology by exploring exciting <br className="md:hidden sm:block hidden" />opportunities at TechProCraft</p>
      <h4 className="font-nunito font-semibold ss:text-[16px] text-[10px] mt-2 text-blue-500">View Available Positions</h4>
    </div>

    <div className={`${styles.flexCenter} box hover:bg-blue-gradient hover:border-transparent cursor-pointer m-[2rem]`}>
      <p className="font-nunito font-normal md:text-[24px] sd:text-[18px] sm:text-[16px] text-[12px] text-[white]">Read More</p>
    </div>
  </section>
);

export default Features