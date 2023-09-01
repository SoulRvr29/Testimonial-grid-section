import Article from "./Article";
import testimonials from "./testimonials.json";

function App() {
  return (
    <main className="max-w-2xl">
      {testimonials.map((item) => (
        <Article data={item} key={item.id} />
      ))}
    </main>
  );
}

export default App;
