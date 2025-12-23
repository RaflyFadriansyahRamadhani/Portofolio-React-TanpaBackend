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
        <div className="bg-gray-900 min-h-screen flex items-center justify-center font-sans text-white p-4 pt-24">
            <div className="w-full max-w-2xl">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Hubungi Saya
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Ada proyek menarik atau hanya ingin menyapa? Mari berdiskusi dan buat sesuatu yang luar biasa bersama.
                    </p>
                </div>

                {/* Form Section */}
                <div className="relative">
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
                    
                    <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="group">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors">
                                            Nama Lengkap
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 text-white bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 placeholder-gray-500"
                                                placeholder="Masukkan nama Anda"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors">
                                            Alamat Email
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 text-white bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 placeholder-gray-500"
                                                placeholder="email@contoh.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="group">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors">
                                            Subjek
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 text-white bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 placeholder-gray-500"
                                                placeholder="Tentang apa?"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors">
                                    Pesan Anda
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                        </svg>
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Ceritakan tentang proyek atau pertanyaan Anda..."
                                        className="w-full pl-10 pr-4 py-3 text-white bg-gray-700/50 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 placeholder-gray-500 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={status.submitting}
                                    className="group w-full px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 flex items-center justify-center space-x-3"
                                >
                                    {status.submitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Mengirim...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Kirim Pesan</span>
                                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Status Message */}
                        {status.info.msg && (
                            <div className={`mt-6 p-4 rounded-xl border ${status.info.error ? 'bg-red-900/20 border-red-700/30' : 'bg-green-900/20 border-green-700/30'} transition-all duration-500 transform ${status.info.msg ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
                                <div className="flex items-center space-x-3">
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${status.info.error ? 'bg-red-500/20' : 'bg-green-500/20'}`}>
                                        {status.info.error ? (
                                            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        )}
                                    </div>
                                    <p className={`text-sm ${status.info.error ? 'text-red-300' : 'text-green-300'}`}>
                                        {status.info.msg}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-10 text-center">
                    <p className="text-gray-400 text-sm">
                        Biasanya saya membalas dalam 24 jam. Atau hubungi langsung di{' '}
                        <a href="mailto:hello@example.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                            raflyfadriansyah19@gmail.com    
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}