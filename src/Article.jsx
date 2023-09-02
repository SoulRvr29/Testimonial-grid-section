const Article = ({ data }) => {
  return (
    <article
      className={
        data.id == 1
          ? "bg-Moderate-violet  rounded-lg px-10 py-8 text-white  shadow-xl leading-[1.4] relative col-span-2 m-4 max-lg:col-span-1"
          : data.id == 2
          ? "bg-Very-dark-grayish-blue rounded-lg px-10 py-8 text-white  shadow-xl leading-[1.4] m-4"
          : data.id == 3
          ? "bg-white  rounded-lg px-10 py-8 text-Very-dark-blackish-blue shadow-xl leading-[1.4] m-4 row-span-2 order-1 max-lg:col-span-1"
          : data.id == 4
          ? "bg-Very-dark-blackish-blue  rounded-lg px-10 py-8 text-white  shadow-xl leading-[1.4] m-4 col-span-2 order-3 max-lg:col-span-1 "
          : "bg-white  rounded-lg px-10 py-8 text-Very-dark-blackish-blue shadow-xl leading-[1.4] m-4 row-span-2 max-lg:col-span-1 max-lg:order-5"
      }
    >
      <svg
        className={data.id == 1 ? "absolute right-8 top-0" : "hidden"}
        width="104"
        height="102"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
          fill="#A775F1"
          fill-rule="nonzero"
        />
      </svg>
      <div className="flex">
        <img
          className="rounded-full border-2 border-white border-opacity-30 w-10 h-10 mr-4"
          src={data.img}
          alt="person photo"
        />
        <div>
          <h2>{data.name}</h2>
          <p className="text-sm opacity-50">Verified Graduate</p>
        </div>
      </div>
      <h3 className="font-bold text-2xl my-4 z-10 relative">{data.review}</h3>
      <p className="opacity-70">{data.quotation}</p>
    </article>
  );
};

export default Article;
