import { useState } from 'react';
import Head from 'next/head';
import fetch from "isomorphic-fetch"
import Input from '../components/forms/Input';

const macroTypes = [
  'Protein',
  'Carbohydrates',
  'Total Fat',
]

const add = (a, b) => a + b;

function IndexPage({
  items,
}) {
  const [calories, setCalories] = useState({
    'Total Fat': 0,
    'Carbohydrates': 0,
    'Protein': 0,
  });
  const [options, setOptions] = useState([]);

  const onInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    const type = e.target.dataset.type;
    const calculated = type === macroTypes[2] ? (val * 9) : (val * 4);
    !val ? e.target.value = '' : null;
    !!val && setCalories({...calories, [type]: calculated});

    const results = items.item.filter((item) => item.nutrient_facts.nutrient.find((n) => n.name === e.target.dataset.type && n.value <= val))
    const newResults = results.map((result) => {
      const totalProtein = result.nutrient_facts.nutrient.find((n) => n.name === e.target.dataset.type);
      return {
        name: result.item_name,
        protein: totalProtein.value,
        description: result.text.length ? result.text : '',
      };
    });

    setOptions(newResults);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Food Finder</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>What Are Your Macros?</h1>
      <div className="wrapper">
        {macroTypes.map((m, i) => (
          <Input
            key={i}
            type={m}
            onChange={onInputChange}
          />
        ))}
      </div>
      <p className="result">Total Calories: {Object.values(calories).reduce(add)}</p>
      <ul className="results">
        {options.map((r, i) => (
          <li key={i}>
            <strong>{r.name}</strong>
            <br />
            {r.description}
          </li>
        ))}
      </ul>
      <style jsx>
      {`
        .wrapper {
          display: flex;
          justify-content: center;
        }

        h1 {
          margin: 0 0 2rem;
          text-align: center;
        }

        .results {
          list-style-type: none;
          display: flex;
          padding: 0;
          flex-wrap: wrap;
          max-width: 680px;
          margin: 0 auto;
        }

        .results li {
          display: block;
          padding: 15px;
          border: 1px solid rgba(0, 0, 0, .05);
          border-radius: 5px;
          margin: 10px;
          flex: 1 0 20%;
          font-size: .8rem;
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
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: 'Open Sans', sans-serif;
          }
        `}
      </style>
      
    </React.Fragment>
  );
}

IndexPage.getInitialProps = async ({ req }) => {
  const res = await fetch('https://www.mcdonalds.com/wws/json/getCategoryDetails.htm?country=US&language=en&showLiveData=true&coopFilter=true&showNationalCoop=true&categoryId=100001');
  const json = await res.json();
  return { items: json.category.items };
};

export default IndexPage;