

import { createClient } from '@supabase/supabase-js';

const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const {
  data: { user },
} = await supabase.auth.getUser();

console.log("Current user:", user);
// ─── READ ────

/**
 * Fetch all SCP records from Supabase.
 */
export async function getAllSCPs() {
  const { data, error } = await supabase
    .from('scps')
    .select('*')
    .order('id', { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

// ─── CREATE ─────

/**
 * Insert a new SCP entry. Returns the inserted row.
 */
export async function createSCP(newSCP) {
  const { data, error } = await supabase
    .from('scps')
    .insert([newSCP])
    .select();

  if (error) throw new Error(error.message);
  return data[0];
}

// ─── UPDATE ─────

/**
 * Update an existing SCP entry by id. Returns the updated row.
 */
export async function updateSCP(id, updatedFields) {
  const { data, error } = await supabase
    .from('scps')
    .update(updatedFields)
    .eq('id', id)
    .select();

  if (error) throw new Error(error.message);
  return data[0];
}

// ─── DELETE ───────────────────────────────────────────────────────────────────

/**
 * Delete an SCP entry by id.
 */
export async function deleteSCP(id) {
  const { error } = await supabase
    .from('scps')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);
}
