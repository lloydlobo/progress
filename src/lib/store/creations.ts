// cspell:disable
import { derived, writable, type Writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient.js';
import sortBy from 'lodash/sortBy';

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

// https://codesandbox.io/s/todo-stores-better-7h538?fontsize=14&file=%2FstoreTodo.js
// https://stackoverflow.com/a/58058880

export const sortProjects = derived(projects, (projects) =>
	sortBy(projects, (project: any) => project.id * -1)
); // -1 to reverse the order latest date as id is generative
