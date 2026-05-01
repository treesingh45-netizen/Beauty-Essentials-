export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl?: string;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Beauty Essentials Facial Wash for Acne Blemishes",
    price: 799,
    description: "Facial wash specially designed for acne-prone skin, helps reduce blemishes and control oil.",
    category: "Skincare",
    isPopular: true,
  },
  {
    id: "p2",
    name: "Vitamin C Brightening Serum",
    price: 1299,
    description: "Packed with antioxidants, this serum evens out skin tone and leaves you with a radiant glow.",
    category: "Skincare",
    isPopular: true,
  },
  {
    id: "p3",
    name: "Deep Hydration Rosewater Toner",
    price: 650,
    description: "A calming and hydrating toner that soothes irritated skin and preps it for moisturization.",
    category: "Skincare",
  },
  {
    id: "p4",
    name: "Ultra-Light Daily Sunscreen SPF 50",
    price: 1450,
    description: "Broad-spectrum protection without the greasy feel. Leaves no white cast.",
    category: "Skincare",
    isPopular: true,
  },
  {
    id: "p5",
    name: "Nourishing Argan Hair Oil",
    price: 1050,
    description: "Restores shine, tames frizz, and strengthens hair from root to tip.",
    category: "Hair Care",
  },
  {
    id: "p6",
    name: "Sulfate-Free Keratin Shampoo",
    price: 1200,
    description: "Gentle cleansing formula that prolongs keratin treatments and keeps hair smooth.",
    category: "Hair Care",
  },
  {
    id: "p7",
    name: "Gold Radiance Peel-Off Mask",
    price: 950,
    description: "Luxurious peel-off mask that lifts away impurities and leaves skin glowing.",
    category: "Skincare",
  },
  {
    id: "p8",
    name: "Overnight Renewing Night Cream",
    price: 1600,
    description: "Intense hydration night cream that repairs skin barrier while you sleep.",
    category: "Skincare",
  },
  {
    id: "p9",
    name: "Matte Finish Lip Tints (Set of 3)",
    price: 1800,
    description: "Long-lasting, smudge-proof matte lip tints in three universally flattering shades.",
    category: "Makeup",
  },
  {
    id: "p10",
    name: "Flawless Coverage Liquid Foundation",
    price: 2500,
    description: "Lightweight, buildable foundation that provides a natural, flawless finish.",
    category: "Makeup",
  },
  {
    id: "p11",
    name: "Refreshing Cucumber Eye Gel",
    price: 850,
    description: "Reduces puffiness and dark circles with cooling cucumber extract.",
    category: "Skincare",
  },
  {
    id: "p12",
    name: "Exfoliating Coffee Body Scrub",
    price: 1100,
    description: "Sloughs away dead skin cells and improves circulation for smooth, glowing skin.",
    category: "Body Care",
  }
];
