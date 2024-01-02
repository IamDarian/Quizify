import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Suggestions from "@/components/Suggestions";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10">
      <Hero />
      <Carousel />
      <Testimonials />
      <Suggestions />
      <h2 className="text-center pb-10">
        Become a creator and <br />
        <span className="text-orange-500 active">Challange Others</span>
      </h2>
      <Link href="/login" className="btn btn-primary btn-lg mb-5">
        Make your own Quiz
      </Link>
    </main>
  );
}
