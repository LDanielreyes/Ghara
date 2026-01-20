import React, { useState, useEffect } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    // Refactored to avoid setState in useEffect
    const [isScrollDark, setIsScrollDark] = useState(true);
    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === 'dark';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    // Derive isDarkSection instead of syncing state
    const isDarkSection = isHomePage ? isScrollDark : isDarkMode;

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    // Handle scroll to hash when location changes
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    useEffect(() => {
        if (!isHomePage) return;

        const handleScroll = () => {
            let onLightSection = false;
            // 'familia' is mostly light bg so header should be dark text? 
            // Checking page content: First section is Hero with Image (Dark Header needed or Glass). 
            // Hero text is white. So header should be white/glass. 
            // Wait, "lightSections" logic in Navbar means "Use Dark Text".
            // Familia Page Hero: Image background -> White Text -> Transparent/Glass Navbar.
            // Scroll down in Familia Page: White background -> Dark Text -> Glass Dark Text Navbar.
            // The current logic checks sections by ID on the home page.
            // On other pages, it defaults to: isHomePage ? ... : theme === 'dark'.
            // If I want dynamic navbar on Familia Page, I need to implement section observers there too OR just rely on default.
            // Default for non-home is "theme === dark". 
            // Familia page has white background sections. In Light Mode, header should be Dark Text. 
            // In Dark Mode, header should be White Text.
            // This matches the default behavior (theme === 'dark' -> White Text).
            // So NO CHANGE needed for lightSections array specifically for the page logic itself, 
            // BUT if I want the transparent hero effect on Familia page, that's different.
            // Current Navbar logic forces !isHomePage to just use theme. 
            // I will stick to default behavior for now as it's safer.
            const lightSections = ['catalogo', 'afiliados'];

            const sections = document.querySelectorAll('section[id]');
            sections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    if (lightSections.includes(sec.id)) {
                        onLightSection = true;
                    }
                }
            });
            setIsScrollDark(!onLightSection);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // Navigation Handler
    const handleNavClick = (e, item) => {
        e.preventDefault();
        const targetId = item.toLowerCase().split(' ')[0];

        if (targetId === 'inicio') {
            navigate('/');
            window.scrollTo(0, 0);
        } else if (targetId === 'familia') {
            navigate('/familia');
        } else if (targetId === 'servicios') {
            navigate('/servicios');
        } else if (targetId === 'afiliados') {
            navigate('/afiliados');
        } else if (targetId === 'catálogo') {
            navigate('/catalogo');
        } else {
            // Hash link
            if (isHomePage) {
                const element = document.getElementById(targetId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate(`/#${targetId}`);
            }
        }
        setIsMobileMenuOpen(false);
    };

    // Derived styles
    let navClasses = 'transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] border border-transparent';

    if (isScrolled) {
        if (isDarkSection) {
            navClasses = 'glass-dark shadow-lg border-white/5 py-3';
        } else {
            navClasses = 'glass shadow-lg border-white/20 py-3';
        }
    } else {
        // On non-home pages, always show background for visibility
        if (!isHomePage) {
            if (isDarkMode) {
                navClasses = 'glass-dark shadow-lg border-white/5 py-4';
            } else {
                navClasses = 'glass shadow-lg border-white/20 py-4';
            }
        } else {
            // On home page, keep transparent when not scrolled
            navClasses = 'bg-transparent py-5 border-transparent';
        }
    }

    const useDarkText = isScrolled && !isDarkSection;
    // On non-home pages when not scrolled, use dark text in light mode
    const usePageDarkText = !isHomePage && !isScrolled && !isDarkMode;
    const textColorClass = (useDarkText || usePageDarkText) ? 'text-primary' : 'text-white';
    const logoSrc = (useDarkText || usePageDarkText) ? '/media/logo-azul-ghara.svg' : '/media/logo-blanco-ghara.svg';

    return (
        <>
            <nav className={`fixed top-4 left-4 right-4 z-50 rounded-2xl ${navClasses}`}>
                <div className="container mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <a href="/" onClick={(e) => handleNavClick(e, 'Inicio')} className="flex items-center gap-3">
                        <img src={logoSrc} alt="Ghara" className="h-8 w-auto transition-all duration-300" />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-300">
                        {['Inicio', 'Familia Ghara', 'Catálogo', 'Afiliados', 'Servicios'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().split(' ')[0]}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${textColorClass} hover:bg-white/10 hover:scale-105 cursor-pointer`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-full transition-all duration-300 active:scale-95 hover:rotate-12 ${useDarkText ? 'hover:bg-slate-100 text-slate-700' : 'hover:bg-white/20 text-white'}`}
                            aria-label="Alternar tema"
                        >
                            <span className="material-symbols-outlined text-[1.25rem] leading-none">
                                {isDarkMode ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>

                        {/* CTA */}
                        <button onClick={() => navigate('/calculadora')} className="hidden md:block btn-primary-glow text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5">
                            Calculadora
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className={`md:hidden p-2 rounded-lg ${textColorClass}`}
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <span className="material-symbols-outlined text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay - OUTSIDE nav */}
            <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Dark Backdrop */}
                <div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Sidebar Panel - FIXED positioning */}
                <div className={`fixed top-0 right-0 w-[85%] max-w-[320px] h-full bg-white dark:bg-slate-900 shadow-2xl overflow-y-auto transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Menú</h2>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            aria-label="Cerrar menú"
                        >
                            <span className="material-symbols-outlined text-2xl">close</span>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="p-6">
                        <div className="space-y-2">
                            {['Inicio', 'Familia Ghara', 'Catálogo', 'Afiliados', 'Servicios'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().split(' ')[0]}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className="block px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-cyber-cyan rounded-xl transition-all"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Theme Toggle */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Tema</span>
                            <button
                                onClick={toggleTheme}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${isDarkMode
                                    ? 'bg-slate-800 text-yellow-400'
                                    : 'bg-slate-100 text-slate-700'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-lg">
                                    {isDarkMode ? 'dark_mode' : 'light_mode'}
                                </span>
                                <span>{isDarkMode ? 'Oscuro' : 'Claro'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
