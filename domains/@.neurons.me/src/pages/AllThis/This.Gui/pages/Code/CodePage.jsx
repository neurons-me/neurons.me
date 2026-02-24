import { FiTerminal, FiCodepen, FiCpu } from "react-icons/fi";
import { GUI } from "all.this";
const { TextTitle, Section, Gridx  } = GUI;

export default function CodePage() {
  const items = [
    {
      label: "CodeBlock",
      icon: <FiTerminal />,
      href: "/this.GUI/Code/CodeBlock",
    },
    {
      label: "Playground",
      icon: <FiCodepen />,
      href: "/this.GUI/Code/Playground",
    },
    {
      label: "Snippets",
      icon: <FiCpu />,
      href: "/this.GUI/Code/Snippets",
    },
  ];

  return (
    <>
      <TextTitle
        title="Code Components"
        subtitle="Interactive and display components for code representation, live execution, and sharing."
      />
      <Section title="Code Tools and Views">
        <Gridx items={items.map((item) => (
          <LilBox key={item.label} label={item.label} icon={item.icon} href={item.href} />
        ))} />
      </Section>
    </>
  );
}