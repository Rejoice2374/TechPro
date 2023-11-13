import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import { UilClock } from "@iconscout/react-unicons";
import { UilAngleRightB } from "@iconscout/react-unicons";

const Blog = () => (
  <section className={`sm:p-[6rem] xs:p-[4rem] p-[1rem]`}>
    <div className="">
      <h2 className="font-roboto font-semibold ss:text-[48px] text-[24px] sm:leading-[68.8px] leading-[36.8px] w-full">Blog Post: Latest from our blogs</h2>
      <div className='grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 mt-[2rem] gap-[2rem]'>
        <article className='bg-primary text-center rounded-xl hover:drop-shadow-lg'>
          <div className='w-[100%] block object-cover'>
            <img src={blog1} />
          </div>
          <div className='px-[1rem] py-[0.5rem'>
            <h4 className="font-nunito font-semibold text-left
             md:text-[22px] text-[11px] md:leading-[36px] leading-[24px]">The power of cloud and optimization</h4>
            <p className='font-nunito m-[1.2rem 0 2rem] text-left md:text-[16px] text-[10px]'>In today`s digital landscape, businesses are increasely leveraging cloud technologies to enhance their operations. In this blog post, we will explore the transformative journey of E-commerce Empire, a thriving online retail company that partnered with <b>TechProCraft</b> to migrate their infrastructure to the cloud and optimize their systems for unprecedented growth and scalability</p>
          </div>

          
          <div className=" flex flex-row px-[20px] md:gap-[95px] py-4  self-stretch">
            <div className="flex items-start gap-2.5 w-[240px]">
              <div className="block cover">
                <img src={avatar1} className="max-w-[32px] h-[32px]"/>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="font-outfit font-semibold md:text-[16px] text-[10px]">Ilyn Ryan</h4>
                <small className={`font-outfit md:text-[12px] text-[8px]`}>Cloud solution Architect @ Techprocraft</small>
              </div>
            </div>

            <div className=" flex gap-1 items-center w-[120px] justify-end">
              <UilClock className="w-[12px]"/>
              <small className={`font-outfit md:text-[12px] text-[8px]`}>10 Mins Read</small>
            </div>
          </div>
        </article>

        <article className='bg-primary text-center rounded-xl hover:drop-shadow-lg'>
          <div className='w-[100%] block object-cover'>
            <img src={blog2} />
          </div>
          <div className='px-[1rem] py-[0.5rem'>
            <h4 className="font-nunito font-semibold text-left
             md:text-[24px] text-[11px] md:leading-[36px] leading-[24px]">Neo-Brutalism: Raw Aesthetics</h4>
            <p className='font-nunito m-[1.2rem 0 2rem] text-left md:text-[16px] text-[10px]'>In today`s digital landscape, businesses are increasely leveraging cloud technologies to enhance their operations. In this blog post, we will explore the transformative journey of E-commerce Empire, a thriving online retail company that partnered with <b>TechProCraft</b> to migrate their infrastructure to the cloud and optimize their systems for unprecedented growth and scalability</p>
          </div>
          
          <div className=" flex flex-row px-[20px] md:gap-[95px] py-4  self-stretch">
            <div className="flex items-start gap-2.5 w-[240px]">
              <div className="block cover">
                <img src={avatar2} className="max-w-[32px] h-[32px]"/>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="font-outfit font-semibold md:text-[16px] text-[10px]">Max Andrews</h4>
                <small className={`font-outfit md:text-[12px] text-[8px]`}>Visual/Interactive Designer @ Techprocraft</small>
              </div>
            </div>

            <div className=" flex gap-1 items-center w-[120px] justify-end">
              <UilClock className="w-[12px]"/>
              <small className={`font-outfit md:text-[12px] text-[8px] md:leading-[30.8px]`}>15 Mins Read</small>
            </div>
          </div>
        </article>

        <article className='bg-primary text-center rounded-xl hover:drop-shadow-lg'>
          <div className='w-[100%] block object-cover'>
            <img src={blog3} />
          </div>
          <div className='px-[1rem] py-[0.5rem'>
            <h4 className="font-nunito font-semibold text-left
             md:text-[24px] text-[11px] md:leading-[36px] leading-[24px]">Advancements of the Andriod OS</h4>
            <p className='font-nunito m-[1.2rem 0 2rem] text-left md:text-[16px] text-[10px]'>In today`s digital landscape, businesses are increasely leveraging cloud technologies to enhance their operations. In this blog post, we will explore the transformative journey of E-commerce Empire, a thriving online retail company that partnered with <b>TechProCraft</b> to migrate their infrastructure to the cloud and optimize their systems for unprecedented growth and scalability</p>
          </div>

          <div className=" flex flex-row px-[20px] md:gap-[95px] py-4  self-stretch">
            <div className="flex items-start gap-2.5 w-[240px]">
              <div className="block cover">
                <img src={avatar3} className="max-w-[32px] h-[32px]"/>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="font-outfit font-semibold md:text-[16px] text-[10px]">Emily Weaver</h4>
                <small className={`font-outfit md:text-[12px] text-[8px]`}>Android OS Developer @ Techprocraft</small>
              </div>
            </div>

            <div className=" flex gap-1 items-center w-[120px] justify-end">
              <UilClock className="w-[12px]"/>
              <small className={`font-outfit md:text-[12px] text-[8px] ,md:leading-[30.8px]`}>10 Mins Read</small>
            </div>
          </div>
        </article>
      </div>

      <div className="flex flex-row mt-[2rem] justify-center items-center gap-1 cursor-pointer">
        <h4 className="font-roboto text-center font-semibold ss:text-[24px] text-[16px] leading-[30.8px] text-blue-900">View All Blogs</h4>
        <UilAngleRightB className="w-[24px] cursor-pointer  text-blue-900"/>
      </div>
    </div>
  </section>
  )


export default Blog