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
                    <h1 className="font-display font-bold text-6xl lg:text-7xl xl:text-8xl leading-none text-white mb-8 tracking-tight">
                        Mejorando tu <br />
                        <span className="text-accent">ambiente</span>
                    </h1>
                    <p className="text-xl text-slate-200 font-body leading-relaxed mb-10 max-w-lg font-light">
                        Servicio técnico experto, instalación y distribución de equipos de climatización de primer nivel. Confía en los profesionales.
                    </p>

                    <div className="glass-panel p-6 rounded-2xl shadow-2xl">
                        <h3 className="font-display font-semibold text-lg mb-4 text-white">Agendar Cotización</h3>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-slate-300 transition-all outline-none"
                            />
                            <div className="flex flex-col sm:flex-row gap-4">
                                <select className="w-full sm:w-1/2 bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:border-transparent text-white outline-none [&>option]:text-slate-900">
                                    <option>Residencial</option>
                                    <option>Comercial</option>
                                    <option>Industrial</option>
                                </select>
                                <button className="w-full sm:w-1/2 btn-primary-glow font-bold rounded-lg py-3 sm:py-0">
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
