import React, { useState, useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';

// Import assets (example for paths)
import couverture from '../assets/images/couverture.webp';
import matin from '../assets/images/Scène Réveil Matin Chaotique.webp';
import guerriere from '../assets/images/Illustration 1.1 - La remise en perspective (La guerrière).webp';
import miroir from '../assets/images/Illustration 6.1 - Le miroir bienveillant (Auto-affirmation).webp';
import coucher from '../assets/images/Scène Coucher Tendre.webp';

import { translations } from '../translations';

const Book = ({ isDarkMode, language }) => {
    const t = translations[language];
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth > 768 ? 600 : window.innerWidth,
        height: window.innerHeight,
    });
    const [page, setPage] = useState(0);
    const bookRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            const screenW = window.innerWidth;
            const screenH = window.innerHeight;
            
            // Base width: full width on mobile, 600px on desktop
            let w = screenW > 768 ? 600 : screenW * 0.9;
            // Height based on a standard book ratio
            let h = w * 1.3;
            
            // Safety cap to ensure it fits vertically
            if (h > screenH * 0.85) {
                h = screenH * 0.85;
                w = h / 1.3;
            }

            setDimensions({ width: w, height: h });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onFlip = (e) => {
        setPage(e.data);
    };

    return (
        <div className="flex justify-center items-center transition-colors duration-500 overflow-hidden relative py-10">
            <HTMLFlipBook
                width={dimensions.width}
                height={dimensions.height}
                size="stretch"
                minWidth={280}
                maxWidth={1000}
                minHeight={300}
                maxHeight={1200}
                maxShadowOpacity={isDarkMode ? 0.8 : 0.5}
                showCover={true}
                mobileScrollSupport={true}
                autoCenter={true}
                className="shadow-2xl"
                ref={bookRef}
                onFlip={onFlip}
            >
                {/* PAGE 1: COUVERTURE */}
                <Page number="1" density="hard" isDarkMode={isDarkMode}>
                    <div className="flex flex-col items-center justify-center h-full w-full p-6">
                        <img src={couverture} alt="Couverture" className={`max-h-[480px] w-auto rounded-xl shadow-lg mb-6 border-2 border-white transition-all duration-500 ${isDarkMode ? 'brightness-[0.8] contrast-[1.1]' : ''}`} />
                        <h1 className={`text-4xl font-bold uppercase mb-2 text-center transition-colors duration-500 ${isDarkMode ? 'text-[#E8A3A8]' : 'text-[#E8A3A8]'}`}>
                            {t.cover.title}
                        </h1>
                        <p className={`italic text-center transition-colors duration-500 ${isDarkMode ? 'text-[#B7C6B0]' : 'text-[#B7C6B0]'}`}>
                            {t.cover.subtitle}
                        </p>
                    </div>
                </Page>

                {/* PAGE 2: AVANT-PROPOS */}
                <Page number="2" isDarkMode={isDarkMode}>
                    <h2 className={`text-2xl font-bold mb-4 mt-8 transition-colors duration-500 ${isDarkMode ? 'text-[#B7C6B0]' : 'text-[#B7C6B0]'}`}>
                        {t.page2.title}
                    </h2>
                    <img src={matin} alt="Matin" className={`w-full max-h-[40%] object-contain mb-4 rounded-lg transition-all duration-500 ${isDarkMode ? 'brightness-[0.8]' : ''}`} />
                    <p className={`leading-relaxed mb-4 transition-colors duration-500 ${isDarkMode ? 'text-[#d1d1d1]' : 'text-[#444]'}`}>
                        {t.page2.content1}
                    </p>
                    <p className={`leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-[#d1d1d1]' : 'text-[#444]'}`}>
                        {t.page2.content2}
                    </p>
                </Page>

                {/* PAGE 3: CITATION */}
                <Page number="3" isDarkMode={isDarkMode}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className={`italic text-xl text-center p-8 relative mb-4 before:content-['\\201C'] before:text-6xl before:absolute before:top-[-10px] before:left-1/2 before:-translate-x-1/2 before:opacity-20 transition-colors duration-500 ${isDarkMode ? 'text-[#d1d1d1] before:text-[#E8A3A8]' : 'text-[#444] before:text-[#E8A3A8]'}`}>
                            {t.page3.quote}
                        </div>
                        <p className={`text-center transition-colors duration-500 ${isDarkMode ? 'text-[#B7C6B0]' : 'text-[#B7C6B0]'}`}>
                            {t.page3.author}
                        </p>
                    </div>
                </Page>

                {/* PAGE 4: CHAPITRE 1 */}
                <Page number="4" isDarkMode={isDarkMode}>
                    <h2 className={`text-2xl font-bold mb-4 mt-8 transition-colors duration-500 ${isDarkMode ? 'text-[#B7C6B0]' : 'text-[#B7C6B0]'}`}>
                        {t.page4.title}
                    </h2>
                    <p className={`leading-relaxed mb-4 text-left transition-colors duration-500 ${isDarkMode ? 'text-[#d1d1d1]' : 'text-[#444]'}`}>
                        {t.page4.content}
                    </p>
                    <img src={guerriere} alt="Guerrière" className={`w-full max-h-[40%] object-contain mb-4 rounded-lg transition-all duration-500 ${isDarkMode ? 'brightness-[0.8]' : ''}`} />
                    <p className={`italic text-sm transition-colors duration-500 ${isDarkMode ? 'text-[#a1a1a1]' : 'text-[#444]'}`}>
                        {t.page4.quote}
                    </p>
                </Page>

                {/* PAGE 5: RAPPEL */}
                <Page number="5" isDarkMode={isDarkMode}>
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <div className={`border-l-4 p-6 rounded-r-xl text-left w-full transition-all duration-500 ${isDarkMode ? 'border-[#6D8264] bg-[#B7C6B0]/10 text-[#d1d1d1]' : 'border-[#6D8264] bg-[#B7C6B0]/10 text-[#333]'}`}>
                            <strong className={`block mb-2 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-[#222]'}`}>
                                {t.page5.label}
                            </strong>
                            {t.page5.text}
                        </div>
                    </div>
                </Page>

                {/* PAGE 6: EXERCICE */}
                <Page number="6" isDarkMode={isDarkMode}>
                    <h2 className={`text-2xl font-bold mb-4 mt-8 transition-colors duration-500 ${isDarkMode ? 'text-[#B7C6B0]' : 'text-[#B7C6B0]'}`}>
                        {t.page6.title}
                    </h2>
                    <p className={`leading-relaxed mb-4 text-left transition-colors duration-500 ${isDarkMode ? 'text-[#d1d1d1]' : 'text-[#444]'}`}>
                        {t.page6.content}
                    </p>
                    <img src={miroir} alt="Miroir" className={`w-full max-h-[40%] object-contain mb-4 rounded-lg transition-all duration-500 ${isDarkMode ? 'brightness-[0.8]' : ''}`} />
                    <div className={`italic mt-4 text-sm transition-colors duration-500 ${isDarkMode ? 'text-[#d1d1d1]' : 'text-[#333]'}`}>
                        <strong className={`transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-[#222]'}`}>
                            {t.page6.pactLabel}
                        </strong> {t.page6.pactText}
                    </div>
                </Page>

                {/* PAGE 7: CONCLUSION */}
                <Page number="7" isDarkMode={isDarkMode}>
                    <div className="flex flex-col items-center justify-center h-full">
                        <img src={coucher} alt="Coucher" className={`w-full max-h-[40%] object-contain mb-4 rounded-lg transition-all duration-500 ${isDarkMode ? 'brightness-[0.8]' : ''}`} />
                        <h2 className={`text-xl font-bold mb-2 transition-colors duration-500 ${isDarkMode ? 'text-[#B7C6B0]' : 'text-[#B7C6B0]'}`}>
                            {t.page7.title}
                        </h2>
                        <p className={`text-sm mb-4 transition-colors duration-500 ${isDarkMode ? 'text-[#d1d1d1]' : 'text-[#444]'}`}>
                            {t.page7.content}
                        </p>
                        <p className={`font-serif text-[#E8A3A8] text-2xl mt-2 italic transition-colors duration-500`}>
                            {t.page7.footer}
                        </p>
                    </div>
                </Page>
            </HTMLFlipBook>
        </div>

    );
};

export default Book;
