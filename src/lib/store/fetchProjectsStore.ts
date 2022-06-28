import { writable, type Writable } from 'svelte/store';

export interface Project {
	id: number;
	title: string;
	body: string;
	url: string;
	year?: number;
	month?: number;
	alt?: string;
	liveUrl?: string;
	imgSrc?: string;
}

export const ProjectsStore: Writable<Project[]> = writable([]);

export const url = `https://jsonplaceholder.typicode.com/posts`;

export const loadProjects = async (url: string) => {
	const res = await fetch(url);
	const data = await res.json();

	ProjectsStore.set(data); // uses svelte writable
	return data;
};

export const searchMatchesProjects = async (data: Project[], searchTextInput: string) => {
	let searchMatchesProject: Project[] = (data as Project[]).filter((item: Project) => {
		const regex = new RegExp(`^${searchTextInput}`, 'gi');
		return item.title.match(regex) || item.body.match(regex);
	});

	if (searchTextInput === '') {
		searchMatchesProject = [];
	}
	return searchMatchesProject;
};

// export const postSearchMatchProjects = (searchMatchesProject: Project[]) => {
// let displaySearchedProjects;
// if (searchMatchesProject.length > 0) {
// displaySearchedProjects = searchMatchesProject.map(async (matchFound) => {
// ProjectsStore.update((project) => {
// ProjectsStore.filter(
// async (project: Project) => (await project.id) === (await matchFound.id)
// );
// });
// });
// }
// return displaySearchedProjects;
// };
// ////////////////////////////////////////////////////////////////////////////
// export const searchProjects = async (event) => {
// if (!event.target.value) return;
// const searchText: string = event.target.value.toLowerCase();
// const searchInputHasNoText = searchText === '';
//
// const res = await fetch(url); // ok: true
// const data = await res.json();
//
// Get matches to current text input
// let matches = data.filter((project: any) => {
// // const regex = new RegExp(`^${searchText}`, 'gi'); // ^ ==> Starts with || g ==> global i==> case-insensitive flags
// return project.title.match(regex) || project.body.match(regex);
// });
//
// if (searchInputHasNoText) {
// matches = []; // clear out the results when we're done
// }
// console.log(matches);
//
// outputHtml(matches);
// };
//
// Show results in HTML
// export const outputHtml = async (matches: any[]) => {
// if (matches.length > 0) {
// matches.map(async (match) => {
// // projects = [...projects, { title: await match.title, body: await match.body }];
// });
// }
// };
