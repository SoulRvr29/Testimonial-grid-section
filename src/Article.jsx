const Article = ({ data }) => {
  return (
    <article
      className={
        data.id == 1
          ? "bg-Moderate-violet mx-8 rounded-lg p-10 text-white my-8 shadow-xl"
          : data.id == 2
          ? "bg-Very-dark-grayish-blue mx-8 rounded-lg p-10 text-white my-8 shadow-xl"
          : data.id == 3 || data.id == 5
          ? "bg-white mx-8 rounded-lg p-10 text-Very-dark-blackish-blue my-8 shadow-xl"
          : "bg-Very-dark-blackish-blue mx-8 rounded-lg p-10 text-white my-8 shadow-xl"
      }
    >
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
      <h3 className="font-bold text-2xl my-4">{data.review}</h3>
      <p className="opacity-70">{data.quotation}</p>
    </article>
  );
};

export default Article;
