// src/pages/MdxPage.jsx
import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

const MdxPage = () => {
    const { slug } = useParams();

    // Dynamic import based on slug
    const MdxComponent = lazy(() => import(`./AboutUs/mdx/${slug}.mdx`).catch(() => import('./NotFound')));

    return (
        <div style={mdxPageStyle}>
            <h1>{slug.replace(/-/g, ' ').toUpperCase()}</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <MdxComponent />
            </Suspense>
        </div>
    );
};

// Basic styling
const mdxPageStyle = {
    padding: '40px',
    color: '#fff',
    backgroundColor: '#222',
    minHeight: '100vh',
};

export default MdxPage;