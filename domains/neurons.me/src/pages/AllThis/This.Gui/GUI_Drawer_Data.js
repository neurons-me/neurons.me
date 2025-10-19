const GUI_Drawer_Data = {
  title: "Components",
  items: [
    {
      label: "AppBars",
      icon: "Navigation",
      children: [
        { label: "Footer", href: "/this.GUI/Footer" },
        { label: "NavBar", href: "/this.GUI/NavBar" },
        { label: "RightContextDrawer", href: "/this.GUI/RightContextDrawer" },
        { label: "TopBarAndSideBar", href: "/this.GUI/TopAndSideBar" },
        { label: "StickyOptions", href: "/this.GUI/StickyOptions" }
      ],
    },
    {
      label: "Buttons",
      icon: "Box",
      children: [],
    },
    {
      label: "Cards",
      icon: "Layers",
      children: [
        { label: "ModuleCard", href: "/this.GUI/ModuleCard" },
        { label: "LilBox", href: "/this.GUI/LilBox" },
        { label: "GridMe", href: "/this.GUI/Gridme" }

      ],
    },
    {
      label: "Code",
      icon: "Code",
      children: [
        { label: "CodeBlock", href: "/this.GUI/CodeBlock" },
      ],
    },
    {
      label: "Feedback",
      icon: "MessageCircle",
      children: [
        { label: "Callout", href: "/this.GUI/Callout" },
      ],
    },
    {
      label: "Media",
      icon: "Image",
      children: [
        { label: "Video Embed", href: "/this.GUI/VideoEmbed" },
        { label: "Image", href: "/this.GUI/Img" },
      ],
    },
    {
      label: "Organization",
      icon: "List",
      children: [
        { label: "Table Of Contents", href: "/this.GUI/TableOfContents" },
        { label: "Tabs", href: "/this.GUI/Tabs" },
      ],
    },
    {
      label: "Text",
      icon: "Type",
      children: [
        { label: "Lists", href: "/this.GUI/TextList" },
        { label: "Paragraphs", href: "/this.GUI/TextParagraph" },
        { label: "Titles", href: "/this.GUI/TextTitle" },
        { label: "Quotes", href: "/this.GUI/TextQuote" },
      ],
    },
    { type: 'label', label: 'Layout' },
    {
      label: "Layout",
      icon: "Grid",
      children: [
        { label: "Container", href: "/this.GUI/Containers" },
        { label: "GridX", href: "/this.GUI/Grid" },
        { label: "Divider", href: "/this.GUI/PageDivider" },
        { label: "Section", href: "/this.GUI/Section" },
        { label: "Section Header", href: "/this.GUI/SectionHeader" },
      ],
    }
  ],
};

export default GUI_Drawer_Data;