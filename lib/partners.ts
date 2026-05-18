export type Partner = {
  role: string;
  name: string;
  href: string;
  lead?: boolean;
};

export const PARTNERS: Partner[] = [
  { role: "Founding Partner", name: "NBCUniversal", href: "#", lead: true },
  { role: "Official Banking Partner", name: "Highbeam", href: "#" },
  { role: "Official Logistics Partner", name: "Flexport", href: "#" },
  { role: "Official CX Partner", name: "Richpanel", href: "#" },
];
