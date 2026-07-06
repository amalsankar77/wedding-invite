export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 md:py-6 text-white z-50">

      <h1 className="text-2xl font-bold">
        A&S
      </h1>

      <div className="flex gap-8">
        <a href="#hero" className="hover:text-gray-400">
          Home
        </a>

        <a href="#story" className="hover:text-gray-400">
          Story
        </a>
        <a href="#gallery" className="hover:text-gray-400">
          Gallery
        </a>
      </div>
      <a href="#rsvp" className="hover:text-gray-400">
  RSVP
</a>
    <a href="#events" className="hover:text-gray-400">
  Events
</a>
        <a href="#venue" className="hover:text-gray-400">
          Venue
        </a>
    </nav>
  );
}