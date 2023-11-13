import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";
import feature6 from "../assets/feature6.png";
import { UilAngleRightB } from "@iconscout/react-unicons";

const Jobs = () => (
    <section className={`sm:p-[6rem] xs:p-[4rem] p-[2rem]`}>
      <h2 className="font-poppins font-semibold ss:text-[48px] text-[24px] ss:leading-[76.8px] leading-[66.8px] w-full">What we do</h2>
      <p className="font-poppins font-normal ss:text-[24px] text-[16px] ">Unleashing the Power of Technology for Your Business Success <br /> <span className='ss:text-[24px] text-[16px] text-gray-600'>Take a look at our range of services</span></p>
      <div className='grid ss:grid-cols-2 grid-cols-1 ss:mt-[3rem] mt-[1rem] gap-[2rem]'>
        <article className='bg-primary text-center rounded-xl hover:drop-shadow-lg'>
          <div className='w-[100%] block object-cover'>
            <img src={feature1} />
          </div>
          <div className='p-[2rem]'>
            <h4 className="font-poppins font-semibold xs:text-[1.3rem] text-[1rem] leading-[2rem]">IT Consultants</h4>
            <p className='m-[1.2rem 0 2rem] text-[0.9rem]'>Streamline your project with our expert guidance</p>
          </div>
        </article>

        <article className='bg-primary text-center rounded-xl hover:drop-shadow-lg'>
          <div className='w-[100%] block object-cover'>
            <img src={feature2} />
          </div>
          <div className='p-[2rem]'>
            <h4 className="font-poppins font-semibold xs:text-[1.3rem] text-[1rem] leading-[2rem]">IT Consultants</h4>
            <p className='m-[1.2rem 0 2rem] text-[0.9rem]'>Streamline your project with our expert guidance</p>
          </div>
        </article>

        <article className='bg-primary text-center rounded-xl hover:drop-shadow-lg'>
          <div className='w-[100%] block object-cover'>
            <img src={feature3} />
          </div>
          <div className='p-[2rem]'>
            <h4 className="font-poppins font-semibold xs:text-[1.3rem] text-[1rem] leading-[2rem]">IT Consultants</h4>
            <p className='m-[1.2rem 0 2rem] text-[0.9rem]'>Streamline your project with our expert guidance</p>
          </div>
        </article>

        <article className='bg-primary text-center rounded-xl hover:drop-shadow-lg'>
          <div className='w-[100%] block object-cover'>
            <img src={feature4} />
          </div>
          <div className='p-[2rem]'>
            <h4 className="font-poppins font-semibold xs:text-[1.3rem] text-[1rem] leading-[2rem]">IT Consultants</h4>
            <p className='m-[1.2rem 0 2rem] text-[0.9rem]'>Streamline your project with our expert guidance</p>
          </div>
        </article>

        <article className='bg-primary text-center rounded-xl hover:drop-shadow-lg'>
          <div className='w-[100%] block object-cover'>
            <img src={feature5} />
          </div>
          <div className='p-[2rem]'>
            <h4 className="font-poppins font-semibold xs:text-[1.3rem] text-[1rem] leading-[2rem]">IT Consultants</h4>
            <p className='m-[1.2rem 0 2rem] text-[0.9rem]'>Streamline your project with our expert guidance</p>
          </div>
        </article>

        <article className='bg-primary text-center rounded-xl hover:drop-shadow-lg'>
          <div className='w-[100%] block object-cover'>
            <img src={feature6} />
          </div>
          <div className='p-[2rem]'>
            <h4 className="font-poppins font-semibold xs:text-[1.3rem] text-[1rem] leading-[2rem]">IT Consultants</h4>
            <p className='m-[1.2rem 0 2rem] text-[0.9rem]'>Streamline your project with our expert guidance</p>
          </div>
        </article>
      </div>

      <div className="flex flex-row mt-[4rem] justify-center items-center gap-4 cursor-pointer">
        <h4 className="font-poppins text-center font-semibold ss:text-[24px] text-[16px] leading-[30.8px]">Know More</h4>
        <UilAngleRightB className="w-[24px] cursor-pointer"/>
      </div>
      
    </section>
  )


export default Jobs