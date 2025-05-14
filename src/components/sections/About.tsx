import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Check } from "lucide-react";
import AboutMeImage from "@/assets/about-me.jpg";

export function About() {
  const expertise = [
    "Local Hidden Trails Expert",
    "5+ Years of Trail Experience",
    "Passionate Nature Enthusiast",
    "Singapore Flora & Fauna Knowledge",
    "Conservation Advocate",
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={AboutMeImage}
              alt="Stephen Alvin, Hiking Guide"
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              title="Meet Stephen Alvin"
              subtitle="Your Expert Singapore Hiking Guide"
              centered={false}
            />

            <div className="space-y-4 text-lg">
              <p>
                Raised in Singapore, I've spent the last decade exploring every
                hidden trail and natural wonder this island has to offer. What
                started as weekend adventures became my passion and profession.
              </p>

              <p>
                Having guided countless hiking experiences, I specialize in
                creating memorable adventures that balance nature exploration,
                wildlife spotting, and local history. My trails are designed for
                all ages and fitness levels.
              </p>

              <br/>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">My Expertise:</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {expertise.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 p-1">
                        <Check className="h-5 w-5 text-primary" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
