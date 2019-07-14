export const add = (a, b) => a + b;

export const filterResults = (menuItems, calories) => {

    // Example response from MCDs: ../_stubs_/mcdonalds.json
    // Example Item:

    //   {
    //     "allergens":{

    //     },
    //     "attach_item_hero_image":{
    //        "alt_text":{

    //        },
    //        "description":{

    //        },
    //        "image_name":"h-mcdonalds-tom-moz-crispy-chicken.jpg",
    //        "url":"h-mcdonalds-tom-moz-crispy-chicken.jpg"
    //     },
    //     "attach_item_thumbnail_image":{
    //        "alt_text":{

    //        },
    //        "description":{

    //        },
    //        "image_name":"t-mcdonalds-tom-moz-crispy-chicken.jpg",
    //        "url":"t-mcdonalds-tom-moz-crispy-chicken.jpg"
    //     },
    //     "attach_transparent_icon_image":{
    //        "alt_text":{

    //        },
    //        "description":{

    //        },
    //        "image_name":"t-mcdonalds-tom-moz-crispy-chicken.png",
    //        "url":"t-mcdonalds-tom-moz-crispy-chicken.png"
    //     },
    //     "coops":{

    //     },
    //     "customization_button":{

    //     },
    //     "customization_label":{

    //     },
    //     "default_category":{
    //        "category":{
    //           "id":100001,
    //           "name":"Chicken and Sandwiches"
    //        }
    //     },
    //     "description":"Try the tasty favorite from north of the border with Canada\u2019s Tomato Mozzarella Chicken Sandwich. It\u2019s a savory medley of flavor with creamy mozzarella cheese, sliced roma tomatoes, fresh lettuce, and tomato and herb sauce all with a crispy chicken breast made with all white meat. Served on an artisan roll. Check out the full lineup from <a href=\"https://www.mcdonalds.com/us/en-us/worldwide-favorites.html\">McDonald\u2019s international menu<\/a>.",
    //     "display_order":1,
    //     "do_not_show":"Core",
    //     "external_id":2459,
    //     "genesis_menu_item_no":"2459-000",
    //     "has_components":"Yes",
    //     "id":203604,
    //     "is_vegetarian":"Yes",
    //     "item_additional_allergen":{

    //     },
    //     "item_additional_text_ingredient_statement":{

    //     },
    //     "item_allergen":{

    //     },
    //     "item_comments":{

    //     },
    //     "item_id":203604,
    //     "item_ingredient_statement":{

    //     },
    //     "item_marketing_name":"Tomato Mozzarella Chicken Sandwich from Canada",
    //     "item_meta_description":"McDonald\u2019s Worldwide Favorite Tomato Mozzarella Crispy Chicken Sandwich is made with 100% all white meat chicken and roma tomatoes!",
    //     "item_meta_title":"Tomato Mozzarella Crispy Chicken Sandwich | McDonald\u2019s",
    //     "item_name":"Tomato Mozzarella Crispy Chicken Sandwich",
    //     "keywords":"Crispy chicken sandwich, tomato mozzarella crispy chicken sandwich",
    //     "menu_item_no":2459,
    //     "nutrient_facts":{
    //        "nutrient":[
    //           {
    //              "adult_dv":{

    //              },
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":254.5,
    //              "id":2,
    //              "name":"Calories",
    //              "nutrient_name_id":"calories",
    //              "uom":"Cal",
    //              "uom_description":"calories",
    //              "value":690,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":{

    //              },
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":110.6,
    //              "id":23,
    //              "name":"Calories From Fat",
    //              "nutrient_name_id":"calories_from_fat",
    //              "uom":"Cal",
    //              "uom_description":"calories",
    //              "value":300,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":{

    //              },
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":1073.3,
    //              "id":30,
    //              "name":"Energy kJ",
    //              "nutrient_name_id":"energy_kJ",
    //              "uom":"kJ",
    //              "uom_description":"kilojoules",
    //              "value":2910,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":{

    //              },
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":12.2,
    //              "id":11,
    //              "name":"Protein",
    //              "nutrient_name_id":"protein",
    //              "uom":"g",
    //              "uom_description":"grams",
    //              "value":33,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":22,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":24.7,
    //              "id":22,
    //              "name":"Carbohydrates",
    //              "nutrient_name_id":"carbohydrate",
    //              "uom":"g",
    //              "uom_description":"grams",
    //              "value":67,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":16,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":1.5,
    //              "id":9,
    //              "name":"Dietary Fiber",
    //              "nutrient_name_id":"fibre",
    //              "uom":"g",
    //              "uom_description":"grams",
    //              "value":4,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":{

    //              },
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":5.9,
    //              "id":10,
    //              "name":"Sugars",
    //              "nutrient_name_id":"sugars",
    //              "uom":"g",
    //              "uom_description":"grams",
    //              "value":16,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":51,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":12.2,
    //              "id":21,
    //              "name":"Total Fat",
    //              "nutrient_name_id":"fat",
    //              "uom":"g",
    //              "uom_description":"grams",
    //              "value":33,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":37,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":2.6,
    //              "id":4,
    //              "name":"Saturated Fat",
    //              "nutrient_name_id":"saturated_fat",
    //              "uom":"g",
    //              "uom_description":"grams",
    //              "value":7,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":{

    //              },
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":0,
    //              "id":29,
    //              "name":"Trans Fat",
    //              "nutrient_name_id":"trans_fat",
    //              "uom":"g",
    //              "uom_description":"grams",
    //              "value":0,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":25,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":27.7,
    //              "id":6,
    //              "name":"Cholesterol",
    //              "nutrient_name_id":"cholesterol",
    //              "uom":"mg",
    //              "uom_description":"milligrams",
    //              "value":75,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":20,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":339.3,
    //              "id":12,
    //              "name":"Vitamin A",
    //              "nutrient_name_id":"vitaminA",
    //              "uom":"IU",
    //              "uom_description":"international units",
    //              "value":920,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":0,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":0,
    //              "id":28,
    //              "name":"Vitamin B6",
    //              "nutrient_name_id":"vitaminB6",
    //              "uom":"mg",
    //              "uom_description":"milligrams",
    //              "value":0,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":10,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":2.6,
    //              "id":13,
    //              "name":"Vitamin C",
    //              "nutrient_name_id":"vitaminC",
    //              "uom":"mg",
    //              "uom_description":"milligrams",
    //              "value":7,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":0,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":0,
    //              "id":27,
    //              "name":"Vitamin D",
    //              "nutrient_name_id":"vitaminD",
    //              "uom":"IU",
    //              "uom_description":"international units",
    //              "value":0,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":20,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":81.1,
    //              "id":14,
    //              "name":"Calcium",
    //              "nutrient_name_id":"calcium",
    //              "uom":"mg",
    //              "uom_description":"milligrams",
    //              "value":220,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":15,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":1.1,
    //              "id":15,
    //              "name":"Iron",
    //              "nutrient_name_id":"iron",
    //              "uom":"mg",
    //              "uom_description":"milligrams",
    //              "value":3,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":2,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":0.7,
    //              "id":24,
    //              "name":"Phosphorus",
    //              "nutrient_name_id":"phosphorus",
    //              "uom":"mg",
    //              "uom_description":"milligrams",
    //              "value":2,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":15,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":184.4,
    //              "id":25,
    //              "name":"Potassium",
    //              "nutrient_name_id":"potassium",
    //              "uom":"mg",
    //              "uom_description":"milligrams",
    //              "value":500,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":53,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":468.4,
    //              "id":7,
    //              "name":"Sodium",
    //              "nutrient_name_id":"sodium",
    //              "uom":"mg",
    //              "uom_description":"milligrams",
    //              "value":1270,
    //              "woman_dv":{

    //              }
    //           },
    //           {
    //              "adult_dv":0,
    //              "child_dv":{

    //              },
    //              "hundred_g_per_product":0,
    //              "id":26,
    //              "name":"Caffeine",
    //              "nutrient_name_id":"caffeine",
    //              "uom":{

    //              },
    //              "uom_description":"No unit of measurement",
    //              "value":0,
    //              "woman_dv":{

    //              }
    //           }
    //        ]
    //     },
    //     "relation_types":{

    //     },
    //     "serves":{

    //     },
    //     "serving_size_imperial":{

    //     },
    //     "serving_size_metric":{

    //     },
    //     "short_name":"tomato-mozzarella-crispy-chicken-sandwich",
    //     "show_product_images":"No",
    //     "specialization_text1":{

    //     },
    //     "specialization_text2":{

    //     },
    //     "text":{

    //     },
    //     "time_of_day":{

    //     }
    //  },

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