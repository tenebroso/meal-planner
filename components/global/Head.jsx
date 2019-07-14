import Head from 'next/head';
import tl8 from '../../utilities/tl8';

const Header = () => (
  <Head>
    <title>{tl8.t('global.app')}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" 
      integrity="sha256-UzFD2WYH2U1dQpKDjjZK72VtPeWP50NoJjd26rnAdUI=" 
      crossOrigin="anonymous" 
    />
    <link href="https://fonts.googleapis.com/css?family=DM+Serif+Text|PT+Sans&display=swap" rel="stylesheet" />
  </Head>
);

export default Header;
