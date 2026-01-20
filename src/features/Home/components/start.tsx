import { Paragraph } from "@/shared/components/ui/text/paragraph";
import { Title } from "@/shared/components/ui/text/title";

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
                <div className="flex flex-col justify-center place-content-start">
                    <Title className="mb-10">
                        ELIEDSON LUNA,
                    </Title>
                    <Title>
                        DESENVOLVIMENTO DE SOFTWARE.
                    </Title>
                </div>
            </div>
            <div className="flex flex-row sm:flex-col justify-center w-[85vw] sm:w-[25%] ">
                <div className="
                    flex flex-col sm:flex-col 
                    sm:justify-center 
                    gap-5 
                    sm:border-l-border-subcont sm:border-l  border-t-border-subcont not-sm:border-t
                    sm:h-[70%] 
                    pt-10 sm:pl-5">
                    <Paragraph align="justify">
                        Opa tudo bom? Seja bem vindo ao DEV LUNA, meu portifólio profissional!
                    </Paragraph>
                    <Paragraph align="justify">
                        Me chamo Eliedson e te convido à conhecer um pouco do meu trabalho.
                    </Paragraph>
                    <Paragraph align="justify">
                        Sinta-se à vontade para navegar pelo meu site!
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}