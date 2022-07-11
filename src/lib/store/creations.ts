// cspell:disable
import { writable, type Writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient.js';
// console.log(supabase);

export const name = writable(['Svelte']);

// Initialize Wriatble Svelte Store
export const projects: Writable<any[]> = writable([]);

// Load Project and set the recieved data
export const loadSupaProjects = async () => {
	let { data, error } = await supabase.from('projectsStore').select('*');
	if (error) {
		return console.error(error);
	}
	if (!data) throw new Error('Database data not found');

	projects.set(data); // set --> allows to load and set the writable([]) with data
};

export const addProjects = async () => {};
