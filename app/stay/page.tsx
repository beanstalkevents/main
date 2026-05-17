import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StayBody from "@/components/StayBody";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stay — Beanstalk 2026",
  description:
    "Two Manhattan hotels with Beanstalk-rate room blocks, both 20 minutes from Industry City with morning shuttles provided. September 14–16, 2026.",
  openGraph: {
    title: "Stay — Beanstalk 2026",
    description:
      "Two Manhattan hotels with Beanstalk-rate room blocks, both 20 minutes from Industry City with morning shuttles provided.",
    type: "website",
  },
};

export default function StayPage() {
  return (
    <div style={{ background: "#0a0a0a", color: "#fcf9ec" }}>
      <Nav />
      <StayBody />
      <Footer />
    </div>
  );
}
