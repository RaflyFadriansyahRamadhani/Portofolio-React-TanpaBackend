import { Link } from "react-router-dom";

export default function ZakatInfakSedekahCaseStudy() {
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
            Aplikasi Zakat, Infak, dan Sedekah
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Perancangan user interface aplikasi pembayaran zakat, infak, dan sedekah
            berbasis mobile dengan pendekatan teori Jakob’s Law dan Cognitive Load
            untuk menciptakan pengalaman pengguna yang sederhana, intuitif, dan mudah digunakan.
          </p>
        </header>

        {/* Project Info */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Info title="Role" value="UI/UX Designer" />
          <Info title="Platform" value="Mobile Application" />
          <Info title="Tools" value="Figma, Heuristic Evaluation" />
        </section>

        {/* Background */}
        <Section title="Background">
          <p>
            Zakat, infak, dan sedekah merupakan amalan sosial dalam Islam yang berperan
            penting dalam mendukung kesejahteraan masyarakat. Seiring perkembangan
            teknologi, proses penyaluran ZIS mengalami transformasi digital melalui aplikasi.
            Namun, tidak semua aplikasi ZIS dirancang dengan mempertimbangkan kenyamanan
            dan kemudahan pengguna.
          </p>
        </Section>

        {/* Problem */}
        <Section title="Problem Statement">
          <ul className="list-disc list-inside space-y-2">
            <li>Tampilan aplikasi ZIS cenderung kompleks dan membingungkan</li>
            <li>User kesulitan memahami alur pembayaran</li>
            <li>Terlalu banyak informasi ditampilkan dalam satu layar</li>
            <li>Kurangnya konsistensi desain dengan aplikasi yang sudah familiar</li>
          </ul>
        </Section>

        {/* Objective */}
        <Section title="Objective">
          <p>
            Merancang antarmuka aplikasi ZIS yang sederhana, intuitif, dan mudah digunakan
            dengan menerapkan prinsip Jakob’s Law dan Cognitive Load, sehingga user dapat
            menunaikan zakat, infak, dan sedekah secara efisien tanpa beban kognitif berlebih.
          </p>
        </Section>

        {/* Solution */}
        <Section title="Design Solution">
          <ul className="list-disc list-inside space-y-2">
            <li>Mengadopsi pola desain yang sudah familiar bagi user</li>
            <li>Menyederhanakan tampilan dan alur pembayaran</li>
            <li>Menampilkan informasi secara bertahap</li>
            <li>Menghilangkan elemen visual yang tidak relevan</li>
          </ul>
        </Section>

        {/* Core Features */}
        <Section title="Core Features">
          <Feature
            title="Pembayaran Zakat"
            desc="Fitur pembayaran zakat mal dan zakat fitrah dengan alur yang jelas dan sederhana."
          />
          <Feature
            title="Pembayaran Infak dan Sedekah"
            desc="User dapat menyalurkan infak dan sedekah dengan pilihan nominal yang fleksibel."
          />
          <Feature
            title="Kalkulator Zakat"
            desc="Membantu user menghitung kewajiban zakat secara otomatis."
          />
          <Feature
            title="Riwayat Transaksi"
            desc="Menampilkan riwayat pembayaran zakat, infak, dan sedekah."
          />
          <Feature
            title="Profil dan Pengaturan"
            desc="Pengelolaan data user dan preferensi aplikasi."
          />
        </Section>

        {/* UX Approach */}
        <Section title="UX Approach">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Jakob’s Law:</strong> Menggunakan pola navigasi dan layout yang
              menyerupai aplikasi pembayaran digital yang sudah dikenal user.
            </li>
            <li>
              <strong>Cognitive Load:</strong> Mengurangi beban kognitif dengan
              penyederhanaan informasi dan minim distraksi visual.
            </li>
          </ul>
        </Section>

        {/* Result */}
        <Section title="Result & Evaluation">
          <p>
            Hasil evaluasi menunjukkan penerapan Jakob’s Law memperoleh skor rata-rata
            3,94 (kategori baik), sedangkan Cognitive Load memperoleh skor 4,25
            (kategori sangat baik). Hal ini membuktikan bahwa desain mampu meningkatkan
            kenyamanan, efisiensi, dan keterlibatan pengguna.
          </p>
        </Section>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mt-16">
          <a
            href="https://tr.ee/Oy2jFh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100"
          >
            View Prototype
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
