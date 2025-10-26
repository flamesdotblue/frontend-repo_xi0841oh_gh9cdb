import { Search, Upload, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_70%_10%,rgba(16,185,129,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
              Give unused items a second life — for free
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-emerald-900/80">
              RE2USE connects givers and receivers to keep good things out of landfills. Donate items at no cost, find what you need, and support sustainability in your community.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700"
              >
                Start Donating
              </a>
              <a
                href="#listings"
                className="inline-flex items-center justify-center rounded-md border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-900 hover:border-emerald-300"
              >
                Browse Free Items
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-emerald-900/80">
              <div className="flex items-center gap-2"><Upload className="h-4 w-4 text-emerald-600" /> Post in minutes</div>
              <div className="flex items-center gap-2"><Search className="h-4 w-4 text-emerald-600" /> Powerful filters</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-600" /> Privacy-first</div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-emerald-100 bg-white p-3 shadow-sm">
              <div className="rounded-xl bg-emerald-50/70 p-6">
                <div className="grid grid-cols-2 gap-3">
                  {["Furniture","Electronics","Clothing","Books"].map((c) => (
                    <div key={c} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-emerald-100">
                      <div className="text-xs font-medium uppercase tracking-wide text-emerald-600">{c}</div>
                      <div className="mt-1 h-24 rounded-md bg-gradient-to-br from-emerald-100 to-emerald-50" />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-sm text-emerald-900/70">
                  Post at least 2 photos, set condition, add city & contact. Done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
