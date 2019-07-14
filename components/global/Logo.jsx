import { colors, typography } from '../../styles';
import '../../static/branding/logo.svg';

export const Logo = () => (
  <>
    <svg width="100%" viewBox="0 0 100 100" className="logo">
      <use xlinkHref={'#logo'} />
    </svg>
    <h1>GramCruncher</h1>
    <style jsx>
      {
        `
          svg {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: ${colors.grey.dark};
            padding: 20px;
            transform: translate(-12px, 0);
            fill: ${colors.white};
          }

          h1 {
            font-size: .65rem;
            text-transform: uppercase;
            margin: 0 0 0 5px;
            line-height: 25px;
            color: ${colors.white};
            font-family: ${typography.font.sans};
            letter-spacing: .05rem;
          }
        `
      }
    </style>
  </>
);

Logo.displayName = 'components/global/Logo';

export default Logo;
