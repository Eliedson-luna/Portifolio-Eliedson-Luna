import { FlexLayout } from "@/components/structural/layout/flexLayout";
import Homepage from "@/pageContent/Home";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "DevLuna - Home",
  description: "Portifólio de Desenvolvedor",
};


export default function Home() {
  return (
    <FlexLayout>
      <Homepage />
    </FlexLayout>
  );
}
