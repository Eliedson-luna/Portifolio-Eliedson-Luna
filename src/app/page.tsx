import Carrousel from "@/components/carrousel";
import Image from "next/image";


export default function Home() {

  const sources = [
    "/images/homeSlides/fundoNode.png",
    "/images/homeSlides/fundoReactNative.png",
    "/images/homeSlides/fundoWeb.png",
  ];

  return (
    <section id="Container" className="
    w-[80vw] h-[70%] 
    mt-2
    mb-2
    rounded
    ">
      <Carrousel>
        {
          sources.map((src: any, index: number) => (
            <div className="relative w-screen">
              <Image
                key={index}
                src={src}
                alt="Image"
                fill={true}
              />
            </div>
          ))
        }
      </Carrousel>
    </section>
  );
}
