import Container from "@/components/structural/container";
import { Title } from "@/components/texts";
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
                                ">
                                    <Image width={100} height={10} objectFit="cover" className="object-cover" alt="img" src={item.imgUrl} />
                                </div>
                                <div className="flex flex-col group-active:scale-110 group-hover:text-[#430275]">
                                    <div className="flex flex-col mt-3 gap-1">
                                        <Title type="title" className="self-center">
                                            {item.title}
                                        </Title>
                                        <Title type="subTitle" className="self-center text-center">
                                            {item.description}
                                        </Title>
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