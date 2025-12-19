import { formattedLogos, formattedHo } from '../utils/Loadimg';
import fotodiri from "../assets/fotodiri.png";

import { useNavigate } from "react-router-dom";

  

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/CV Rafly Fadriansyah Ramadhani.pdf"; // pastikan cv.pdf ada di folder public/
  link.download = "CV_Rafly_Fadriansyah_Ramadhani.pdf";
  link.click();
};


export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="mt-0 w-full min-h-screen bg-slate-900 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 mt-4">
        {/* Kolom kiri - Teks */}
        <div className="text-center md:text-left md:justify-center">
          <h2 className="text-3xl font-bold text-white">
            Hi, I’m Rafly Fadriansyah Ramadhani 👋
          </h2>

          <p className="mt-3 text-gray-300">
            Mahasiswa Universitas Gunadarma | UI/UX Desain
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            {/* Tombol Contact */}
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="bg-white text-gray-800 hover:bg-gray-100 
                        focus:outline-none focus:ring-4 focus:ring-gray-300 
                        font-medium rounded-full text-base px-8 py-3
                        dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200"
            >
              Contact
            </button>

            {/* Tombol Download CV */}
            <button
              type="button"
              onClick={downloadCV}
              className="bg-gray-800 text-white hover:bg-gray-700 
                        focus:outline-none focus:ring-4 focus:ring-gray-300 
                        font-medium rounded-full text-base px-8 py-3
                        dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Download CV saya
            </button>
          </div>


          <div className="mt-4 flex justify-center md:justify-start">
            <a
              href="https://contoh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <svg
                className="w-[39px] h-[39px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/rafly-fadriasnyah-ramadhani" target='_blank' rel='noopener noreferrer' className='inline-block'>
              <svg className="w-[39px] h-[39px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
              </svg>
            </a>

            <a href="https://www.facebook.com/rafly.f.ramadhani?locale=id_ID" target='_blank' rel='noopener noreferrer' className='inline-block'>
            <svg className="w-[39px] h-[39px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
            </svg>
            </a>
          </div>
        </div>


        {/* Kolom kanan - Foto */}
        <div className="flex justify-center md:justify-center text-center">
          <img
            className="h-auto max-w-xs rounded-lg shadow-xl"
            src={fotodiri}
            alt="Foto profil"
          />
        </div>
      </div>

      {/* About Me dan SKILL*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-6">
        {/* Kiri */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center">About Me</h2>
          <p className="text-gray-300 mt-2 text-justify">
            Mahasiswa semester 6 Program Studi Sistem Informasi di Universitas Gunadarma dengan fokus utama pada pengembangan website seperti UI/UX, HTML, CSS, PHP. Saya fleksibel, kreatif, dan berpikiran terbuka, serta mampu bekerja secara mandiri atau kelompok dengan memanfaatkan keterampilan kepemimpinan dan manajemen proyek yang saya peroleh melalui keterlibatan aktif di Badan Eksekutif Mahasiswa. Selain itu, minat saya yang tinggi dalam bidang UI/UX, Data Analyst membuat saya mendalami kedua bidang tersebut. sehingga dapat memberikan solusi inovatif yang mendukung pengambilan keputusan yang lebih baik.
          </p>
        </div>

        {/* Kanan */}
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white text-center">Skills</h2> 
              <div className="overflow-hidden w-full bg-transparent py-4">
                <div className="flex gap-6 animate-marquee">
                  {/* Set 1 */}
                  <img src={formattedLogos.figma} alt="Figma" className="w-20 h-20" />
                  <img src={formattedLogos.html} alt="HTML" className="w-20 h-20" />
                  <img src={formattedLogos.css} alt="CSS" className="w-20 h-20" />
                  <img src={formattedLogos.php} alt="PHP" className="w-20 h-20" />
                  <img src={formattedLogos.mysql} alt="MySQL" className="w-20 h-20" />
                  <img src={formattedLogos.laravel} alt="Laravel" className="w-20 h-20" />
                  <img src={formattedLogos['adobe-lightroom']} alt="Adobe Lightroom" className="w-20 h-20" />

                  {/* Set 2 (duplikasi untuk loop mulus) */}
                  <img src={formattedLogos.figma} alt="Figma" className="w-20 h-20" />
                  <img src={formattedLogos.html} alt="HTML" className="w-20 h-20" />
                  <img src={formattedLogos.css} alt="CSS" className="w-20 h-20" />
                  <img src={formattedLogos.php} alt="PHP" className="w-20 h-20" />
                  <img src={formattedLogos.mysql} alt="MySQL" className="w-20 h-20" />
                  <img src={formattedLogos.laravel} alt="Laravel" className="w-20 h-20" />
                  <img src={formattedLogos['adobe-lightroom']} alt="Adobe Lightroom" className="w-20 h-20" />
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Pendidikan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-6">
        <div className="flex justify-center mt-8 px-4 py-4">
          <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="font-bold text-3xl mb-6 text-center text-white">Pendidikan</h2>
            <ol className="items-center sm:flex justify-center">
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-100">Sekolah Menengah Atas Negeri 23 Jakarta</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2019 - 2022</time>
                  <p className="text-base font-normal text-gray-400">Jurusan Ilmu Pengetahuan Sosial</p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-100">Universitas Gunadarma</h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2022 - Sekarang</time>
                  <p className="text-base font-normal text-gray-400">Jurusan Sistem Informasi</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        
        {/* Organisasi */}
        <div className="flex justify-center mt-8 px-4 py-4">
          <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="font-bold text-3xl mb-6 text-center text-white">Organisasi</h2>
            <ol className="items-start sm:flex justify-center">
              {/* Item 1 */}
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full 
                                  ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 
                              1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 
                              0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 
                              1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-100">
                    Ketua Majelis Perwakilan Kelas
                  </h3>
                  <time className="block mb-2 text-sm text-gray-400">
                    2019 - 2020
                  </time>
                  <p className="text-base text-gray-400">
                    Sekolah Menengah Atas Negeri 23 Jakarta
                  </p>
                </div>
              </li>

              {/* Item 2 */}
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full 
                                  ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 
                              1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 
                              0-2 2v2h20V4ZM0 18a2 2 0 0 
                              0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 
                              1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-100">
                    Staff Politik dan Kesejahteraan Mahasiswa
                  </h3>
                  <time className="block mb-2 text-sm text-gray-400">
                    2023 - 2024
                  </time>
                  <p className="text-base text-gray-400">
                    Badan Eksekutif Mahasiswa FIKTI, Universitas Gunadarma
                  </p>
                </div>
              </li>

              {/* Item 3 */}
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full 
                                  ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 
                              1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 
                              0-2 2v2h20V4ZM0 18a2 2 0 0 
                              0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 
                              1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-100">
                    Staff Media
                  </h3>
                  <time className="block mb-2 text-sm text-gray-400">
                    2024
                  </time>
                  <p className="text-base text-gray-400">
                    Pemilihan Umum Raya, Badan Eksekutif Mahasiswa FIKTI, Universitas Gunadarma
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

    {/* Pengalaman Project */}
    <div className="flex justify-center mt-1 px-4 py-4">
      <div className="w-full max-w-5xl bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Projek</h2>
        <ol className="items-center sm:flex justify-center">

          {/* Item 1 */}
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full 
                              ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 
                          1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 
                          0-2 2v2h20V4ZM0 18a2 2 0 0 
                          0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 
                          1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-100">Toko Bunga</h3>
              <time className="block mb-2 text-sm text-gray-400">2024</time>
              <p className="text-base text-gray-400">
                UI/UX, Sistem Basis Data, Akademik Projek
              </p>
            </div>
          </li>

          {/* Item 2 */}
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full 
                              ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 
                          1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 
                          0-2 2v2h20V4ZM0 18a2 2 0 0 
                          0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 
                          1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-100">Home Event</h3>
              <time className="block mb-2 text-sm text-gray-400">2024</time>
              <p className="text-base text-gray-400">
                UI/UX, Web Development, Akademik Projek
              </p>
            </div>
          </li>

          {/* Item 3 */}
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full 
                              ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 
                          1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 
                          0-2 2v2h20V4ZM0 18a2 2 0 0 
                          0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 
                          1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-100">
                Aplikasi Zakat, Infak, dan Sedekah
              </h3>
              <time className="block mb-2 text-sm text-gray-400">2025</time>
              <p className="text-base text-gray-400">
                UI/UX, Akademik Projek, Penelitian Ilmiah
              </p>
            </div>
          </li>

        </ol>
      </div>
    </div>



      


    </section>
  );
}
