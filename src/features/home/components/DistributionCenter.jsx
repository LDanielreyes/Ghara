import React from 'react';

const DistributionCenter = () => {
    return (
        <section id="afiliados" className="bg-background-light dark:bg-background-dark py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative h-[500px] rounded-3xl overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYQgKlsNjd9HcStTRx0DGU7XFReTvDGDpTefZqfNgYHVnGVkfbJ46reLk-YF3JRe3biALPVpBnj69OuIJp0Ef2n-K3WCmYCSFuxJ8PvM1s_HU0MCpVy_onlFloRcfJuqoEM2njK6neQeawxj1pB4IhUdktlE3ooEkaZwr2N193JcBfpGar7q9WiuQnMzVVbDarBZJUKWU4rU88CtUit58UzzxRnly0P14AKy8tzWW3sJo5aLHWA-PTIPGm33sWzz4rVQUGYCufn0E"
                            alt="Modern warehouse distribution center"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-900/50"></div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <span className="bg-primary/90 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">Networking</span>
                        <h3 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">Centro de Distribución</h3>
                        <p className="text-slate-200 text-xl max-w-2xl mb-10">Únete a nuestra red de instaladores y distribuidores certificados para acceder a precios exclusivos.</p>
                        <button className="bg-white/90 backdrop-blur-md text-slate-900 hover:bg-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-2xl border border-white/50">
                            Acceso Afiliados
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DistributionCenter;
