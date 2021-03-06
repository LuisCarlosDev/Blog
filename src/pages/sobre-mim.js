import React from 'react';

import Layout from '../components/Layout';
import Grid from '../components/Grid';
import Presentation from '../components/Presentation';
import GoBack from '../components/GoBack';

export default function HomePage() {
  return (
    <Layout>
      <Grid>
        <Presentation full />

        <GoBack to="/" color="rgba(255, 255, 255, 0.6)" />
      </Grid>
    </Layout>
  );
}
