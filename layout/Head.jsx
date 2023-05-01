import React from 'react';
import Head from 'next/head';

const HeadWrapper = (props) => {
  return (
    <Head>
      <title>{props?.title ? props.title : 'A & E Bakes | Best snacks'}</title>
      <meta
        name='description'
        content={props?.description ? props.description : 'A & E Bakes'}
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default HeadWrapper;
