import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FamiliaGharaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Form State
    const [formData, setFormData] = useState({
        type: 'Petición',
        name: '',
        id: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado (Simulación). Gracias por contactarnos.');
        // Here you would typically send the data to a backend
        setFormData({ type: 'Petición', name: '', id: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black font-body">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/media/family-hero.jpg"
                        alt="Familia Ghara"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent dark:from-black/80"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block"
                    >
                        Familia Ghara
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display font-bold text-5xl md:text-7xl mb-6 max-w-2xl leading-tight"
                    >
                        Mucho más que aire, <span className="text-cyan-300 italic font-body">somos familia.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl max-w-xl text-slate-100 font-light"
                    >
                        Creamos espacios donde las historias se comparten y los recuerdos perduran, con la temperatura perfecta para cada abrazo.
                    </motion.p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <img src="/media/history-1.jpg" alt="Equipo trabajando" className="rounded-2xl shadow-lg w-full h-64 object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000'; }} />
                            <img src="/media/history-2.jpg" alt="Reunión" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000'; }} />
                            <img src="/media/history-3.jpg" alt="Oficina" className="rounded-2xl shadow-lg w-full h-64 object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000'; }} />
                            <img src="/media/history-4.jpg" alt="Soporte" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000'; }} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display font-bold text-4xl text-slate-900 dark:text-white mb-6">Nuestra Historia</h2>
                            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-400">
                                <p className="mb-4">
                                    Todo comenzó con una idea simple: el confort no es un lujo, es el escenario donde sucede la vida. En Ghara, no solo vendemos aire acondicionado; entregamos comodidad para esos domingos en familia y productividad para esos lunes de oficina.
                                </p>
                                <p className="mb-8">
                                    A lo largo de los años, nuestro equipo ha crecido, pero nuestra esencia sigue siendo la misma. Detrás de cada instalación hay un técnico que se preocupa, una asesora que escucha y un compromiso inquebrantable de hacer tu hogar ese santuario seguro y fresco que tú y tu familia merecen.
                                </p>
                                <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-lg text-slate-800 dark:text-slate-200 bg-white dark:bg-black/20 p-6 rounded-r-xl shadow-sm mb-8">
                                    "Para nosotros, cada cliente es un nuevo miembro de la familia Ghara. Su bienestar es nuestra obsesión."
                                </blockquote>
                                <p>
                                    Hoy, somos más que una empresa de climatización; somos una comunidad de expertos apasionados por mejorar tu calidad de vida, un grado a la vez.
                                </p>
                                <div className="mt-8">
                                    <img src="/media/signature.png" alt="Firma Fundador" className="h-12 opacity-60 dark:invert" />
                                    <p className="text-xs mt-2 uppercase tracking-widest text-slate-400">Fundador, Ghara Inc.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary dark:text-cyan-400 shadow-sm mb-6">
                                    <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                                </div>
                                <h3 className="font-display font-bold text-2xl mb-4 text-slate-900 dark:text-white">Nuestra Misión</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Proporcionar soluciones de climatización que prioricen el bienestar humano, fusionando tecnología de vanguardia con un servicio cálido y experto que coloca a las familias y sus necesidades en el centro de todo lo que hacemos.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan-400/10 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-cyan-500 shadow-sm mb-6">
                                    <span className="material-symbols-outlined text-3xl">visibility</span>
                                </div>
                                <h3 className="font-display font-bold text-2xl mb-4 text-slate-900 dark:text-white">Nuestra Visión</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Convertirnos en la marca de climatización más confiable del país, referentes en confort sostenible y servicio humano, donde cada hogar y empresa encuentre no solo un producto, sino un aliado para su calidad de vida y sostenibilidad.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-cyan-500 font-bold text-xs uppercase tracking-widest mb-2 block">Nuestros Pilares</span>
                        <h2 className="font-display font-bold text-4xl text-slate-900 dark:text-white">Valores que nos definen</h2>
                        <p className="text-slate-500 mt-4">Más allá de la tecnología, nos mueven las personas.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: 'handshake', title: 'Confianza', desc: 'Construimos relaciones duraderas basadas en la transparencia. Cuando entras a la familia Ghara, tienes nuestro respaldo en cada paso.', color: 'text-primary' },
                            { icon: 'favorite', title: 'Cuidado', desc: 'Cuidamos cada detalle, desde la temperatura perfecta hasta el impacto ambiental. Nos importan tu salud y el planeta.', color: 'text-cyan-500' },
                            { icon: 'verified', title: 'Compromiso', desc: 'Mantenemos nuestra palabra. Nuestra garantía no es solo un papel, es una promesa de que estaremos ahí cuando nos necesites.', color: 'text-indigo-500' }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white dark:bg-black p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-white/5"
                            >
                                <div className={`w-16 h-16 mx-auto bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-6 ${val.color}`}>
                                    <span className="material-symbols-outlined text-3xl">{val.icon}</span>
                                </div>
                                <h3 className="font-bold text-xl mb-3 dark:text-white">{val.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white mb-2">Conoce al Equipo</h2>
                            <p className="text-slate-500 max-w-lg text-sm">Profesionales certificados, pero sobre todo, personas cálidas listas para refrescar tu día.</p>
                        </div>
                        <a href="#" className="text-primary dark:text-cyan-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">Ver todos <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Roberto M.', role: 'Jefe de Técnicos', img: '/media/team-1.jpg' },
                            { name: 'Ana S.', role: 'Atención al Cliente', img: '/media/team-2.jpg' },
                            { name: 'Carlos D.', role: 'Especialista HVAC', img: '/media/team-3.jpg' },
                            { name: 'Sofia L.', role: 'Sostenibilidad', img: '/media/team-4.jpg' }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative bg-slate-100">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=random&size=400`; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <div className="flex gap-2 text-white">
                                            <span className="material-symbols-outlined">mail</span>
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white leading-none mb-1">{member.name}</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Banner */}
            <section className="py-24 bg-[#0C4D89] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/media/pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <span className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold mb-4 inline-block">SOMOS SOCIALES</span>
                            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">Devolviendo frescura a nuestra comunidad</h2>
                            <p className="text-white/80 mb-8 leading-relaxed">
                                Creemos en el karma del buen aire. Por eso, parte de nuestras ganancias se destina a climatizar escuelas públicas y centros comunitarios locales, y promovemos activamente el reciclaje responsable de equipos antiguos.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined bg-white/20 p-1 rounded-full text-sm">check</span>
                                    <span>20 Aulas Climatizadas en 2023</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined bg-white/20 p-1 rounded-full text-sm">check</span>
                                    <span>Programa de Reciclaje "Aire Limpio"</span>
                                </li>
                            </ul>
                            <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors">
                                Leer informe de impacto
                            </button>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1 mt-8">
                                <img src="/media/community-1.jpg" className="rounded-2xl shadow-xl w-full h-64 object-cover" alt="Comunidad" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000'; }} />
                            </div>
                            <div className="flex-1 -mt-8">
                                <img src="/media/community-2.jpg" className="rounded-2xl shadow-xl w-full h-64 object-cover" alt="Voluntariado" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1593113598345-d9120619a99f?auto=format&fit=crop&q=80&w=1000'; }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PQR Section */}
            <section className="py-24 bg-slate-50 dark:bg-black" id="pqr">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">TE ESCUCHAMOS</span>
                            <h2 className="font-display font-bold text-4xl text-slate-900 dark:text-white mb-6">Peticiones, Quejas y Reclamos</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Tu experiencia es fundamental para nosotros. Utiliza este canal formal para hacernos llegar tus comentarios y ayúdanos a seguir mejorando para tu familia.
                            </p>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                                <span className="material-symbols-outlined text-primary mb-2">info</span>
                                <p className="text-xs text-blue-800 dark:text-blue-200">
                                    Responderemos a su solicitud en un plazo máximo de 48 horas hábiles.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-white/5">
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Nombre Completo</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Ej. Juan Pérez"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="correo@ejemplo.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Tipo de Solicitud</label>
                                        <div className="relative">
                                            <select
                                                name="type"
                                                value={formData.type}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                                            >
                                                <option>Petición</option>
                                                <option>Queja</option>
                                                <option>Reclamo</option>
                                                <option>Sugerencia</option>
                                                <option>Felicitación</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">No. Identificación (Opcional)</label>
                                        <input
                                            type="text"
                                            name="id"
                                            value={formData.id}
                                            onChange={handleInputChange}
                                            className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Cédula / NIT"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 mb-8">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Mensaje</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors h-32 resize-none"
                                        placeholder="Cuéntanos detalladamente tu solicitud..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#0C4D89] text-white font-bold py-4 rounded-xl hover:bg-[#073866] transition-colors shadow-lg shadow-blue-900/20">
                                    Enviar PQR
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display font-bold text-3xl text-slate-900 dark:text-white mb-8">¿Listo para unirte a la familia?</h2>
                    <div className="flex justify-center gap-4">
                        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors shadow-lg">Agendar Visita</button>
                        <button className="border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white px-8 py-3 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">Llamar Ahora</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FamiliaGharaPage;
