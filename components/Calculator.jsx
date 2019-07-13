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
    <div className={`wrapper ${!!shouldShow ? 'show' : ''}`}>
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
      {`
        .wrapper {
          position: fixed;
          right: 0;
          padding: 0 10px 10px 10px;
          border: 1px solid rgba(0, 0, 0, .05);
          border-right: 0;
          background-color: white;
          opacity: 0;
          transition: opacity .5s;
          transition-delay: 1s;
        }

        .show {
          opacity: 1;
          pointer-events: unset;
        }
      `}
    </style>
  </>
);

export default Calculator;
