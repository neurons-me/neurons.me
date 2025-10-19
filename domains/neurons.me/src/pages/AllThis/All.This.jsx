import { Grid } from "@mui/material";
import { GUI } from 'all.this';
const { TextQuote, ModuleCard, CodeBlock } = GUI;
export default function AllThis() {
  return (
    <div style={{ padding: '1.168rem', margin: '0 auto' }}>
    {/*
<Callout type="warning" sx={{ mb: '1.5rem', textAlign: 'center' }}>
  This repository is in continuous development and may be unstable.
</Callout>
*/}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img
            src="/media/all-this/webp/all.this.webp"
            alt="Neurons Logo"
            style={{ width: '300px', height: 'auto', filter: 'var(--image-filter)' }}
          />
      </div>
        {/*
      <h1 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>
        All.This:
      </h1>

      <TextQuote>
        A modular system to make data usable and intelligent by design.
      </TextQuote>*/}
      
      <section style={{ marginBottom: '2rem' }}>

      </section>
      <section style={{ marginTop: '3rem' }}>
        <Grid container spacing={2}>
          {[
            {
              title: ".me",
              description: "Identity management simplified.",
              link: "/this.me",
              image: "/media/all-this/webp/this.me.webp",
            },
            {
              title: ".wallet",
              description: "Secure wallet integration.",
              link: "/this.wallet",
              image: "/media/all-this/webp/this.wallet.webp",
            },
            {
              title: ".env",
              description: "Environment management tools.",
              link: "/this.env",
              image: "/media/all-this/webp/this.env.webp",
            },
            {
              title: ".GUI",
              description: "Custom GUI components.",
              link: "/this.GUI",
              image: "/media/all-this/this.GUI.png",
            }
          ].map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <ModuleCard
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  )
}