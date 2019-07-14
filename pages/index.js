import { useState } from 'react';
import fetch from "isomorphic-fetch"
import { filterResults } from '../utilities';
import { macroTypes } from '../configs';
import { colors, typography } from '../styles';
import { fadeIn } from '../styles/animations';
import Header from '../components/global/Head';
import SiteHeader from '../components/global/SiteHeader';
import Rail from '../components/global/Rail';
import RestaurantOptions from '../components/RestaurantOptions';
import Calculator from '../components/Calculator';
import Results from '../components/Results';
import { loadFirebase } from '../lib/db';

function IndexPage({
  menuItems
}) {
  const [calories, setCalories] = useState(macroTypes);
  // const [options, setOptions] = useState(filterResults(menuItems, calories));
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  console.log(menuItems);

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

  return (
    <>
      <Header />

      <SiteHeader />

      <Rail>
        <Calculator
          shouldShow={showOptions}
          calories={calories}
          onChange={onInputChange}
        />
      </Rail>
      
      <RestaurantOptions
        onClick={showMenuItems}
      />

      <Results
        shouldShow={showOptions}
        menuOptions={options}
        calories={calories}
      />

      <style global jsx>
        {`
          body {
            background-color: ${colors.grey.light};
            font-family: ${typography.font.serif};
            margin: 0;
          }

          .key {
            display: block;
            font-size: .75rem;
            font-weight: bold;
            text-transform: uppercase;
            padding-top: 5px;
            font-family: ${typography.font.sans};
          }

          .value {
            padding: 10px 10px 10px 0;
            border: none;
            border-bottom: 1px solid ${colors.grey.light};
            outline: none;
            display: block;
            font-size: .75rem;
          }
          
          .no-edit {
            pointer-events: none;
          }

          ${fadeIn}
        `}
      </style>
      
    </>
  );
}

IndexPage.getInitialProps = async () => {
  return loadFirebase().firestore().collection('foods')
    .get()
    .then((snapshot) => {
      let data = [];
      snapshot.forEach((doc) =>  {
        data.push({
          id: doc.id, 
          ...doc.data()
        });
      });
    return { menuItems: data };
  });
};

export default IndexPage;
