export async function checkoutSession(id: string) {
    try {
        const res = await fetch(
            "http://127.0.0.1:3000/billing/create-checkout-session",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ product_id_client: id }),
            }
        );

        const data = await res.json();

        if (!res.ok) {
            console.log("Response error in checkoutSessionFunction(): ", data.error);
            return {
                ok: false,
                error: data.error || "Checkout session failed"
            };
        }

        return {
            ok: true,
            checkoutUrl: data.url
        };

    } catch (error) {
        console.log("Unexpected error in checkoutSessionFunction(): ", error);
        return {
            ok: false,
            error: "Unexpected error"
        };
    }
}