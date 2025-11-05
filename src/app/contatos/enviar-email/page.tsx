"use client";
import { FlexLayout } from "@/shared/components/structural/layouts/flexLayout";
import SubmitButton from "@/shared/components/ui/buttons/submitButton";
import { ResponsiveText } from "@/shared/components/ui/text/responsiveText";
import { Title } from "@/shared/components/ui/text/title";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContatoPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const api_key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        if (!captchaValue) {
            setError("⚠️ Por favor, confirme que você não é um robô.");
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
                await fetch("https://formsubmit.co/goncalveseliedson@gmail.com", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, message }),
                });

                alert("✅ Mensagem enviada com sucesso!");
                setEmail("");
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
        <FlexLayout>

            <div className="max-w-lg mx-auto p-6 bg-bg-cont shadow-md shadow-shadow-cont rounded-lg">
                <Title>Entre em contato</Title>

                {error && <p className="text-red-500">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-evenly h-full min-h-[50vh]">
                        <div>

                            <ResponsiveText textSize="small">Seu Email:</ResponsiveText>
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border rounded text-text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>

                            <ResponsiveText textSize="small">Mensagem:</ResponsiveText>
                            <textarea
                                name="message"
                                className="w-full p-2 border rounded text-text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>

                        </div>

                        <div className="m-4">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={api_key}
                                onChange={setCaptchaValue}
                            />
                        </div>
                        <div className="flex w-full justify-center items-centers">
                            <SubmitButton isSubmitting={isSubmitting} />
                        </div>
                    </div>
                </form>
            </div>
        </FlexLayout>

    );
}
