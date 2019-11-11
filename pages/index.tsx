import React, { useState } from 'react';
import Head from 'next/head';

import Nav from '../components/nav';
import Section from '../components/section';
import Form from '../components/form';
import IndexReady from '../components/indexAndIssueReady';
import IndexFinal from '../components/indexAndIssueFinal';
import { IndexState, IStudent } from '../constant';

const Index: React.FC = () => {
  const [currentState, setCurrent] = useState<IndexState>(IndexState.INPUT);
  const [user, setUser] = useState<IStudent>();
  return (
    <main>
      <Head>
        <title>初辦</title>
      </Head>
      <Nav />
      <Section>
        {currentState === IndexState.INPUT ? (
          <Form
            onSuccess={student => {
              if (student && typeof student !== 'boolean') {
                setUser(student);
                setCurrent(IndexState.SUCCESS);
              } else {
                setCurrent(IndexState.FAILURE);
              }
            }}
          />
        ) : currentState === IndexState.READY ? (
          <IndexReady
            status={currentState}
            setCurrent={setCurrent}
            data={user}
          />
        ) : (
          <IndexFinal
            status={currentState}
            setCurrent={setCurrent}
            data={user}
          />
        )}
      </Section>
    </main>
  );
};

export default Index;