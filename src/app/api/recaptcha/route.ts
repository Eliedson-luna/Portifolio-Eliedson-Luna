import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { token, expectedAction } = await request.json();

        if (!token || !expectedAction) {
            return NextResponse.json({ error: "Missing token or expectedAction" }, { status: 400 });
        }

        const response = await fetch(
            `https://recaptchaenterprise.googleapis.com/v1/projects/portifolioelieds-1742338758804/assessments?key=${process.env.RECAPTCHA_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    event: {
                        token,
                        expectedAction,
                        siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                    },
                }),
            }
        );

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Error verifying reCAPTCHA:", error?.message);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
