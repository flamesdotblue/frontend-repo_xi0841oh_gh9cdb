import { CheckCircle, MapPin, Shield, Search, Upload } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Upload,
      title: "Donation-only listings",
      desc: "Every item is free. Share gently used goods with your community in minutes.",
    },
    {
      icon: Search,
      title: "Smart browsing & filters",
      desc: "Search titles and descriptions, filter by category, condition, country, and city.",
    },
    {
      icon: MapPin,
      title: "Location-first",
      desc: "Find items near you with country and city-based search for easier pickups.",
    },
    {
      icon: Shield,
      title: "Privacy & safety",
      desc: "Contact details are revealed only to signed-in users to reduce spam.",
    },
    {
      icon: CheckCircle,
      title: "Status tracking",
      desc: "Update items as pending pickup or exchanged so others know what's available.",
    },
  ];

  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">Built for simple, sustainable giving</h2>
          <p className="mt-3 text-emerald-900/80">A clean, modern experience that makes donating and receiving effortless.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-900/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
