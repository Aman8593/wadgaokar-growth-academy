import Section1Comp from "@/components/Section1";
import Section2Comp from "@/components/Section2";
import Section3Comp from "@/components/Section3";

export default function Home() {
  return (
    <div className="main-conatiner">
      <section id="home">
        <Section1Comp />
      </section>
      <section id="services">
        <Section2Comp />
      </section>
      <section id="courses">
        <Section3Comp />
      </section>
    </div>
  );
}
