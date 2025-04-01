import Carrousel from "@/components/carrousel";
import Container from "@/components/container/page";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="w-full h-full flex justify-center">
        <Carrousel>
          <div className="relative w-[2000px]">
            <Image
              src="/images/fundoNode.png"
              alt="NodeJs"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="relative w-[2000px]">
            <Image
              src="/images/fundoReactNative.png"
              alt="ReactNative"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="relative w-[2000px]">
            <Image
              src="/images/fundoWeb.png"
              alt="Web"
              layout="fill"
              className="object-cover"
            />
          </div>
        </Carrousel>
      </div>
    </Container>
  );
}
