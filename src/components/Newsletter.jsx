

const Newsletter = () => (
    <section className="offerings flex flex-col justify-center items-center gap-4">
        <h2 className={`font-roboto font-semibold md:text-[42px] text-[36px] text-white`}>Subscribe Newsletter</h2>
        <form className="form-horizontal">
            <div className="flex sm:w-[474px]">
              <input
                type="text"
                className="flex-1 sm:px-[32px] px-[12px] sm:py-[16px] py-[8px] rounded-l-lg focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="bg-blue-800 sm:px-[32px] px-[12px] sm:py-[16px] py-[8px] border-2 border-solid border-transparent rounded-r-lg text-white hover:border-blue-800 hover:bg-transparent hover:text-blue-600 focus:outline-none">
                Subscribe
              </button>
            </div>
        </form>
    </section>
  );

export default Newsletter