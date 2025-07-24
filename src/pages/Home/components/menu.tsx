import Container from "@/components/structural/container";
import Image from "next/image";
import Link from "next/link";

const menuData = [
    {
        title: 'Sobre mim',
        description: 'Saiba um pouco sobre mim e minha trajetória profissional',
        link: '/sobre',
        imgUrl: '/images/menu/resume.png'
    },
    {
        title: 'Projetos',
        description: 'Confira minha lista de projetos',
        link: '/projetos',
        imgUrl: '/images/menu/coding.png'
    },
    {
        title: 'Contatos',
        description: 'Sinta-se à vontade para entrar em contato comigo.',
        link: '/contatos',
        imgUrl: '/images/menu/contact-book.png'
    }
]


export default function HomePageMenu() {
    return (
        <Container id="menuContainer">
            <nav className="px-5 py-1 max-h-50">
                <div className="flex justify-evenly">
                    {menuData.map((item) => (
                        <div className="
                        flex flex-col 
                        w-70 h-40 
                        pt-5 
                        rounded-md
                        active:animate-ping
                        group
                        "
                         key={item.title}>
                            <Link href={item.link} >
                                <div className="
                                    place-self-center
                                    w-[4rem]
                                    rounded-md
                                    justify-center
                                    overflow-hidden
                                    group-hover:animate-bounce
                                    group-active:animate-spin
                                ">
                                    <Image width={100} height={10} objectFit="cover" className="object-cover" alt="img" src={item.imgUrl} />
                                </div>
                                <div className="flex flex-col group-hover:text-[#430275]">
                                    <div className="flex flex-col mt-3 gap-1">
                                        <span className="
                                        text-center
                                        sm:text-[0.7rem] 
                                        md:text-[0.8rem]
                                        lg:text-[1rem]
                                        ">
                                            {item.title}
                                        </span>
                                        <p className="
                                        text-center 
                                        sm:text-[0.5rem] 
                                        md:text-[0.6rem]
                                        lg:text-[0.7rem]
                                        max-w-50 
                                        self-center
                                        ">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </Container>
    )
}