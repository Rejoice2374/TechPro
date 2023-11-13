import styles from "../style";
import avatar1 from "../assets/Avatar1.png";

const Testimonial = () => (
  <section className="bg-secondary">
    <div className="sm:p-[6rem] xs:p-[4rem] p-[2rem]">
      <h2 className={`font-nunito font-semibold sm:text-[42px] xs:text-[28px] text-[29px]`}>Testimonials: What our clients say about Us</h2>
      <div className={`test__container`}>
        <article className="flex flex-col justify-center items-center test bg-white sm:p-[4rem] xs:p-[2rem] p-[1rem] hover:drop-shadow-lg rounded-xl">
          <div className="sm:p-[2rem] p-[1rem]">
            <div className="flex md:flex-row flex-col gap-4">
              <div className="block cover">
                <img src={avatar1} className="max-w-[6rem] h-[6rem]"/>
              </div>
              <div className="text-justify">
                <p className={`font-roboto font-normal md:text-[20px] text-[12px] md:leading-[30.8px] leading-[24.8px]`}>TechproCraft`s IT recruitment plan has revolutionized our hiring process. Their comprehensive understanding of our industry and skillful candidate evolution allowed us to attract top IT talent. We are now equipped with a skilled team that drives innovation and fuels our business growth.</p>
              </div>
            </div>
            <div className=" flex flex-col items-end ">
              <h4 className="font-poppins font-semibold xs:text-[1.3rem] text-[1rem] leading-[2rem]">Wisdom Smith</h4>
              <small className={`font-poppins sm:text-[16px] text-[12px] leading-[30.8px]`}>HR: ooc solutions</small>
            </div>
          </div>
        </article>
      </div>
    </div>

  </section>
);

export default Testimonial