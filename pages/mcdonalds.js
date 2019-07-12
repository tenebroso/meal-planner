import { useState } from 'react';
import Input from '../components/forms/Input';
import { add, filterResults } from '../utilities';
import { macroTypes } from '../configs';
import Card from '../components/Card';
import Header from '../components/Header';

function McDonalds({
  menuItems
}) {
  const [calories, setCalories] = useState(macroTypes);
  const [options, setOptions] = useState([]);

  const onInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    const type = e.target.dataset.type;
    const calculated = type === Object.keys(macroTypes)[0] ? (val * 9) : (val * 4);
    const updatedCalories = !!val ? {...calories, [type]: calculated} : calories;
    !val ? e.target.value = '' : null;
    setCalories(updatedCalories);

    const results = filterResults(menuItems, updatedCalories);
    setOptions(results);
  };

  return (
    <React.Fragment>
      <Header />
      <h1 className="pageTitle">What Should I Eat?</h1>
      <div className="wrapper">
        {Object.keys(macroTypes).map((m, i) => (
          <Input
            key={i}
            type={m}
            onChange={onInputChange}
          />
        ))}
        <p className="calories" data-type="Calories">
          <span className="value">{calories && Object.values(calories).reduce(add)}</span>
          <span className="key">Calories</span>
        </p>
      </div>
          
        {!!options.length ? (
          <ul className="results">
            {options.map((result, i) => (
              <Card
                food={result}
                key={i}
              />
            ))}
          </ul>
          ) : (
            !!Object.values(calories).reduce(add) && <p className="result">Sorry, there are no results!</p>
          )}
      
      <style jsx>
      {`
        .wrapper {
          position: fixed;
          right: 0;
          padding: 0 10px 10px 10px;
          border: 1px solid rgba(0, 0, 0, .05);
          border-right: 0;
          background-color: white;
        }

        .results {
          list-style-type: none;
          display: flex;
          padding: 0;
          flex-wrap: wrap;
          max-width: 50vw;
          margin: 0 auto;
        }

        .result {
          text-transform: uppercase;
          font-weight: bold;
          font-size: .75rem;
          text-align: center;
        }
      `}
      </style>

      <style global jsx>
        {`
          body {
            background-color: #E8E9EB;
            font-family: 'DM Serif Text', serif;
            margin: 0;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
          
            to {
              opacity: 1;
            }
          }
          
          .fadeIn {
            animation-name: fadeIn;
            animation-duration: 1s;
            animation-fill-mode: both;
          }          

          .pageTitle {
            margin: 0 0 2rem;
            text-align: center;
            padding: 10px;
            background-color: #313638;
            display: block;
            color: white;
          }

          .key {
            display: block;
            font-size: .75rem;
            font-weight: bold;
            text-transform: uppercase;
            padding-top: 5px;
            font-family: 'PT Sans';
          }

          .value {
            padding: 10px 10px 10px 0;
            border: none;
            border-bottom: 1px solid #ccc;
            outline: none;
            display: block;
            font-size: .75rem;
          }
          
          .no-edit {
            pointer-events: none;
          }
        `}
      </style>
      
    </React.Fragment>
  );
}

export default McDonalds;
