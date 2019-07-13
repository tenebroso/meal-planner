import { add } from '../utilities';
import { listReset } from '../styles';
import Card from './Card';
import tl8 from '../utilities/tl8';

export const Results = ({
  shouldShow,
  menuOptions,
  calories,
}) => (
  <>
    {!!menuOptions.length ? (
    <ul className={`results ${!!shouldShow ? 'show' : ''}`}>
      {menuOptions.map((result, i) => (
        <Card
          food={result}
          key={i}
        />
      ))}
    </ul>
    ) : (
      !!Object.values(calories).reduce(add) && <p className="result">{tl8.t('global.results.none')}</p>
    )}
    <style jsx>
    {`
      .results {
        ${listReset}
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        max-width: 50vw;
        margin-left: auto;
        margin-right: auto;
        transform: translate(0, -125px);
        opacity: 0;
        pointer-events: none;
        transition: opacity .5s;
        transition-delay: 1s;
      }

      .show {
        opacity: 1;
        pointer-events: unset;
      }

      .result {
        text-transform: uppercase;
        font-weight: bold;
        font-size: .75rem;
        text-align: center;
      }
    `}
    </style>
  </>
);

export default Results;
