import { useState } from "react";
import { formattedHo } from "../utils/Loadimg";

export default function Porto() {
  const images = [
    formattedHo["home1"],
    formattedHo["Aboutus"],
    formattedHo["category"],
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="pt-20 pb-20 bg-slate-900">
      <h2 className="text-3xl text-center text-white font-bold">
        Portofolio Projek 
      </h2>

      <div className="flex justify-center mt-8">
        <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-4xl overflow-hidden">
          
          <div className="relative w-full md:w-1/2">
            <img
              src={images[current]}
              alt="Portfolio Preview"
              className="object-cover w-full h-80 md:h-full"
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
            <div className="flex justify-center mt-2 mb-3 gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === current ? "bg-white" : "bg-gray-500"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Teks di kanan */}
          <div className="p-6 flex flex-col justify-center md:w-1/2">
            <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Home Event
            </h5>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Projek akademik dimana kami dikelompokan sebagai tim yang ditugaskan membangun sebuah website dengan menggunakan
              framework tertentu, dalam tim kami menggunakan framework Laravel. Pada projek ini saya ditugaskan sebagai UI/UX Desain yang merancang
              seluruh tampilan aplikasi, dan Web development yang bertugas untuk mengembkan fitur fitur dasar yang sudah tersedia yang dibuat oleh kelompok saya
            </p>
            <a
              href="https://www.figma.com/proto/GowtNzw6fpkx3dHAS5UEYP/PBW-Home-Event--Copy-?page-id=0%3A1&node-id=66-296&viewport=-115%2C418%2C0.19&t=W5LssIL1NXrq4I5E-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=136%3A416"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <button type="button" className="mt-5 bg-white text-gray-800 hover:bg-gray-100 
                      focus:outline-none focus:ring-4 focus:ring-gray-300 
                      font-medium rounded-full text-base px-8 py-3
                      dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200">Lihat Detail UI/UX</button>
            </a>
          </div>
        </div>
      </div>  
    </section>
  );
}
