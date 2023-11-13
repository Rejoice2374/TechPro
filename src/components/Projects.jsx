import Project from '../assets/projects.png';
import { UilAngleRightB } from "@iconscout/react-unicons";
import { UilArrowCircleRight } from "@iconscout/react-unicons";

const Projects = () => (
    <section className={`sm:p-[6rem] xs:p-[4rem] p-[2rem]`}>
    <h2 className="font-nunito font-semibold ss:text-[36px] text-[20px] w-full">Project : Our recent work and some past projects</h2>
    <div className="flex sm:flex-row flex-col justify-start md:items-center gap-[6rem] mt-4">
      <div className="grid-cols-1 sm:w-[50%] w-[full] space-y-4">
        <article className='flex flex-row gap-[2rem]'>
          <div className='flex flex-col items-start w-[460px]'>
            <p className='font-nunito font-normal md:text-[1.4rem] text-[1.1rem] text-blue-700'>Agile Software Development</p>
            <h4 className="font-nunito font-semibold md:text-[1.2rem] text-[1rem] leading-[2rem]">Client: Healthlink solutions</h4>
          </div>
          <div className='flex items-center'>
            <UilArrowCircleRight className="text-black cursor-pointer"/>
          </div>
        </article>

        <article className='flex flex-row gap-[2rem]'>
          <div className='flex flex-col items-start w-[460px]'>
            <p className='font-nunito font-normal md:text-[1.4rem] text-[1.1rem] text-blue-700'>Cloud migration and Optimization</p>
            <h4 className="font-nunito font-semibold md:text-[1.2rem] text-[1rem] leading-[2rem]">Client: E-commerce Empire</h4>
          </div>
          <div className='flex items-center'>
            <UilArrowCircleRight className="text-black cursor-pointer"/>
          </div>
        </article>

        <article className='flex flex-row gap-[2rem]'>
          <div className='flex flex-col items-start w-[460px]'>
            <p className='font-nunito font-normal md:text-[1.4rem] text-[1.1rem] text-blue-700'>Feno`s Art gallery App</p>
            <h4 className="font-nunito font-semibold md:text-[1.2rem] text-[1rem] leading-[2rem]">Client: Feno`s Art Gallery</h4>
          </div>
          <div className='flex items-center'>
            <UilArrowCircleRight className="text-black cursor-pointer"/>
          </div>
        </article>

        <article className='flex flex-row gap-[2rem]'>
          <div className='flex flex-col items-start w-[460px]'>
            <p className='font-nunito font-normal md:text-[1.4rem] text-[1.1rem] text-blue-700'>Data Analytics and Business Intelligence</p>
            <h4 className="font-nunito font-semibold md:text-[1.2rem] text-[1rem] leading-[2rem]">Client: Trendsetter Retail</h4>
          </div>
          <div className='flex items-center'>
            <UilArrowCircleRight className="text-black cursor-pointer"/>
          </div>
        </article>

        <article className='flex flex-row gap-[2rem]'>
          <div className='flex flex-col items-start w-[460px]'>
            <p className='font-nunito font-normal md:text-[1.4rem] text-[1.1rem] text-blue-700'>Cybersecurity Assessment and remedy</p>
            <h4 className="font-nunito font-semibold md:text-[1.2rem] text-[1rem] leading-[2rem]">Client: SecureBank Corp</h4>
          </div>
          <div className='flex items-center'>
            <UilArrowCircleRight className="text-black cursor-pointer"/>
          </div>
        </article>

        <article className='flex flex-row'>
          <div className='flex flex-row gap-[2rem] items-center w-[460px]'>
            <h4 className="font-nunito font-semibold md:text-[1.2rem] text-[1rem] leading-[2rem] text-blue-600">View All Projects</h4>
            <UilAngleRightB className="text-blue-600 w-[24px] cursor-pointer"/>
          </div>
        </article>
      </div>

      <div className="md:w-[740px] w-[620px] -mr-[6rem] sm:block hidden object-cover">
        <img src={Project}/>
      </div>
    </div>
    </section>
  );

export default Projects