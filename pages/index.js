import { useState, useEffect } from 'react';
import fetch from "isomorphic-fetch"
import { add, filterResults } from '../utilities';
import { macroTypes } from '../configs';
import Card from '../components/Card';
import Header from '../components/global/Header';
import PageTitle from '../components/global/PageTitle';
import RestaurantOptions from '../components/RestaurantOptions';
import Calculator from '../components/Calculator';

function IndexPage({
  menuItems
}) {
  const [calories, setCalories] = useState(macroTypes);
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

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

  const showMenuItems = () => setShowOptions(!showOptions);

  useEffect(() => {
    const results = filterResults(menuItems, calories);
    setOptions(results);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <PageTitle title="What Should I Eat?" />
      <Calculator
        shouldShow={showOptions}
        calories={calories}
        onChange={onInputChange}
      />
      
      <RestaurantOptions
        onClick={showMenuItems}
      />
        
      {!!options.length ? (
        <ul className={`results ${!!showOptions ? 'show' : ''}`}>
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
        .results {
          list-style-type: none;
          display: flex;
          justify-content: center;
          padding: 0;
          flex-wrap: wrap;
          max-width: 50vw;
          margin: 0 auto;
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

IndexPage.getInitialProps = async ({ req }) => {

  const nutritionData = [];

  const urls = [
    'https://www.mcdonalds.com/wws/json/getCategoryDetails.htm?country=US&language=en&showLiveData=true&coopFilter=true&showNationalCoop=true&categoryId=100001',
    'https://www.mcdonalds.com/wws/json/getCategoryDetails.htm?country=US&language=en&showLiveData=true&coopFilter=true&showNationalCoop=true&categoryId=100003',
    'https://www.mcdonalds.com/wws/json/getCategoryDetails.htm?country=US&language=en&showLiveData=true&coopFilter=true&showNationalCoop=true&categoryId=100000',
    'https://www.mcdonalds.com/wws/json/getCategoryDetails.htm?country=US&language=en&showLiveData=true&coopFilter=true&showNationalCoop=true&categoryId=100004',
    'https://www.mcdonalds.com/wws/json/getCategoryDetails.htm?country=US&language=en&showLiveData=true&coopFilter=true&showNationalCoop=true&categoryId=100002',
  ];

  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function parseJSON(response) {
    return response.json();
  }

  function logError() {
    console.log('error');
  }
  
  const res = await Promise.all(urls.map(url =>
    fetch(url)
      .then(checkStatus)                 
      .then(parseJSON)
      .catch(logError)
  ));

  res.forEach((r) => nutritionData.push(...r.category.items.item));

  return { menuItems: nutritionData };
};

export default IndexPage;