import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevState => ({ ...prevState, submitting: true, info: { error: false, msg: null } }));

    try {
        const response = await fetch("https://formspree.io/f/xblyaggd", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"  
        },
        body: JSON.stringify(formData)
        });

        if (response.ok) {
        handleServerResponse(true, "Terima kasih, pesan Anda telah terkirim!");
        } else {
        handleServerResponse(false, "Maaf, terjadi kesalahan saat mengirim pesan.");
        }
    } catch (error) {
        console.error("Submit Error:", error);
        handleServerResponse(false, "Gagal terkirim. Coba lagi nanti.");
    }
    };


    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            });
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: msg }
            });
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center font-sans text-white p-4 pt-24 ">
            <div className="w-full max-w-lg p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-cyan-400">Hubungi Saya</h1>
                <p className="text-center text-gray-400">
                    Ada proyek menarik atau hanya ingin menyapa? Silakan isi formulir di bawah ini.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm font-semibold text-gray-300">Nama Lengkap</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-semibold text-gray-300">Alamat Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="text-sm font-semibold text-gray-300">Subjek</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm font-semibold text-gray-300">Pesan</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="7"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Tuliskan pesan Anda di sini..."
                            className="w-full px-4 py-2 mt-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={status.submitting}
                            className="w-full px-6 py-3 font-bold text-black bg-cyan-400 rounded-md hover:bg-cyan-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors duration-300"
                        >
                            {status.submitting ? "Mengirim..." : "Kirim Pesan"}
                        </button>
                    </div>
                </form>
                {status.info.msg && (
                    <p className={`text-center text-sm mt-4 ${status.info.error ? "text-red-400" : "text-green-400"}`}>
                        {status.info.msg}
                    </p>
                )}
            </div>
        </div>
    );
}
