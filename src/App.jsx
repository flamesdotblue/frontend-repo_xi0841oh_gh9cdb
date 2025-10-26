import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ListingsGrid from "./components/ListingsGrid";

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ListingsGrid />

        <section id="cta" className="border-t border-emerald-100 bg-gradient-to-b from-white to-emerald-50/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-emerald-600 p-8 shadow-xl sm:p-10">
              <div className="grid items-center gap-6 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <h3 className="text-2xl font-bold tracking-tight text-white">Have something to give?</h3>
                  <p className="mt-2 text-emerald-50">
                    List your item for free with at least two photos. Set condition, add your city, and choose how people can contact you.
                  </p>
                </div>
                <div className="text-right">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-emerald-700 shadow hover:bg-emerald-50"
                  >
                    Create a free listing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-emerald-900/70 sm:flex-row">
            <p>
              © {new Date().getFullYear()} RE2USE. Donation-only platform to reduce waste.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-emerald-900">Privacy</a>
              <a href="#" className="hover:text-emerald-900">Terms</a>
              <a href="#" className="hover:text-emerald-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
