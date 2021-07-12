/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import ap01 from 'assets/apartamentos/ap01.jpg';
import ap02 from 'assets/apartamentos/ap02.jpg';
import ap03 from 'assets/apartamentos/ap03.jpg';
import frente01 from 'assets/apartamentos/frente01.png';
import frente02 from 'assets/apartamentos/frente02.png';
import frente03 from 'assets/apartamentos/frente03.png';

const data = [
  {
    id: 1,
    title: 'Frente 01',
    img: frente01,
  },
  {
    id: 2,
    title: 'Frente 02',
    img: frente02,
  },
  {
    id: 3,
    title: 'Frente 03',
    img: frente03,
  },
  {
    id: 4,
    title: 'Apartamento 01',
    img: ap01,
  },
  {
    id: 5,
    title: 'Apartamento 02',
    img: ap02,
  },
  {
    id: 6,
    title: 'Apartamento 03',
    img: ap03,
  },
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom:0,
  arrows:true,
  autoPlaySpeed:3000,
  centerMode:true,
  className:"",
  containerClass:"carousel-container",
  // customButtonGroup:<ButtonGroup />,
  dotListClass:"",
  draggable: true,
  focusOnSelect:true,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  // renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:false,
  sliderClass:"",
  slidesToSlide:1,
}

export default function Apartamentos() {
  return (
   <section id="apartamentos" sx={{ variant: 'section.apartamentos'}}>
     <Container css={{ textAlign: 'center' }}>
       <SectionHeader
        slogan="Apartamentos"
        title="Conheça alguns de nossos apartamentos"
       />
     </Container>
     <Box sx={styles.carouselWrapper}>
       <Carousel {...carouselParams}>
        {data.map((item) => (
          <Box sx={styles.aptoCard} key={item.id}>
            <Heading as="h3" sx={styles.title}>
              {item.title}
            </Heading>
            <div className="image">
              <Image src={item.img} alt="Imagem do apartamento" />
            </div>
          </Box>
        ))}
       </Carousel>
     </Box>
   </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  aptoCard: {
    // boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    bg: 'white',
    textAlign: 'center',
    // '&:hover': {
    //   boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    // },
    '.image': {
      mr: [3, null, null, 4],
      display: 'block',
      img: {
        width: '700px',
        height: '500px',
        // borderRadius: '50%',
        objectFit: 'cover',
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
