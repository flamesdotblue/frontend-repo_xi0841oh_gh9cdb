import { Leaf, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight text-emerald-900">RE2USE</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-emerald-900/80 md:flex">
          <a href="#features" className="hover:text-emerald-900">Features</a>
          <a href="#listings" className="hover:text-emerald-900">Browse</a>
          <a href="#cta" className="hover:text-emerald-900">Give an Item</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm font-medium text-emerald-900 shadow-sm hover:border-emerald-300">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <button className="hidden rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 md:inline-flex">
            Start Donating
          </button>
        </div>
      </div>
    </header>
  );
}
