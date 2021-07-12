/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Container, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import { FaWhatsapp } from 'react-icons/fa';


export default function Contato() {
  return (
    <section sx={styles.contato} id="contato">
      <Container>
        <SectionHeader
          title="Contato"
          isWhite={true}
        />
        <Container>
          <Text as="h1" css={{ textAlign: 'center', color: 'white'}}>
            Edilson Mendes
          </Text>
          <Text as="h1" sx={styles.phoneNumber}>
            <FaWhatsapp />
            (85)9 9902-0527
          </Text>
        </Container>

      </Container>
    </section>
  );
}

const styles = {
  contato: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  phoneNumber: {
    textAlign: 'center',
    color: 'white',
    '&:first-child': {
      mx: '5px',
    }
  },  
}
