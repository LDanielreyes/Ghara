import React from 'react';

const BrandLogos = () => {
    return (
        <section className="py-20 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    <img src="/media/hisense-seeklogo.svg" alt="Hisense" className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                    <img src="/media/mabe-seeklogo.svg" alt="Mabe" className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                    <img src="/media/mcquay-seeklogo.svg" alt="McQuay" className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                    <img src="/media/midea-seeklogo.svg" alt="Midea" className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                    <img src="/media/mirage-appliances-seeklogo.svg" alt="Mirage" className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                </div>
            </div>
        </section>
    );
};

export default BrandLogos;
