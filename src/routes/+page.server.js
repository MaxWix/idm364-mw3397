import { slugify } from "$lib/utils";
// import { plants } from "$lib/data";

// /**
//  * The load function iterates over the `teams` array and returns an object.
//  * Each object in the array 'mascots' has 'name' and 'mascot' properties.
//  * The value for the 'name' and 'mascot' keys are derived from the corresponding properties of each 'team' object.
//  *
//  * @module {Function} load
//  * @returns {{plants: {name: string, subtitle: string, price: intiger, slug: string}[]}} - An object with teams array
//  */
// export function load() {
//   return {
//     plants: plants.map((plant) => ({
//       name: plant.name,
//       subtitle: plant.subtitle,
//       price: plant.price,
//       slug: slugify(plant.name),
//       description: plant.description,
//       price: plant.price,
//       img: plant.image,
//       colorOptions: plant.colorOptions,
//       potStyle: plant.potStyle,
//       sizeOptions: plant.sizeOptions,
//     })),
//   };
// }

import { PUBLIC_SUPABASE_TABLE1 } from "$env/static/public";
import { supabase } from "$lib/supabaseClient";

/**
 * Loads albums from the 'idm364-albums' table in Supabase.
 * @async
 * @returns {Promise<{ albums: Album[] }>} The loaded albums.
 */
export async function load() {
  const { data } = await supabase.from(PUBLIC_SUPABASE_TABLE1).select("*");
  return {
    plants: data.map((plant) => ({
      name: plant.name,
      subtitle: plant.subtitle,
      price: plant.price,
      slug: slugify(plant.name),
      description: plant.description,
      price: plant.price,
      image: plant.image,
      colorOptions: plant.colorOptions,
      potStyle: plant.potStyle,
      sizeOptions: plant.sizeOptions,
    })),
  };
}
