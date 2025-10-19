import { GUI } from "all.this";
const {  LilBox, CodeBlock } = GUI;
const LilBoxPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>LilBox</h2>
      <p>
        <strong>LilBox</strong> is a compact and stylish component used to display quick links, icons,
        or callouts in a grid. It's minimal, modern, and easy to use.
      </p>

      <h3>Props</h3>
      <ul>
        <li><code>label</code>: (string) The label or text to show inside the box.</li>
        <li><code>icon</code>: (JSX.Element) A Feather icon component to visually represent the content.</li>
        <li><code>href</code>: (string) The destination URL when the box is clicked.</li>
      </ul>

      <h3>How to Use</h3>
      <CodeBlock language="jsx">
{`import LilBox from 'this.GUI/components/Cards/LilBox';

// Example usage
<LilBox 
  label="Dashboard" 
  icon={<GridIcon />} 
  href="/dashboard" 
/>`}
      </CodeBlock>
      <h3>Live Example</h3>
      <div style={{ marginTop: '2rem', width: '120px', height: '120px' }}>
        <LilBox
          label="Go to Dashboard"
          icon={<span style={{ fontSize: '1.5rem' }}>📊</span>}
          href="/dashboard"
        />
      </div>
    </div>
  );
};

export default LilBoxPage;