

const Contact = () => {
  return (
    <section className="flex bg-primary sm:p-[6rem] xs:p-[4rem] p-[2rem] justify-center">
      <div className="flex flex-row bg-blue-900 w-[80%] h-[240px] p-[84px] items-center rounded-[2rem] gap-[30%]">
        <h2 className="font-manrope font-normal text-white text-[48px] w-[30%]">Want to Get in Touch ?</h2>
        <div className="w-[40%] space-y-4">
          <p className="font-nunito font-normal text-[16px] text-white">Let`s Connect and Collaborate, Reach Out to Us Today You`ll be glad you do so</p>
          <button className="bg-transparent font-roboto ml-[60%] px-[32px] py-[12px] border-2 border-solid border-blue-500 rounded-lg text-white hover:border-transparent focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact