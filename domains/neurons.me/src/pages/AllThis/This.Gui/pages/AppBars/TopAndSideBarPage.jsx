import { GUI } from "all.this";
const { TextTitle, Section, Gridx, CodeBlock} = GUI;
import { Typography } from "@mui/material";

export default function TopAndSideBarPage() {
  const gridItems = [
    {
      title: "What is TopBarAndSideBar?",
      content: (
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>TopBarAndSideBar</strong> combina una barra superior (TopBar) y una barra lateral (SideBar)
          para navegación en aplicaciones. Es totalmente configurable a través de props.
        </Typography>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Sidebar with nested levels",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            To display items in the sidebar, use the prop <code>sideBarLinks</code>. It accepts an array of objects where each object can include <code>children</code> to create nested levels.
          </Typography>
          <CodeBlock language="jsx">
{`const sideBarLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
    external: false
  },
  {
    label: "Proyectos",
    path: "/projects",
    external: false,
    children: [
      {
        label: "Activos",
        path: "/projects/active",
        external: false,
        children: [
          { label: "Proyecto A", path: "/projects/active/a", external: false },
          { label: "Proyecto B", path: "/projects/active/b", external: false }
        ]
      },
      {
        label: "Archivados",
        path: "/projects/archived",
        external: false
      }
    ]
  }
];`}
          </CodeBlock>
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Top bar navigation links",
      content: (
        <>
          <Typography variant="body2" sx={{ mb: 1 }}>
            The <code>topNavLinks</code> prop adds links to the top bar. It also supports dropdown menus through <code>children</code>.
          </Typography>
          <CodeBlock language="jsx">
{`const topNavLinks = [
  { label: "Home", path: "/", external: false },
  {
    label: "NavLinkDrop",
    children: [
      {
        label: "Child 1",
        children: [
          { label: "Child-Child 1A", path: "/navlinkdrop/child1/a", external: false },
          { label: "Child-Child 1B", path: "/navlinkdrop/child1/b", external: false }
        ]
      },
      {
        label: "Child 2",
        children: [
          { label: "Child-Child 2A", path: "/navlinkdrop/child2/a", external: false }
        ]
      }
    ]
  }
];`}
          </CodeBlock>
        </>
      ),
      xs: 12,
      md: 12,
    },
    {
      title: "Full usage example",
      content: (
        <CodeBlock language="jsx">
{`<TopBarAndSideBar
  title="Mi App"
  logo="/logo.png"
  sideBarLinks={sideBarLinks}
  topNavLinks={topNavLinks}
/>`}
        </CodeBlock>
      ),
      xs: 12,
      md: 12,
    },
  ];

  return (
    <>
      <TextTitle
        title="TopBarAndSideBar"
        subtitle="A combined top bar and side navigation for applications."
      />
      <Section title="Overview">
        <Gridx items={gridItems} />
      </Section>
    </>
  );
}