import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Apartamentos from '../sections/apartamentos';
import Banner from '../sections/banner';
import Localization from '../sections/localization';
import Contato from 'sections/contato';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Edifício Comandante Mendes" author="Edilson Mendes" description="Melhores kitnets para alugar na Serrinha em Fortaleza!" />
          <Banner />
          <Apartamentos />
          <Localization />
          <Contato />
        </Layout>
    </ThemeProvider>
  );
}
