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
    const imageList = [...images, ...images]; // Duplica para efeito contínuo
    
    return (
         <section className="w-full overflow-hidden py-10">
            <div className="flex animate-marquee gap-8 whitespace-nowrap">
                {imageList.map((item, index) => (
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