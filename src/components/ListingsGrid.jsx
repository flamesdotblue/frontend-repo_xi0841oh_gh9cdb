import { MapPin } from "lucide-react";

const demoListings = [
  {
    id: 1,
    title: "Wooden Dining Chair",
    location: { city: "Denver", country: "USA" },
    status: "Good",
    img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Old Laptop (Needs Repair)",
    location: { city: "Berlin", country: "Germany" },
    status: "Needs Repair",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Kids' Picture Books",
    location: { city: "Nairobi", country: "Kenya" },
    status: "Good",
    img: "https://images.unsplash.com/photo-1513477967668-2aaf11838bd0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Cordless Drill",
    location: { city: "Bangalore", country: "India" },
    status: "Bad",
    img: "https://images.unsplash.com/photo-1602472850781-85c94fbc1df0?q=80&w=1200&auto=format&fit=crop",
  },
];

function StatusTag({ status }) {
  const variant =
    status === "Good"
      ? "bg-emerald-100 text-emerald-700 ring-emerald-200"
      : status === "Needs Repair"
      ? "bg-amber-100 text-amber-700 ring-amber-200"
      : "bg-rose-100 text-rose-700 ring-rose-200";
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ${variant}`}>
      {status}
    </span>
  );
}

export default function ListingsGrid() {
  return (
    <section id="listings" className="bg-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-emerald-900 sm:text-3xl">Trending free items</h2>
            <p className="mt-2 text-emerald-900/80">Browse active donations from around the world.</p>
          </div>
          <div className="flex w-full max-w-xl items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm text-emerald-900/80 shadow-sm sm:w-auto">
            <input className="w-full outline-none" placeholder="Search title or description" />
            <button className="rounded-md bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-700">Search</button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoListings.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-3 top-3">
                  <StatusTag status={item.status} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="truncate text-base font-semibold text-emerald-900">{item.title}</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-emerald-900/70">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  <span>
                    {item.location.city}, {item.location.country}
                  </span>
                </div>
                <button className="mt-3 w-full rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm font-medium text-emerald-900 hover:border-emerald-300">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
