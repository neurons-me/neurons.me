import { GUI } from "all.this";
const { PageTitle, Section, Gridx, LilBox } = GUI;
import { FiSquare, FiGrid, FiMinus, FiLayout } from "react-icons/fi";

export default function LayoutPage() {
  const layoutItems = [
    {
      label: "Containers",
      icon: <FiSquare />,
      href: "/this.GUI/Containers",
    },
    {
      label: "Grids",
      icon: <FiGrid />,
      href: "/this.GUI/Grids",
    },
    {
      label: "Dividers",
      icon: <FiMinus />,
      href: "/this.GUI/Dividers",
    },
    {
      label: "Section",
      icon: <FiLayout />,
      href: "/this.GUI/Section",
    },
  ];

  return (
    <>
      <PageTitle
        title="Layout Components"
        subtitle="Structure your interface with layout primitives."
      />
      <Section title="Available Layout Components">
        <Gridx>
          {layoutItems.map((item, i) => (
            <LilBox key={i} label={item.label} icon={item.icon} href={item.href} />
          ))}
        </Gridx>
      </Section>
    </>
  );
}