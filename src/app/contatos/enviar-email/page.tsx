"use client";
import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";
import ContentWrapper from "@/shared/components/structural/wrappers/contentWrapper";
import SubmitButton from "@/shared/components/ui/buttons/submitButton";
import { SubTitle } from "@/shared/components/ui/text/title";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContatoPage() {
    
    return (
        <FlexLayout>
            <ContentWrapper>
                <div className="flex w-full h-[80vh] items-center content-center">
                    <div className="w-full sm:w-[60%] h-full sm:mr-10">
                    <MessageForm />
                    </div>
                </div>
            </ContentWrapper>
        </FlexLayout>

    );
}

const MessageForm = () => {
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const api_key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
    const contactMaxLenght = 40;
    const messageMaxLenght = 500;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        if (!captchaValue) {
            setError("⚠️ Por favor, confirme que você não é um robô.");
            return;
        }

        if(message.length > messageMaxLenght) {
            setError("⚠️ Sua mensagem possui muitos caracteres.");
            return;
        }

        if(contact.length > contactMaxLenght) {
            setError("⚠️ Seu contato possui muitos caracteres.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/recaptcha", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    token: captchaValue,
                    expectedAction: "submit_form"
                }),
            });
            const data = await response.json();

            if (data.tokenProperties?.valid) {
                await fetch("https://formsubmit.co/eliglunadev@gmail.com", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ contact, message }),
                });

                alert("✅ Mensagem enviada com sucesso!");
                setContact("");
                setMessage("");
                recaptchaRef.current?.reset();
                setCaptchaValue(null);
            } else {
                console.log(JSON.stringify(data))
                setError("⚠️ Falha na verificação do reCAPTCHA. Tente novamente.");
                recaptchaRef.current?.reset();
                setCaptchaValue(null);
            }
        } catch (error) {
            console.error("Erro ao verificar reCAPTCHA:", error);
            setError("⚠️ Ocorreu um erro ao verificar o reCAPTCHA. Tente novamente.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="sm:border-r sm:border-r-border-subcont pr-10 sm:pr-20 h-[100%]">
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col justify-evenly h-[100%]">
                <div>
                    <SubTitle className="mb-5">SEU CONTATO:</SubTitle>
                    <input
                        type="text"
                        name="contato"
                        className="
                            w-full
                            h-15 
                            px-5 py-2 ml-5
                            rounded 
                            text-text 
                            caret-text 
                            inputbg
                            text-size-small 
                            focus:outline-0
                        "
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                        placeholder="seu telefone, Email, linkedin ..."
                        maxLength={contactMaxLenght}
                        
                    />
                </div>
                <div>
                    <SubTitle className="mb-5">SUA MENSAGEM:</SubTitle>
                    <textarea
                        name="message"
                        className="
                            w-full h-[250px] 
                            px-5 py-2 ml-5
                            rounded 
                            text-text 
                            caret-text 
                            inputbg 
                            text-size-small
                            resize-none
                            focus:outline-0
                            "
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        maxLength={messageMaxLenght}
                    />
                </div>
                <div className="flex not-sm:flex-col justify-evenly items-center">
                    <div>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={api_key}
                            onChange={setCaptchaValue}
                        />
                    </div>
                    <SubmitButton isSubmitting={isSubmitting}/>
                </div>
            </form>
        </div>
    )
}