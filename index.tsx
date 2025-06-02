import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 border-b shadow-sm flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="SHUVI Areté A.E." width={48} height={48} />
          <div className="text-2xl font-bold text-blue-900">SHUVI Areté A.E.</div>
        </div>
        <div className="text-sm text-gray-500">Building Excellence. Shaping Greece.</div>
      </header>

      <main className="p-8 max-w-4xl mx-auto grid gap-10">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Real Estate & Development</h1>
          <p className="text-lg">We blend modern design with Greek tradition, delivering premium properties for both international investors and local homeowners.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc pl-6">
            <li>Luxury Property Sales</li>
            <li>Project Development</li>
            <li>Investor Consultation</li>
            <li>Full Project Management</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <form action="https://formsubmit.co/info@shuviarete.gr" method="POST" className="grid gap-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.shuviarete.gr/thank-you" />
            <input type="text" name="name" placeholder="Your Name" className="border p-2 rounded" required />
            <input type="email" name="email" placeholder="Your Email" className="border p-2 rounded" required />
            <textarea name="message" placeholder="Your Message" rows="4" className="border p-2 rounded" required></textarea>
            <Button type="submit">Send Message</Button>
          </form>
        </section>
      </main>
    </div>
  );
}
