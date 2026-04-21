export type TermsContent =
    | { type: "text"; value: string }
    | { type: "list"; value: string[] }
    | { type: "link"; value: string };

export interface TermsSection {
    title: string;
    content: TermsContent[];
}

export const termsOfService: TermsSection[] = [
    {
        title: "1. Introduction",
        content: [
            { type: "text", value: "Welcome to Mapswapp." },
            {
                type: "text",
                value: "These Terms of Service ('Terms') govern your use of the Mapswapp website and services (the 'Service'). By accessing or using the Service, you agree to be bound by these Terms."
            },
            {
                type: "text",
                value: "If you do not agree with these Terms, you should not use the Service."
            },
            {
                type: "text",
                value: "Mapswapp is currently operated by an individual and may transition to a registered business entity in the future."
            }
        ]
    },
    {
        title: "2. Use of Service",
        content: [
            {
                type: "text",
                value: "Mapswapp provides digital travel itineraries accessible through a Google Maps link."
            },
            {
                type: "list",
                value: [
                    "Use is limited to personal, non-commercial purposes",
                    "You may not share purchased itinerary links",
                    "You may not resell or redistribute itineraries",
                    "No bots, scraping, or automated access allowed",
                    "No attempt to extract or copy platform data",
                    "No misuse or disruption of the service"
                ]
            },
            {
                type: "text",
                value: "We reserve the right to suspend access in case of violations."
            }
        ]
    },
    {
        title: "3. Accounts",
        content: [
            { type: "text", value: "No account is required to use the Service." },
            {
                type: "text",
                value: "You must provide a valid email address during checkout."
            },
            {
                type: "text",
                value: "You are responsible for the accuracy of your email address."
            }
        ]
    },
    {
        title: "4. Payments",
        content: [
            { type: "text", value: "All purchases are one-time payments." },
            {
                type: "text",
                value: "Prices vary depending on the itinerary."
            },
            {
                type: "text",
                value: "All sales are final and non-refundable."
            },
            {
                type: "text",
                value: "Refunds may be issued only if delivery fails due to a technical issue."
            }
        ]
    },
    {
        title: "5. Content",
        content: [
            {
                type: "text",
                value: "Itineraries are created by Mapswapp and collaborators."
            },
            {
                type: "text",
                value: "Content is based on personal experience and curated recommendations."
            },
            {
                type: "text",
                value: "We do not guarantee accuracy or availability of locations."
            }
        ]
    },
    {
        title: "6. Liability",
        content: [
            {
                type: "text",
                value: "The Service is provided 'as is' without warranties."
            },
            {
                type: "text",
                value: "We do not guarantee specific outcomes or experiences."
            },
            {
                type: "text",
                value: "Users are responsible for their own travel decisions and safety."
            }
        ]
    },
    {
        title: "7. Changes",
        content: [
            {
                type: "text",
                value: "We may update these Terms at any time."
            },
            {
                type: "text",
                value: "We may change prices, features, or discontinue the Service."
            }
        ]
    },
    {
        title: "8. Contact",
        content: [
            {
                type: "text",
                value: "For any questions, contact us at:"
            },
            {
                type: "link",
                value: "support@mapswapp.com"
            }
        ]
    }
];