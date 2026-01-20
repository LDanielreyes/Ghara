import React from 'react';

const MaintenanceBanner = () => {
    return (
        <section className="relative py-40 flex items-center justify-center overflow-hidden bg-primary">
            <div className="absolute inset-0 z-0">
                <img
                    src="/media/maintenance_technician.png"
                    alt="Technician cleaning filter"
                    className="w-full h-full object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C4D89]/90 via-[#0C4D89]/80 to-transparent"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl space-y-6">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight drop-shadow-2xl">
                        <span className="font-display font-bold block">Mantenimiento que</span>
                        <span className="font-display font-light italic opacity-90 pl-2">crea Santuarios.</span>
                    </h2>
                    <p className="text-xl md:text-3xl text-blue-50 max-w-2xl font-body font-light leading-relaxed drop-shadow-lg opacity-90">
                        Aire puro y sistemas eficientes. Nuestros técnicos certificados garantizan la pureza y funcionamiento óptimo.
                    </p>
                    <div className="pt-8">
                        <a href="#servicios" className="inline-flex items-center justify-center gap-3 bg-white/90 backdrop-blur-sm text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 shadow-2xl border border-white/50">
                            Agendar Servicio <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MaintenanceBanner;
