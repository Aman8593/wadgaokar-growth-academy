import Section1Comp from "@/components/Section1";
import Section2Comp from "@/components/Section2";

export default function Home() {
  return (
    <div>
      <section id="#section1">
        <Section1Comp />
      </section>
      <section id="#section2">
        <Section2Comp />
      </section>
    </div>
  );
}
