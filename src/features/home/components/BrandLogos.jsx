import React from 'react';

const BrandLogos = () => {
    return (
        <section className="py-12 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-background-dark to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-background-dark to-transparent z-10"></div>

            <div className="flex w-full overflow-hidden select-none group">
                <style>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 40s linear infinite;
                    }
                    .group:hover .animate-scroll {
                        animation-play-state: paused;
                    }
                `}</style>
                <div className="flex animate-scroll min-w-full gap-24 items-center pl-24">
                    {[1, 2, 3, 4].map((i) => (
                        <React.Fragment key={i}>
                            <img src="/media/hisense-seeklogo.svg" alt="Hisense" className="h-10 md:h-14 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <img src="/media/mabe-seeklogo.svg" alt="Mabe" className="h-10 md:h-14 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <img src="/media/mcquay-seeklogo.svg" alt="McQuay" className="h-10 md:h-14 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <img src="/media/midea-seeklogo.svg" alt="Midea" className="h-10 md:h-14 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            <img src="/media/mirage-appliances-seeklogo.svg" alt="Mirage" className="h-10 md:h-14 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandLogos;
