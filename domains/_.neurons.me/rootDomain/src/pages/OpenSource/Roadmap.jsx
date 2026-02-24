import React from 'react'
import { Link } from 'react-router-dom'

export default function Roadmap() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
          <img
            src="/media/roadmap_neurons.png"
            alt="Neurons Logo"
            style={{ width: '300px', height: 'auto', filter: 'var(--image-filter)' }}
          />
        </Link>
      </div>
      <h1 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' }}>
        The Roadmap Behind neurons.me
      </h1>
      <blockquote style={{ fontStyle: 'italic', marginBottom: '2rem', color: '#555' }}>
        “Building a modular, ethical, and user-controlled ecosystem for the AI era.”
      </blockquote>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          The Core Vision
        </h2>
        <p>
          neurons.me is an open-source initiative to reimagine the role of data and identity in the age of AI. It provides a modular ecosystem of JavaScript libraries and services that allow individuals and developers to structure, control, and activate their data meaningfully.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          all.this — The Data Structurer
        </h2>
        <p>
          The <code>all.this</code> library is the backbone of the system. It includes modular data handlers for images, audio, text, files, and more — all written in JavaScript. These modules clean, normalize, and shape data into formats ready to be embedded into machine learning pipelines or fed into deep learning algorithms.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          i.mlearning — Collaborative Data Curation
        </h2>
        <p>
          <code>i.mlearning</code> is a library designed to allow users and developers to create, expand, and refine datasets. It's built on the idea that valuable AI should be trained on meaningful, transparent, and collectively-built datasets, not hidden corporate silos.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          this.me — Decentralized Identity by Design
        </h2>
        <p>
          <code>this.me</code> is our system for defining and managing identity. It operates locally, respecting the user’s privacy, and can store key-value pairs that define the identity’s capabilities and traits. It supports a unique signature and stamp system, allowing identities to verify actions and attributes without relying on central servers.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          The Big Picture
        </h2>
        <p>
          Together, these tools form a full-stack environment where data, identity, and machine learning converge. Our roadmap is about making sure this ecosystem empowers individuals, not just institutions. We’re building tools that let users grow their intelligence with AI — not just feed it.
        </p>
        <Link
          to="/contact"
          style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            textDecoration: 'none',
            color: '#333',
          }}
        >
          Contact Us to Join the Journey
        </Link>
      </section>

 
    </div>
  )
}
