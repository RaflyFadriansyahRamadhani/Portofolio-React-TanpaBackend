import { useState } from "react";
import {
  formattedHo,
  formattedTokobunga,
  formattedZis,
} from "../utils/Loadimg";
import { Link } from "react-router-dom";

/* =======================
   Reusable Carousel
======================= */
function Carousel({ images, mobile }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full md:w-1/2 flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      <img
        src={images[current]}
        alt="Portfolio Preview"
        className={`object-contain ${
          mobile
            ? "h-[500px] w-[250px] rounded-xl border shadow-lg"
            : "w-full h-80 md:h-full object-cover"
        }`}
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ›
      </button>

      <div className="absolute bottom-3 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* =======================
  Portofolio Page
======================= */
export default function Porto() {
  const projectData = [
    {
      title: "Home Event",
      type: "Web UI Design · Academic Project",
      overview:
        "Website event management berbasis web untuk membantu pengguna mengelola dan mempublikasikan acara secara terstruktur.",
      role: "UI/UX Designer, Web Developer",
      tools: "Figma, Laravel, MySQL",
      link: "https://www.figma.com/proto/GowtNzw6fpkx3dHAS5UEYP/PBW-Home-Event--Copy-?page-id=0%3A1&node-id=66-296",
      linkcase: "/portofolio/homeevent",
      images: [
        formattedHo["home1"],
        formattedHo["Aboutus"],
        formattedHo["category"],
      ],
    },
    {
      title: "Toko Bunga",
      type: "Web UI Design · Academic Project",
      overview:
        "Perancangan antarmuka website toko bunga dengan fokus pada kemudahan eksplorasi produk dan penyajian informasi.",
      role: "UI/UX Designer",
      tools: "Figma",
      link: "https://www.figma.com/proto/hrjijnIJpFQMB2ygiy4mL7/Tugas-SBD?page-id=0%3A1&node-id=65-33",
      linkcase: "/portofolio/tokobunga",
      images: [
        formattedTokobunga["Home2"],
        formattedTokobunga["Detail About Chart"],
        formattedTokobunga["Explore"],
      ],
    },
    {
      title: "Aplikasi Zakat, Infak, dan Sedekah",
      type: "Mobile App Design · Academic Project · Penelitia Ilmiah",
      overview:
        "Perancangan UI aplikasi ZIS dengan pendekatan Jakob’s Law dan Cognitive Load untuk menciptakan pengalaman pengguna yang sederhana dan intuitif.",
      role: "UI/UX Designer",
      tools: "Figma, Heuristic Evaluation",
      link: "https://www.figma.com/proto/IPuvuPz1vy0BAlaVynkdYp/App-mobile-Zakat?page-id=0%3A1&node-id=159-218",
      linkcase: "/portofolio/zakatinfak",
      images: [
        formattedZis["Home"],
        formattedZis["Zakat Fitrah"],
        formattedZis["Profil"],
        formattedZis["Sedekahku"],
      ],
      mobile: true,
    },
  ];

  return (
    <section className="pt-24 pb-24 bg-slate-900">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14 px-4">
        <h2 className="text-3xl font-bold text-white mb-4">
          Portofolio UI/UX
        </h2>
        <p className="text-gray-400">
          Kumpulan project UI/UX yang berfokus pada perancangan antarmuka,
          alur pengguna, dan pengalaman penggunaan aplikasi.
        </p>
      </div>

      {/* Project List */}
      <div className="space-y-12">
        {projectData.map((project, idx) => (
          <div key={idx} className="flex justify-center px-4">
            <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-5xl overflow-hidden">
              <Carousel
                images={project.images}
                mobile={project.mobile}
              />

              <div className="p-8 flex flex-col justify-center md:w-1/2">
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {project.type}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.overview}
                </p>

                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p>
                    <span className="font-semibold">Role:</span>{" "}
                    {project.role}
                  </p>
                  <p>
                    <span className="font-semibold">Tools:</span>{" "}
                    {project.tools}
                  </p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6"
                >
                  <button className="bg-white text-gray-800 hover:bg-gray-100 
                    focus:outline-none focus:ring-4 focus:ring-gray-300 
                    font-medium rounded-full text-base px-8 py-3
                    dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200">
                    View UI/UX Case Study
                  </button>
                  
                </a>
                <Link
                  to={project.linkcase}
                  className="mt-6 inline-block"
                >
                  <button className="
                    bg-white/30
                    backdrop-blur-md
                    border border-white/30
                    text-white
                    shadow-lg shadow-black/10
                    hover:bg-white/40
                    focus:outline-none
                    focus:ring-4
                    focus:ring-white/30
                    font-medium
                    rounded-full
                    text-base
                    px-8
                    py-3
                  ">

                    View Case Study
                  </button>

                </Link>


              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
