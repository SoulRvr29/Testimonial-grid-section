import Article from "./Article";
import testimonials from "./testimonials.json";
import Footer from "./Footer";

function App() {
  return (
    <>
      <main className="max-w-[1140px] pt-14 grid grid-cols-4 max-sm:grid-cols-none max-sm:grid-rows-none grid-rows-1 max-sm:max-w-3xl mx-4 max-lg:grid-cols-3">
        {testimonials.map((item) => (
          <Article data={item} key={item.id} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
