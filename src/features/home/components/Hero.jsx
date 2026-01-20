import React from 'react';

const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen min-h-[850px] flex items-center overflow-hidden bg-slate-900 pb-20">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/media/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex flex-col justify-center pt-32">
                <div className="max-w-xl animate-fade-in-up">
                    <h1 className="font-display font-bold text-6xl lg:text-7xl xl:text-8xl leading-none text-white mb-8 tracking-tight drop-shadow-lg">
                        Mejorando tu <br />
                        <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">ambiente</span>
                    </h1>
                    <p className="text-xl text-slate-100 font-body leading-relaxed mb-10 max-w-lg font-light drop-shadow-md">
                        Servicio técnico experto, instalación y distribución de equipos de climatización de primer nivel. Confía en los profesionales.
                    </p>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        <h3 className="font-display font-bold text-xl mb-6 text-white flex items-center gap-2">
                            <span className="bg-white/20 p-2 rounded-lg material-symbols-outlined text-sm">calendar_month</span>
                            Agendar Cotización
                        </h3>
                        <div className="space-y-4 relative z-10">
                            <div className="group/input">
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all outline-none backdrop-blur-sm group-hover/input:bg-black/50"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="w-full sm:w-1/2 relative group/select">
                                    <select className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white outline-none appearance-none backdrop-blur-sm [&>option]:text-slate-900 group-hover/select:bg-black/50 relative z-10">
                                        <option>Residencial</option>
                                        <option>Comercial</option>
                                        <option>Industrial</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none z-20">expand_more</span>
                                </div>
                                <button className="w-full sm:w-1/2 bg-gradient-to-r from-primary to-secondary hover:from-cyan-500 hover:to-blue-600 text-white font-bold rounded-xl py-4 sm:py-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1 active:scale-95">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <span className="material-symbols-outlined text-white/50 text-4xl">keyboard_arrow_down</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
