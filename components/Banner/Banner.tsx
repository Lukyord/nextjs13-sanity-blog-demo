function Banner() {
  return (
    <div className="flex justify-between flex-col lg:flex-row lg:space-x-[2rem] font-bold px-[5rem] py-[2.5rem] mb-[5rem]">
      <div>
        <h1 className="text-7xl">KT's Weekly Blog</h1>
        <h2 className="mt-[2rem] md:mt-[1rem]">
          Welcome to{" "}
          <span className="underline decoration-4 decoreation-[#c27ba0]">
            Every Young Adventurer's
          </span>{" "}
          favorite blog in the MiddleEarth
        </h2>
      </div>
      <p className="mt-[2rem] md:mt-[1rem] text-gray-400 max-w-sm">
        New Life's Blog | Latest in Technology | Weekly Update & More !
      </p>
    </div>
  );
}

export default Banner;
