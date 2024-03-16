// src/routes/[slug]/+page.server.js
import { error } from "@sveltejs/kit";
import { slugify } from "$lib/utils.js";
import { plants } from "$lib/data";

/**
 * Load a team based on the provided parameters.
 *
 * @param {Object} options - The options object.
 * @param {Object} options.params - The parameters object.
 * @param {string} options.params.slug - The slug of the team to load.
 * @returns {Object} An object containing the team data.
 * @throws Will throw an error if the team is not found.
 */
import { PUBLIC_SUPABASE_TABLE2 } from "$env/static/public";
import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  const { data } = await supabase.from(PUBLIC_SUPABASE_TABLE2).select("*");

  const plants = data.map((plant) => ({
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
    isCeramic: plant.isCeramic,
  }));

  const plant = plants.find((plant) => plant.slug === params.slug);

  if (!plant) throw error(404);

  return {
    plant,
    plants,
  };
}
