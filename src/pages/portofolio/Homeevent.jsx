import { Link } from "react-router-dom";

export default function HomeEventCaseStudy() {
  return (
    <section className="pt-24 pb-24 bg-slate-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">

        {/* Back */}
        <Link
          to="/portofolio"
          className="text-blue-400 hover:underline text-sm"
        >
          ← Back to Portfolio
        </Link>

        {/* Header */}
        <header className="mt-6 mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Home Event
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Platform berbasis web yang berfungsi untuk menyalurkan dan memasarkan
            event kepada masyarakat, dilengkapi dengan artikel dan berita singkat
            untuk memudahkan pengguna menemukan event terdekat dan relevan.
          </p>
        </header>

        {/* Project Info */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Info title="Role" value="UI/UX Designer, Web Developer" />
          <Info title="Platform" value="Web Application" />
          <Info title="Tools" value="Figma, Laravel, MySQL" />
        </section>

        {/* Problem */}
        <Section title="Problem Statement">
          <ul className="list-disc list-inside space-y-2">
            <li>Informasi event tersebar di banyak platform</li>
            <li>Sulit menemukan event berdasarkan lokasi terdekat</li>
            <li>Event komunitas atau skala kecil kurang terekspos</li>
            <li>Pengguna harus membuka banyak sumber untuk satu informasi event</li>
          </ul>
        </Section>

        {/* Solution */}
        <Section title="Solution">
          <p>
            Home Event dirancang sebagai platform terpusat yang menggabungkan
            daftar event, artikel, dan berita singkat dalam satu sistem.
            Pengguna dapat dengan mudah menemukan event, membaca informasi pendukung,
            serta memperoleh konteks sebelum menghadiri sebuah acara.
          </p>
        </Section>

        {/* Core Features */}
        <Section title="Core Features">
          <Feature
            title="Event Listing"
            desc="Menampilkan daftar event dengan informasi utama seperti judul, tanggal, lokasi, dan kategori."
          />
          <Feature
            title="Search & Category"
            desc="Fitur pencarian dan filter event untuk mempermudah pengguna menemukan event yang relevan."
          />
          <Feature
            title="Event Detail Page"
            desc="Halaman detail berisi deskripsi lengkap event, waktu, lokasi, dan informasi penyelenggara."
          />
          <Feature
            title="Article & News"
            desc="Artikel dan berita singkat terkait event untuk meningkatkan awareness dan engagement pengguna."
          />
          <Feature
            title="Event Publishing"
            desc="Penyelenggara dapat mempublikasikan event sehingga menjangkau audiens yang lebih luas."
          />
        </Section>

        {/* User Flow */}
        <Section title="User Flow">
          <ol className="list-decimal list-inside space-y-2">
            <li>User membuka Home Event</li>
            <li>User melihat event atau artikel di homepage</li>
            <li>User melakukan pencarian atau memilih kategori</li>
            <li>User membuka detail event</li>
            <li>User mendapatkan informasi lengkap terkait event</li>
          </ol>
        </Section>

        {/* UX Considerations */}
        <Section title="UX Considerations">
          <ul className="list-disc list-inside space-y-2">
            <li>Layout mengikuti pola website event yang umum digunakan</li>
            <li>Informasi disajikan bertahap untuk mengurangi cognitive load</li>
            <li>Visual hierarchy memprioritaskan judul, tanggal, dan lokasi</li>
            <li>Konsistensi desain antar event dan artikel</li>
          </ul>
        </Section>

        {/* Result */}
        <Section title="Result & Impact">
          <p>
            Home Event membantu pengguna menemukan event dengan lebih cepat,
            meningkatkan eksposur event komunitas, serta menyatukan informasi
            event dan berita dalam satu platform yang mudah digunakan.
          </p>
        </Section>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mt-16">
          <a
            href="https://www.figma.com/proto/GowtNzw6fpkx3dHAS5UEYP/PBW-Home-Event--Copy-?page-id=0%3A1&node-id=66-296"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100"
          >
            View UI Design
          </a>

          <Link
            to="/porto"
            className="
              bg-white/30
              backdrop-blur-md
              border border-white/30
              text-white
              px-6
              py-3
              rounded-full
              font-medium
              hover:bg-white/40
            "
          >
            Back to Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ===== Reusable Components ===== */

function Section({ title, children }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-white mb-4">
        {title}
      </h2>
      <div className="text-gray-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Info({ title, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
