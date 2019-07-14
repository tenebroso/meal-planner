import { colors } from '../../styles';
import Logo from './Logo';

const SiteHeader = () => (
  <>
    <header>
      <Logo />
    </header>

    <style jsx>
      {`
        header {
          background-color: ${colors.black};
          color: ${colors.white};
          display: flex;
          align-items: center;
          height: 25px;
          padding: 5px;
          position: relative;
          z-index: 10;
        }
      `}
    </style>
  </>
)

export default SiteHeader;