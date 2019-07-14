import '../../../static/icons/expander.svg';
import '../../../static/icons/expander-closed.svg';
import { colors } from '../../../styles';

export const Expander = ({
  isExpanded
}) => (
  <>
  {isExpanded ? (
    <svg width="100%" viewBox="0 0 100 100" className="expander-closed">
    <use xlinkHref={'#expander-closed'} />
  </svg>
  ) : (
    <svg width="100%" viewBox="0 0 100 100" className="expander">
      <use xlinkHref={'#expander'} />
    </svg>
  )}
    
    <style jsx>
      {
        `
          svg {
            width: 25px;
            height: 25px;
            fill: ${colors.white};
          }
        `
      }
    </style>
  </>
);

Expander.displayName = 'components/global/icons/Expander';

export default Expander;
