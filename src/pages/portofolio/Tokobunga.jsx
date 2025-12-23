import { Link } from "react-router-dom";

export default function TokoBungaCaseStudy() {
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
            Website Toko Bunga
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Perancangan antarmuka website toko bunga yang berfokus pada kemudahan
            eksplorasi produk dan proses pembelian, dengan konsep seperti online shop
            serta dukungan layanan pengantaran untuk memudahkan pembeli.
          </p>
        </header>

        {/* Project Info */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Info title="Role" value="UI/UX Designer" />
          <Info title="Platform" value="Web Application" />
          <Info title="Tools" value="Figma" />
        </section>

        {/* Background */}
        <Section title="Background">
          <p>
            Pembelian bunga sering dilakukan untuk kebutuhan mendadak seperti hadiah,
            ucapan, atau acara tertentu. Namun, tidak semua toko bunga memiliki media
            digital yang memudahkan pelanggan melihat produk, mengetahui harga,
            dan melakukan pemesanan dengan cepat.
          </p>
        </Section>

        {/* Problem */}
        <Section title="Problem Statement">
          <ul className="list-disc list-inside space-y-2">
            <li>Pembeli harus datang langsung atau bertanya satu per satu melalui chat</li>
            <li>Produk bunga sulit dieksplorasi secara visual</li>
            <li>Tidak ada sistem tampilan produk yang rapi seperti online shop</li>
            <li>Proses pemesanan kurang praktis</li>
          </ul>
        </Section>

        {/* Solution */}
        <Section title="Solution">
          <p>
            Website toko bunga dirancang menyerupai konsep online shop agar mudah
            dipahami oleh pengguna. Tampilan produk dibuat visual, sederhana, dan
            informatif sehingga pembeli dapat dengan cepat memilih bunga yang
            diinginkan tanpa kebingungan.
          </p>
        </Section>

        {/* Core Features */}
        <Section title="Core Features">
          <Feature
            title="Product Listing"
            desc="Menampilkan berbagai jenis bunga dalam bentuk card produk lengkap dengan foto, nama, dan harga."
          />
          <Feature
            title="Product Detail"
            desc="Halaman detail produk berisi deskripsi singkat, harga, dan informasi tambahan."
          />
          <Feature
            title="Category & Explore"
            desc="Pengelompokan produk untuk memudahkan pembeli menemukan bunga sesuai kebutuhan."
          />
          <Feature
            title="Delivery Information"
            desc="Informasi layanan pengantaran untuk memudahkan pembeli yang tidak bisa datang langsung."
          />
          <Feature
            title="Simple Checkout Flow"
            desc="Alur pemesanan dibuat singkat dan mudah dipahami oleh pembeli."
          />
        </Section>

        {/* User Flow */}
        <Section title="User Flow">
          <ol className="list-decimal list-inside space-y-2">
            <li>User membuka website toko bunga</li>
            <li>User melihat daftar produk atau memilih kategori</li>
            <li>User membuka detail produk bunga</li>
            <li>User melakukan pemesanan</li>
            <li>Bunga diproses dan dikirim ke alamat tujuan</li>
          </ol>
        </Section>

        {/* Design Consideration */}
        <Section title="Design Consideration">
          <ul className="list-disc list-inside space-y-2">
            <li>Tampilan dibuat menyerupai online shop agar familiar</li>
            <li>Fokus pada visual produk bunga</li>
            <li>Minim teks agar pengguna cepat mengambil keputusan</li>
            <li>Navigasi sederhana dan mudah diakses</li>
          </ul>
        </Section>

        {/* Result */}
        <Section title="Result">
          <p>
            Dengan desain ini, pembeli dapat dengan mudah melihat produk bunga,
            memahami harga, serta melakukan pemesanan tanpa proses yang rumit.
            Website membantu toko bunga menjangkau pelanggan lebih luas dan
            meningkatkan kenyamanan pembelian.
          </p>
        </Section>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mt-16">
          <a
            href="https://www.figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100"
          >
            View UI Design
          </a>

          <Link
            to="/portofolio"
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
