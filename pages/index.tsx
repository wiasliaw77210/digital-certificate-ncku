import React from 'react';
import Head from 'next/head';

import Nav from '../components/nav';
import Section from '../components/section';
import Form from '../components/form';

const Index: React.FC = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
    <Section>
      <Form />
    </Section>
  </div>
);

export default Index;
