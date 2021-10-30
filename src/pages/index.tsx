import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import ContactInfo from 'components/ContactInfo';
import Skills from '../components/Skills/index';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <Skills />
      <Services />
      <ContactInfo />
    </Layout>
  );
};

export default IndexPage;
