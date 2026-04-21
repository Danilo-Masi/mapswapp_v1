type PrivacySection = {
    id: string;
    title: string;
    content: string[];
    list?: string[];
    link?: string;
};

export const privacyPolicy: PrivacySection[] = [
    {
        id: "introduction",
        title: "1. Introduction",
        content: [
            "This Privacy Policy explains how Mapswapp (“we”, “us”, or “our”) collects, uses, and protects your information when you use our service.",
            "By using Mapswapp, you agree to the collection and use of information in accordance with this policy."
        ]
    },
    {
        id: "data_collected",
        title: "2. Data We Collect",
        content: [
            "We collect only the information necessary to provide our service."
        ],
        list: [
            "Email address (provided during checkout)",
            "Transaction-related information (via third-party payment provider)",
            "Anonymous usage data (via privacy-friendly analytics tools)"
        ]
    },
    {
        id: "usage",
        title: "3. How We Use Your Data",
        content: [
            "We use the collected data strictly to operate and improve the service."
        ],
        list: [
            "To process and confirm purchases",
            "To deliver purchased itineraries via email",
            "To provide customer support",
            "To improve product experience and performance"
        ]
    },
    {
        id: "payments",
        title: "4. Payments",
        content: [
            "All payments are processed securely through third-party providers (Creem).",
            "We do not collect or store your payment details such as credit card numbers."
        ]
    },
    {
        id: "third_parties",
        title: "5. Third-Party Services",
        content: [
            "We rely on trusted third-party services to operate Mapswapp."
        ],
        list: [
            "Supabase (data storage)",
            "Resend (email delivery)",
            "Simple Analytics (privacy-friendly analytics)",
            "Creem (payment processing)"
        ]
    },
    {
        id: "analytics",
        title: "6. Analytics and Cookies",
        content: [
            "We use Simple Analytics, a privacy-friendly analytics tool that does not use cookies or track users across websites.",
            "No cookie banner is required as no personal tracking cookies are used."
        ]
    },
    {
        id: "data_retention",
        title: "7. Data Retention",
        content: [
            "We retain your email and transaction-related data for as long as necessary to provide the service and ensure its proper functioning.",
            "Some data may be retained for legal, accounting, or fraud prevention purposes."
        ]
    },
    {
        id: "user_rights",
        title: "8. Your Rights",
        content: [
            "Depending on your location, you may have rights regarding your personal data."
        ],
        list: [
            "Request access to your data",
            "Request correction of inaccurate data",
            "Request deletion of your data (where legally applicable)",
            "Object to data processing"
        ]
    },
    {
        id: "security",
        title: "9. Data Security",
        content: [
            "We implement appropriate technical measures to protect your data.",
            "All data is transmitted over secure HTTPS connections."
        ]
    },
    {
        id: "international",
        title: "10. International Users",
        content: [
            "By using Mapswapp, you understand that your data may be processed in countries outside your own, including the European Union."
        ]
    },
    {
        id: "changes",
        title: "11. Changes to This Policy",
        content: [
            "We may update this Privacy Policy at any time.",
            "Changes will be posted on this page with an updated revision date."
        ]
    },
    {
        id: "contact",
        title: "12. Contact",
        content: [
            "If you have any questions about this Privacy Policy or your data, contact us at:"
        ],
        link: "support@mapswapp.com"
    }
];