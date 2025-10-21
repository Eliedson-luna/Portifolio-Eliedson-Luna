import Image from "next/image";

const images = [
    { alt: 'css', path: '/images/home/css-3.png' },
    { alt: 'html', path: '/images/home/html-5.png' },
    { alt: 'javascript', path: '/images/home/js.png' },
    { alt: 'nodeJs', path: '/images/home/nodejs.png' },
    { alt: 'react', path: '/images/home/physics.png' },
    { alt: 'typescript', path: '/images/home/typescript.png' }
];

export default function Skills() {
    const getImageList = () => {
        // Mobile: 4x repetição (mais imagens para preencher melhor)
        const mobileList = [...images, ...images,]
        
        // Tablet: 3x repetição
        const tabletList = [...images, ...images, ...images];
        
        // Desktop: 3x repetição (você já testou que funciona bem)
        const desktopList = [...images, ...images, ...images];
        
        return {
            mobile: mobileList,
            tablet: tabletList,
            desktop: desktopList
        };
    };

    const imageLists = getImageList();
    
    return (
        <section className="w-full overflow-hidden py-20">
            {/* Mobile */}
            <div className="flex animate-marquee gap-4 sm:hidden">
                {imageLists.mobile.map((item, index) => (
                    <div key={index} className="flex-shrink-0 mx-2">
                        <Image 
                            alt={item.alt} 
                            src={item.path} 
                            width={50} 
                            height={50} 
                            className="object-contain bg-amber-50 p-2 opacity-85 rounded-2xl" 
                        />
                    </div>
                ))}
            </div>

            {/* Tablet */}
            <div className="hidden sm:flex lg:hidden animate-marquee gap-6">
                {imageLists.tablet.map((item, index) => (
                    <div key={index} className="flex-shrink-0 mx-3">
                        <Image 
                            alt={item.alt} 
                            src={item.path} 
                            width={55} 
                            height={55} 
                            className="object-contain bg-amber-50 p-2 opacity-85 rounded-2xl" 
                        />
                    </div>
                ))}
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex animate-marquee gap-8">
                {imageLists.desktop.map((item, index) => (
                    <div key={index} className="flex-shrink-0 mx-4">
                        <Image 
                            alt={item.alt} 
                            src={item.path} 
                            width={60} 
                            height={60} 
                            className="object-contain bg-amber-50 p-2 opacity-85 rounded-2xl transition-transform hover:scale-110" 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}