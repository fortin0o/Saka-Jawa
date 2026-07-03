import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Footer from "../components/shared/Footer";
import SmoothScrolling from "../components/shared/SmoothScrolling";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://sakajawa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Saka Jawa",
    template: "%s | Saka Jawa",
  },
  applicationName: "Saka Jawa",
  appleWebApp: {
    title: "Saka Jawa",
  },
  description:
    "Saka Jawa — Jelajahi kekayaan budaya Jawa: Batik, Wayang, Gamelan, dan Kuliner Tradisional. Website pelestarian budaya Jawa untuk generasi muda.",
  keywords: [
    "Saka Jawa",
    "sakajawa",
    "budaya Jawa",
    "batik Jawa",
    "wayang kulit",
    "gamelan",
    "kuliner Jawa",
    "kebudayaan Jawa",
    "warisan budaya",
    "seni tradisional Jawa",
    "batik Solo",
    "wayang Jawa",
    "musik gamelan",
    "makanan tradisional Jawa",
    "Golek Howo",
    "pelestarian budaya",
  ],
  authors: [{ name: "Tim Saka Jawa", url: BASE_URL }],
  creator: "Tim Saka Jawa",
  publisher: "Saka Jawa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "Saka Jawa",
    title: "Saka Jawa — Budaya Jawa",
    description:
      "Jelajahi kekayaan budaya Jawa: Batik, Wayang, Gamelan, dan Kuliner Tradisional.",
    images: [
      {
        url: "/Assets/Logo Utama.svg",
        width: 1200,
        height: 630,
        alt: "Saka Jawa — Budaya Jawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saka Jawa — Budaya Jawa",
    description:
      "Jelajahi kekayaan budaya Jawa: Batik, Wayang, Gamelan, dan Kuliner Tradisional.",
    images: ["/Assets/Logo Utama.svg"],
  },
  icons: {
    icon: "/Assets/Logo Utama.svg",
    shortcut: "/Assets/Logo Utama.svg",
    apple: "/Assets/Logo Utama.svg",
  },
  verification: {
    google: "k7S7SzDmRqJDPfk6b6TjVKvcypjfOnKwLQrTaZR72e0",
  },
};

// JSON-LD: WebSite schema + SiteNavigationElement agar Google menampilkan sitelinks
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Saka Jawa",
      description:
        "Website pelestarian budaya Jawa: Batik, Wayang, Gamelan, dan Kuliner Tradisional.",
      inLanguage: "id-ID",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SiteLinksSearchBox",
      url: BASE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      name: "Budaya Jawa",
      description: "Jelajahi ragam budaya Jawa yang kaya dan beragam",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Batik Jawa",
          description:
            "Jelajahi keindahan dan filosofi batik Jawa — motif, sejarah, dan warisan budaya leluhur.",
          url: `${BASE_URL}/batik`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Wayang Kulit",
          description:
            "Kenali wayang kulit Jawa — tokoh, cerita, dan filosofi di balik pertunjukan tradisional.",
          url: `${BASE_URL}/wayang`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Gamelan",
          description:
            "Pelajari gamelan Jawa — instrumen, harmoni, dan peran musik dalam budaya Nusantara.",
          url: `${BASE_URL}/gamelan`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Kuliner Jawa",
          description:
            "Cita rasa kuliner Jawa — resep tradisional, filosofi makan, dan warisan gastronomi.",
          url: `${BASE_URL}/kuliner`,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${leagueSpartan.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <SmoothScrolling>
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
