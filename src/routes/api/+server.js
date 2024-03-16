import { supabase } from "$lib/supabaseClient";
import { json } from "@sveltejs/kit";

export async function GET() {
  let { data, error, status } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true }); // Sorting by 'id' in ascending order

  if (error) {
    return {
      status,
      body: { error: error.message },
    };
  } else {
    return json(data);
  }
}
