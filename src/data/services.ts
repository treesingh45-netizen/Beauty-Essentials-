export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
  icon: string;
}

export interface Service {
  id: string;
  name: string;
  price: string;
  description?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "facial",
    name: "Facial & Skincare",
    description: "Rejuvenate your skin with our premium facial treatments.",
    icon: "Sparkles",
    services: [
      { id: "f1", name: "Basic Clean-Up Facial", price: "PKR 1,500" },
      { id: "f2", name: "Deep Cleansing Facial", price: "PKR 2,500" },
      { id: "f3", name: "Whitening Facial", price: "PKR 3,000" },
      { id: "f4", name: "Acne Treatment Facial", price: "PKR 3,500" },
      { id: "f5", name: "Gold Facial", price: "PKR 4,500" },
      { id: "f6", name: "Hydrafacial (Premium)", price: "PKR 6,000" },
      { id: "f7", name: "Anti-Aging Facial", price: "PKR 5,500" },
      { id: "f8", name: "Dermaplaning Facial", price: "PKR 4,000" },
    ]
  },
  {
    id: "hair",
    name: "Hair Services",
    description: "Transform your look with expert cuts, styling, and treatments.",
    icon: "Scissors",
    services: [
      { id: "h1", name: "Hair Cutting (Ladies)", price: "PKR 1,200 – 2,500" },
      { id: "h2", name: "Hair Styling (Basic)", price: "PKR 1,500" },
      { id: "h3", name: "Blow Dry", price: "PKR 1,000 – 1,800" },
      { id: "h4", name: "Hair Straightening", price: "PKR 4,000 – 8,000" },
      { id: "h5", name: "Keratin Treatment", price: "PKR 8,000 – 15,000" },
      { id: "h6", name: "Hair Botox", price: "PKR 10,000 – 18,000" },
      { id: "h7", name: "Hair Coloring (Global)", price: "PKR 5,000 – 10,000" },
      { id: "h8", name: "Highlights / Balayage", price: "PKR 8,000 – 20,000" },
    ]
  },
  {
    id: "nails",
    name: "Nails Services",
    description: "Pamper your hands and feet with our spa manicures and pedicures.",
    icon: "Palette",
    services: [
      { id: "n1", name: "Basic Manicure", price: "PKR 1,000" },
      { id: "n2", name: "Basic Pedicure", price: "PKR 1,500" },
      { id: "n3", name: "Spa Manicure", price: "PKR 2,000" },
      { id: "n4", name: "Spa Pedicure", price: "PKR 2,500" },
      { id: "n5", name: "Gel Polish", price: "PKR 2,000" },
      { id: "n6", name: "Acrylic Nails", price: "PKR 4,000 – 7,000" },
      { id: "n7", name: "Nail Art (per design)", price: "PKR 500 – 1,500" },
    ]
  },
  {
    id: "waxing",
    name: "Waxing & Threading",
    description: "Smooth out your skin with our gentle hair removal services.",
    icon: "Feather",
    services: [
      { id: "w1", name: "Full Arms Wax", price: "PKR 800" },
      { id: "w2", name: "Full Legs Wax", price: "PKR 1,200" },
      { id: "w3", name: "Full Body Wax", price: "PKR 4,000 – 6,000" },
      { id: "w4", name: "Face Wax", price: "PKR 500" },
      { id: "w5", name: "Brazilian Wax", price: "PKR 2,500 – 3,500" },
      { id: "t1", name: "Eyebrow Threading", price: "PKR 200" },
      { id: "t2", name: "Upper Lip", price: "PKR 150" },
      { id: "t3", name: "Full Face Threading", price: "PKR 600" },
    ]
  },
  {
    id: "makeup",
    name: "Makeup Services",
    description: "Look your absolute best for any occasion.",
    icon: "Brush",
    services: [
      { id: "m1", name: "Party Makeup", price: "PKR 4,000 – 7,000" },
      { id: "m2", name: "Engagement Makeup", price: "PKR 8,000 – 15,000" },
      { id: "m3", name: "Bridal Makeup", price: "PKR 15,000 – 35,000" },
      { id: "m4", name: "HD / Airbrush Makeup", price: "PKR 20,000 – 40,000" },
    ]
  },
  {
    id: "spa",
    name: "Spa & Relaxation",
    description: "Unwind with our soothing massage and body polishing services.",
    icon: "Flower",
    services: [
      { id: "s1", name: "Head Massage", price: "PKR 1,000" },
      { id: "s2", name: "Full Body Massage", price: "PKR 3,500 – 6,000" },
      { id: "s3", name: "Body Scrub", price: "PKR 3,000" },
      { id: "s4", name: "Body Polishing", price: "PKR 5,000" },
      { id: "s5", name: "Foot Spa", price: "PKR 1,500" },
    ]
  },
  {
    id: "bridal",
    name: "Bridal Packages",
    description: "Complete bridal care including makeup, hair, facial, and nails.",
    icon: "Crown",
    services: [
      { id: "b1", name: "Basic Bridal Package", price: "PKR 25,000" },
      { id: "b2", name: "Premium Bridal Package", price: "PKR 50,000+" },
    ]
  }
];
