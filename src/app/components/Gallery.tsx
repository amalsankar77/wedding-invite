export default function Gallery() {
  return (
    <section
      id="gallery"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
        Gallery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <img
          src="/g.jpg"
          alt="gallery"
          className="w-full h-[400px] object-cover rounded-2xl"
        />

        <img
          src="/b.jpg"
          alt="gallery"
          className="w-full h-[400px] object-cover rounded-2xl"
        />

        <img
          src="/gb.jpg"
          alt="gallery"
          className="w-full h-[400px] object-cover rounded-2xl"
        />

      </div>
    </section>
  );
}