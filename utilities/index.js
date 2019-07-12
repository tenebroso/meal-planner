export const add = (a, b) => a + b;

export const filterResults = (menuItems, calories) => {

    let results;

    results = !Object.values(calories).reduce(add) ? menuItems : menuItems.filter((item) => {
      let fitsMacros = true;
      const nutrientArray = item.nutrient_facts.nutrient;

      const macros = nutrientArray.reduce(function(result, nutrient) {
        if (Object.keys(calories).includes(nutrient.name)) {
            result[nutrient.name] = nutrient.value;
          }
        return result;
      },{});

      Object.keys(macros).forEach((macro) => {
        if (calories[macro] > 0 && macros[macro] > calories[macro] / (macro === 'Total Fat' ? 9 : 4)) {
          fitsMacros = false;
        }
      });

      return fitsMacros;
    });

    const newResults = results.map((result) => {
      const nutrients = [];
      const remaining = [];
      let totalRemaining = 0;

      Object.keys(calories).forEach((type) => {
        const nutrient = result.nutrient_facts.nutrient.find((n) => n.name === type);
        nutrients.push({
          [type]: nutrient.value,
        });
        !!calories[type] && remaining.push({
          [type]: Math.max((calories[type] / (type === 'Total Fat' ? 9 : 4)) - nutrient.value, 0)
        })
      });

      return {
        name: result.item_name,
        nutrients: nutrients,
        remaining: remaining,
        category: result.default_category.category.name,
      };
    });

    return newResults;
};