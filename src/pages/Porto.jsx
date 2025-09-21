import { useState } from "react";
import { formattedHo, formattedTokobunga, formattedZis } from "../utils/Loadimg";

// Komponen Carousel Reusable
function Carousel({ images, mobile }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full md:w-1/2 flex justify-center">
      <img
        src={images[current]}
        alt="Portfolio Preview"
        className={`object-contain ${mobile ? "h-[500px] w-[250px] rounded-xl border shadow-lg" : "w-full h-80 md:h-full object-cover"}`}
      />

      {/* Tombol prev */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ‹
      </button>

      {/* Tombol next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ›
      </button>

      {/* Indicator dots */}
      <div className="flex justify-center mt-2 mb-3 gap-2 absolute bottom-2 left-1/2 -translate-x-1/2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-gray-500"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
export default function Porto() {
  const projectData = [
    {
      title: "Home Event",
      description:
        "Projek akademik dimana kami dikelompokan sebagai tim yang ditugaskan membangun sebuah website dengan framework Laravel. Saya berperan sebagai UI/UX Designer untuk merancang seluruh tampilan aplikasi, sekaligus Web Developer untuk mengembangkan fitur-fitur dasar.",
      link: "https://www.figma.com/proto/GowtNzw6fpkx3dHAS5UEYP/PBW-Home-Event--Copy-?page-id=0%3A1&node-id=66-296&viewport=-115%2C418%2C0.19&t=W5LssIL1NXrq4I5E-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=136%3A416",
      images: [formattedHo["home1"], formattedHo["Aboutus"], formattedHo["category"]],
    },
    {
      title: "Toko Bunga",
      description:
        "Projek akademik dalam perancangan Sistem Basis Data. Saya mendapatkan peran merancang UI/UX dari aplikasi Toko Bunga.",
      link: "https://www.figma.com/proto/hrjijnIJpFQMB2ygiy4mL7/Tugas-SBD?page-id=0%3A1&node-id=65-33&p=f&viewport=-2170%2C-786%2C0.31&t=zTlEoAArmYpvbnjN-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=65%3A33",
      images: [formattedTokobunga["Home2"], formattedTokobunga["Detail About Chart"], formattedTokobunga["Explore"]],
    },
    {
      title: "Aplikasi Zakat, Infak, dan Sedekah",
      description:
        "Merancang antarmuka aplikasi zakat, infak, dan sedekah berbasis teori Jakob’s Law dan Cognitive Load. Evaluasi heuristik menunjukkan hasil baik (3,94) dan sangat baik (4,25), membuktikan rancangan UI sederhana dan intuitif meningkatkan kenyamanan serta efisiensi pengguna.",
      link: "https://www.figma.com/proto/IPuvuPz1vy0BAlaVynkdYp/App-mobile-Zakat?page-id=0%3A1&node-id=159-218&p=f&viewport=-1114%2C136%2C0.6&t=1DpjHSX86PdqW7Vo-1&scaling=contain&content-scaling=fixed&starting-point-node-id=13%3A4",
      images: [formattedZis["Home"], formattedZis["Zakat Fitrah"], formattedZis["Profil"], formattedZis["Sedekahku"]],
    },
  ];

  return (
    <section className="pt-20 pb-20 bg-slate-900">
      <h2 className="text-3xl text-center text-white font-bold">
        Portofolio Projek
      </h2>

      {projectData.map((project, idx) => (
        <div
          key={idx}
          className="flex justify-center mt-8"
        >
          <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-4xl overflow-hidden">
            <Carousel images={project.images} />
            <div className="p-6 flex flex-col justify-center md:w-1/2">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h5>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="mt-5 bg-white text-gray-800 hover:bg-gray-100 
                             focus:outline-none focus:ring-4 focus:ring-gray-300 
                             font-medium rounded-full text-base px-8 py-3
                             dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200"
                >
                  Lihat Detail UI/UX
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
