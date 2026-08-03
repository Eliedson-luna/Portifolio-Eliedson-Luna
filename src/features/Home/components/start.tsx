'use client'
import GenericButton from "@/shared/components/ui/buttons/genericButton";
import { SubTitle, Title } from "@/shared/components/ui/text/title";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


export default function HomePageStart() {
    return (
        <div className="
                    flex
                    not-sm:gap-20 
                    not-sm:items-center
                    not-sm:justify-center
                    sm:flex-row 
                    flex-col 
                    w-full h-full 
                    ">
            <div className="flex w-full sm:w-[60%] sm:h-full">
                <RightContainer />
            </div>
            {/* <div className="flex flex-row sm:flex-col justify-center w-[85vw] sm:w-[25%] ">
                <LeftContainer />
            </div> */}
        </div>
    )
}

const RightContainer = () => {
    const router = useRouter();

    const goTo = (location: string): void => {
        router.push(location);

    }

    return (
        <div className="flex flex-col justify-center place-content-start gap-15">
            <div>
                <Title className="mb-10">
                    Eliedson Luna,
                </Title>
                <Title>
                    Desenvolvedor <span className="text-gradient font-extrabold">FRONTEND</span>
                </Title>
            </div>
            <div>
                <SubTitle className="shadow-2xl animate-pulse transition-colors">
                    <span className="text-red-400"> problema </span>
                    →
                    <span className="text-blue-400"> solução </span>
                    →
                    <span className="text-green-400"> resultado </span>
                </SubTitle>
            </div>
            <div className="flex justify-around place-content-start">
                <GenericButton text="Contatos" onPress={() => goTo("/contatos")} />
                <GenericButton text="Projetos" onPress={() => goTo("/projetos")} />
            </div>
        </div>
    )
}

// const LeftContainer = () => {

//     const container = useRef<HTMLDivElement>(null);
//     const boxRef = useRef<HTMLDivElement>(null);

//     useGSAP(() => {
//         gsap.to(boxRef.current, {
//             rotation: 720,
//             repeat: -10,
//             duration: 50,
//         });
//     }, { scope: container });

//     return (
//         <div className="
//                     flex flex-col sm:flex-col 
//                     sm:justify-center 
//                     gap-5 
//                     sm:h-[70%] 
//                     pt-10 sm:pl-5">
//             <div className="self-center" ref={container}>
//                 <div className="w-50 h-50 bg-amber-400" ref={boxRef} />
//             </div>
//         </div>
//     )
// }