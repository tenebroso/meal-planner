import { macroTypes } from '../configs';
import { add } from '../utilities';
import Input from '../components/forms/Input';
import tl8 from '../utilities/tl8';

const Calculator = ({
  shouldShow = false,
  calories,
  onChange,
}) => (
  <>
    <div>
      {Object.keys(macroTypes).map((m, i) => (
        <Input
          key={i}
          type={m}
          onChange={onChange}
        />
      ))}
      <p className="calories" data-type="Calories">
        <span className="value">{calories && Object.values(calories).reduce(add)}</span>
        <span className="key">{tl8.t('nutrients.calories')}</span>
      </p>
    </div>
    <style jsx>
      {
        `
          div {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-left: 80px;
            margin-right: 80px;
          }
        `
      }
    </style>
  </>
);

export default Calculator;
