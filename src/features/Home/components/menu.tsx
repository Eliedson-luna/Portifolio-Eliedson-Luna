import { Paragraph } from "@/shared/components/ui/text/paragraph";
import { Title } from "@/shared/components/ui/text/title";

export default function HomePageMenu() {
    return (
        <div className="flex w-full h-full">
            <div className="flex flex-col justify-evenly  w-[60%] h-full">
                <div className="place-content-start flex flex-col justify-center">
                    <Title className="mb-10">
                        ELIEDSON LUNA,
                    </Title>
                    <Title>
                        DESENVOLVIMENTO DE SOFTWARE.
                    </Title>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full w-[25%] ">
                <div className="flex flex-col justify-center gap-5 border-l-border-subcont border-l h-[70%] pl-5">
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