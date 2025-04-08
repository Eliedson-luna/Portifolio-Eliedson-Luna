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
    w-[80vw]
    h-[75vh]
    mt-5
    mb-5
    rounded
    ">
      <div className="h-full flexs justify-center">
        <Carrousel>
          {
            sources.map((src: any, index: number) => (
              <div className="relative w-500">
                <Image
                  key={index}
                  src={src}
                  alt="Image"
                  layout="fill"
                  className="object-fill"
                />
              </div>
            ))
          }
        </Carrousel>
      </div>
    </section>
  );
}
