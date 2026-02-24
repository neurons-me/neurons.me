import { Grid } from "@mui/material";
import { GUI } from 'all.this';
const { ModuleCard, Hero2 } = GUI;
export default function AppsPage() {
  return (
    <div style={{ padding: '1.168rem', margin: '0 auto' }}>
      {/* Header Section */}
      <Hero2
        videoSrc="/apps/neurons1.mp4"
        title="Discover"
        height="220px"
        overlayColor="grey"
        overlayOpacity={.5}
        overlayBlur="3px"
      />
      {/* Apps Grid */}
      <section style={{ marginTop: '2rem' }}>
        <Grid container spacing={2}>
          {[
            {
              src: '/media/cleaker-logo.webp',
              alt: 'Cleaker',
              name: 'Cleaker',
              width: '94px',
              description: 'Identidad descentralizada y login universal.',
              link: '/cleaker',
              categories: ['Identidad', 'Login', 'Blockchain'],
              keywords: ['DID', 'identidad', 'login', 'descentralizado', 'wallet']
            },
            {
              src: '/media/netget.webp',
              alt: 'NetGet',
              name: 'NetGet',
              width: '89px',
              description: 'Gestor de dominios, HTTPS y rutas por puerto.',
              link: '/netget',
              categories: ['Infraestructura', 'Redes', 'Servidores'],
              keywords: ['dominios', 'https', 'reverse proxy', 'routing']
            },
            {
              src: '/media/CopyTo.webp',
              alt: 'CopyTo(0-9)',
              name: 'CopyTo(0-9)',
              width: '69px',
              description: 'Herramienta para duplicar datasets fácilmente.',
              link: '/copyto',
              categories: ['Datos', 'Herramientas'],
              keywords: ['datasets', 'copiar', 'duplicar', 'automatización']
            },
            {
              src: '/media/apps/webp/pixelgrid.webp',
              alt: 'PixelGrid',
              name: 'PixelGrid',
              description: 'Streamer de imagen/video: webcam o escritorio.',
              link: '/pixelgrid',
              categories: ['Multimedia', 'Streaming'],
              keywords: ['stream', 'video', 'webcam', 'escritorio']
            },
            {
              src: '/apps/i.mlearning.webp',
              alt: 'i.mLearning',
              name: 'i.mLearning',
              description: 'Datasets y playground para ML hecho en casa.',
              link: '/i.mlearning',
              categories: ['Machine Learning', 'Datasets'],
              keywords: ['ml', 'datasets', 'ia', 'playground']
            },
            {
              src: '/apps/fulltrailer-tractor-removebg.webp',
              alt: 'FullTrailer',
              name: 'FullTrailer',
              description: 'Automatiza trailers y rutas con IA.',
              link: '/fulltrailer',
              categories: ['IA', 'Video', 'Automatización'],
              keywords: ['trailers', 'video', 'automatización', 'generativo']
            },
            {
              src: '/apps/polls.studio.webp',
              alt: 'Polls.Studio',
              name: 'Polls.Studio',
              description: 'Encuestas interactivas y visualización avanzada.',
              link: '/polls.studio',
              categories: ['Encuestas', 'Data Viz'],
              keywords: ['polls', 'estadísticas', 'interactivo', 'visualización']
            },
            {
              src: '/apps/musicLab-logo.png',
              alt: 'MusicLab',
              name: 'MusicLab',
              description: 'Experimenta con loops, audio y composición.',
              link: '/musiclab',
              categories: ['Música', 'IA', 'Audio'],
              keywords: ['loops', 'composición', 'sintetizadores', 'midi']
            },
            {
              src: '/apps/divingStudio.webp',
              alt: 'Diving.studio',
              name: 'Diving.studio',
              description: 'Explora mundos 3D interactivos y XR.',
              link: '/diving.studio',
              categories: ['3D', 'Experiencias XR'],
              keywords: ['3d', 'xr', 'realidad virtual', 'entornos inmersivos']
            },
            {
              src: '/apps/Arche.webp',
              alt: 'Arche',
              name: 'Arche',
              description: 'Framework para modelos neuronales avanzados.',
              link: '/arche',
              categories: ['IA', 'Frameworks'],
              keywords: ['neural networks', 'framework', 'deep learning']
            },
            {
              src: '/apps/orgboat_logo.png',
              alt: 'OrgBoat',
              name: 'OrgBoat',
              description: 'Organiza proyectos y equipos con precisión.',
              link: '/orgboat',
              categories: ['Organización', 'Colaboración'],
              keywords: ['proyectos', 'equipos', 'gestión', 'planificación']
            },
            {
              src: '/apps/mexicoEncuesta.png',
              alt: 'MéxicoEncuesta',
              name: 'México Encuesta',
              description: 'Temas de interés social mexicano.',
              link: '/mexicoencuesta',
              categories: ['Social', 'Educación', 'Noticias', 'Política'],
              keywords: ['Política', 'México', 'Social', 'Encuestas', 'Cultura', 'Público', 'Salud', 'Educación', 'Trabajo']
            }
          ].map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <ModuleCard
                title={item.name}
                description={item.description}
                image={item.src}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
}