import { GUI } from "all.this";
const {  TextTitle, Section, Gridx, LilBox, ModuleCard } = GUI;
export default function CardsPage() {
  const gridItems = [
    {
      title: "LilBox",
      content: (
        <LilBox
          label="Sample LilBox"
          featherIcon="Box"
          href="/this.GUI/LilBox"
        />
      ),
      xs: 12,
      sm: 6,
      md: 4,
    },
    {
      title: "ModuleCard",
      content: (
        <ModuleCard
          title="ModuleCard Sample"
          description="A more advanced card to show sections or modules."
          href="/this.GUI/ModuleCard"
          image="/neurons.me.png"
        />
      ),
      xs: 12,
      sm: 6,
      md: 4,
    },
  ];

  return (
    <>
      <TextTitle
        title="Cards"
        subtitle="Reusable card components like LilBox and ModuleCard."
      />
      <Section
        padding={{ x: 3, y: 4 }}
        bgcolor="background.default">
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}