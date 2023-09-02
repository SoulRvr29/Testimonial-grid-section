import Article from "./Article";
import testimonials from "./testimonials.json";

function App() {
  return (
    <main className="max-w-[1140px] pt-14 grid grid-cols-4 max-lg:grid-cols-none max-lg:grid-rows-none grid-rows-1 max-lg:max-w-2xl mx-4">
      {testimonials.map((item) => (
        <Article data={item} key={item.id} />
      ))}
    </main>
  );
}

export default App;
