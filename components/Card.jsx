import { macroLabels, categories } from '../configs';
import { typography, colors, borders, listReset } from '../styles';
import tl8 from '../utilities/tl8';

const Card = ({ food }) => (
  <>
    <li className="fadeIn result-card">
      <h3><i className={`fas fa-lg ${categories[food.category]}`}></i> {food.name}</h3>
      <div className="result-content">
        <span className="description">{food.description}</span>
        <ol>
          {food.nutrients.map((n, i) => <li key={i} data-type={`${macroLabels[Object.keys(n)]}`}>{Object.values(n)}g</li>)}
        </ol>
      </div>
      {food.remaining && (
        <div className="remaining">
          <h3>{tl8.t('nutrients.remaining')}</h3>
          <ol>
            {food.remaining.map((n, i) => <li key={i} data-type={`${macroLabels[Object.keys(n)]}`}>{Object.values(n)}g</li>)}
          </ol>
        </div>
      )}
    </li>

    <style jsx>
    {`
      .result-card,
      .remaining {
        display: block;
        background-color: ${colors.grey.dark};
        border-radius: ${borders.radius};
        margin: 10px;
        flex: 0 1 27%;
        font-size: .8rem;
        position: relative;
        overflow: hidden;
      }

      .result-card:hover .remaining {
        transform: translateY(0);
      }

      .result-content {
        padding: 15px;
      }

      .result + .result {
        margin-top: 60px;
      }

      h3 {
        background: ${colors.red};
        color: ${colors.white};
        text-align: center;
        border-top-right-radius: ${borders.radius};
        border-top-left-radius: ${borders.radius};
        padding: 5px;
        margin: 0;
        font-family: ${typography.font.sans};
      }

      ol {
        ${listReset}
        padding-left: 12px;
        display: flex;
        justify-content: center;
      }

      ol li {
        border-radius: 50%;
        padding: 10px;
        width: 30px;
        height: 30px;
        position: relative;
        margin-top: 20px;
        margin-right: 10px;
        text-align: center;
        line-height: 30px;
        font-size: 1rem;
        font-weight: bold;
      }

      ol li:before {
        content: attr(data-type);
        position: absolute;
        display: block;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        text-align: center;
        left: -8px;
        top: -8px;
        line-height: 20px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: .75rem;
        color: ${colors.grey.dark};
      }

      ol li,
      ol li:before {
        background-color: #E0DFD5;
      }

      .remaining {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        transform: translateY(100%);
        transition: transform .35s;
      }

      .fas {
        display: block;
        margin: 5px 0 10px;
      }
    `}
    </style>
  </>
);

export default Card;
