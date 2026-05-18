import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kinesvelt.com";

const prestations = [
  "alma-primex-visage",
  "booster-skin-eclat",
  "capillaires",
  "contouring-ovale-visage",
  "corps",
  "cure-allaitement",
  "cure-bodycontouring-full-body",
  "cure-post-accouchement",
  "cure-renforcement-musculaire",
  "cure-speciale-cellulite",
  "cure-thyroide-opk-diabete",
  "cure-zone-localisee",
  "drainage-post-operatoire",
  "endymed",
  "epilation-laser",
  "exilis-lifting-visage",
  "graisse-double-menton",
  "hifu-vaginal",
  "hydrafacial-signature",
  "intime",
  "lpg-visage-kobido",
  "luxury-adn-saumon",
  "luxury-caviar",
  "mesojectgun",
  "microneedling-visage",
  "pack-anti-age",
  "pack-lifting-full-face",
  "peeling-led",
  "radiofrequence-fractionnee",
  "soin-visage-complet",
  "soins-anti-acne",
  "traitement-colombien-fessier",
  "visage",
];

const equipements = [
  "alma-primex-corps",
  "ems-neo-btl",
  "emsculpt",
  "emtone-btl",
  "endospheres",
  "exilis-btl",
  "i-lipo",
  "lipocavitation",
  "lpg",
  "maderotherapie",
  "ondes-de-choc",
  "pressotherapie",
  "radiofrequence",
  "t-care-slim",
  "velashape-3",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/le-centre`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/prestations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/equipements`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/reservation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const prestationPages: MetadataRoute.Sitemap = prestations.map((slug) => ({
    url: `${SITE_URL}/prestations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const equipementPages: MetadataRoute.Sitemap = equipements.map((slug) => ({
    url: `${SITE_URL}/equipements/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...prestationPages, ...equipementPages];
}
