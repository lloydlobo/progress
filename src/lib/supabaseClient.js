// cspell:ignore supabase openapi apikey ilike

/* 
########     ###    ########    ###    ########     ###     ######  ######## 
##     ##   ## ##      ##      ## ##   ##     ##   ## ##   ##    ## ##       
##     ##  ##   ##     ##     ##   ##  ##     ##  ##   ##  ##       ##       
##     ## ##     ##    ##    ##     ## ########  ##     ##  ######  ######   
##     ## #########    ##    ######### ##     ## #########       ## ##       
##     ## ##     ##    ##    ##     ## ##     ## ##     ## ##    ## ##       
########  ##     ##    ##    ##     ## ########  ##     ##  ######  ######## 
*/

import { createClient } from '@supabase/supabase-js';
// import cors from 'cors';

// supabaseUrl = 'https://cors-anywhere.herokuapp.com/https://jgfmvkqktjspzrgfvckz.supabase.co';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseAnonKey || !supabaseUrl) {
	throw new Error('No supabase env specified');
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// const handleRequest = async () => {
// 	let response = await fetch(
// 		'https://jgfmvkqktjspzrgfvckz.supabase.co/rest/v1/countries?select=*',
// 		{
// 			method: 'GET',
// 			mode: 'no-cors',
// 			headers: {
// 				apikey: supabaseKey,
// 				Authorization: 'Bearer ' + supabaseKey
// 			}
// 		}
// 	).then(async (response) => await response);
// 	console.log(response);
// let { data: creations, error } = await supabase.from('creations').select('*');

// let { data: countries, error } = await supabase.from('countries').select('*');
// console.log(countries, error);
// };
// handleRequest();

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

// // checking if the key & url from .env are undefined or string
// if (!supabaseKey || !supabaseUrl) throw 'API not defined';

// // now the env variables are of type string, as we handled errors above
// export const supabase = createClient(supabaseUrl, supabaseKey);

// ///////////////END////////////////////////////////////////////////////////

// ALTERNATIVE METHOD ---> https://github.com/supabase/supabase/blob/master/examples/todo-list/sveltejs-todo-list/src/store.js

/* 

let importEnv = true
try {
  if (process.env.NODE_ENV === 'test') importEnv = false
} catch (error) {}

const { SNOWPACK_PUBLIC_SUPABASE_URL, SNOWPACK_PUBLIC_SUPABASE_KEY } = !importEnv
  ? process.env
  : import.meta.env

const supabase = createClient(SNOWPACK_PUBLIC_SUPABASE_URL, SNOWPACK_PUBLIC_SUPABASE_KEY)

*/

// ///////////////EXAMPLES///////////////////////////////////////////////////

/* 
######## ##     ##    ###    ##     ## ########  ##       ########  ######  
##        ##   ##    ## ##   ###   ### ##     ## ##       ##       ##    ## 
##         ## ##    ##   ##  #### #### ##     ## ##       ##       ##       
######      ###    ##     ## ## ### ## ########  ##       ######    ######  
##         ## ##   ######### ##     ## ##        ##       ##             ## 
##        ##   ##  ##     ## ##     ## ##        ##       ##       ##    ## 
######## ##     ## ##     ## ##     ## ##        ######## ########  ######  
*/

/* SELECT ID
let { data: creations, error } = await supabase
  .from('creations')
  .select('id')
 */

/* SELECT CREATED_AT
let { data: creations, error } = await supabase
  .from('creations')
  .select('created_at')
   */

/* SELECT YEAR
let { data: creations, error } = await supabase
  .from('creations')
  .select('year')
   */

/* SELECT MONTH
let { data: creations, error } = await supabase
  .from('creations')
  .select('month')
   */

/* SELECT NAME
let { data: creations, error } = await supabase
  .from('creations')
  .select('name')
   */

/* SELECT HREF
let { data: creations, error } = await supabase
  .from('creations')
  .select('href')
   */

/* SELECT LIVE
let { data: creations, error } = await supabase
  .from('creations')
  .select('live') 
   */

/* SELECT CONTENT
let { data: creations, error } = await supabase
  .from('creations')
  .select('content')
   */

/* READ ALL ROWS
let { data: creations, error } = await supabase
  .from('creations')
  .select('*')
READ SPECIFIC COLUMNS
let { data: creations, error } = await supabase
  .from('creations')
  .select('some_column,other_column')
READ FOREIGN TABLES
let { data: creations, error } = await supabase
  .from('creations')
  .select(`
    some_column,
    other_table (
      foreign_key
    )
  `)
WITH PAGINATION
let { data: creations, error } = await supabase
  .from('creations')
  .select('*')
  .range(0, 9)
   */

/* WITH FILTERING
let { data: creations, error } = await supabase
  .from('creations')
  .select("*")

  // Filters
  .eq('column', 'Equal to')
  .gt('column', 'Greater than')
  .lt('column', 'Less than')
  .gte('column', 'Greater than or equal to')
  .lte('column', 'Less than or equal to')
  .like('column', '%CaseSensitive%')
  .ilike('column', '%CaseInsensitive%')
  .is('column', null)
  .in('column', ['Array', 'Values'])
  .neq('column', 'Not equal to')

  // Arrays
  .cs('array_column', ['array', 'contains'])
  .cd('array_column', ['contained', 'by'])
   */

/* INSERT A ROW
const { data, error } = await supabase
  .from('creations')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
INSERT MANY ROWS
const { data, error } = await supabase
  .from('creations')
  .insert([
    { some_column: 'someValue' },
    { some_column: 'otherValue' },
  ])
UPSERT MATCHING ROWS
const { data, error } = await supabase
  .from('creations')
  .insert([{ some_column: 'someValue' }], { upsert: true })
   */

/* UPDATE MATCHING ROWS
const { data, error } = await supabase
  .from('creations')
  .update({ other_column: 'otherValue' })
  .eq('some_column', 'someValue')
   */

/* DELETE MATCHING ROWS
const { data, error } = await supabase
  .from('creations')
  .delete()
  .eq('some_column', 'someValue')
   */

/* SUBSCRIBE TO ALL EVENTS
const creations = supabase
  .from('creations')
  .on('*', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
SUBSCRIBE TO INSERTS
const creations = supabase
  .from('creations')
  .on('INSERT', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
SUBSCRIBE TO UPDATES
const creations = supabase
  .from('creations')
  .on('UPDATE', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
SUBSCRIBE TO DELETES
const creations = supabase
  .from('creations')
  .on('DELETE', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
SUBSCRIBE TO SPECIFIC ROWS
const creations = supabase
  .from('creations:column_name=eq.someValue')
  .on('*', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
   */

// //////////////////////////////////////////////////////////////////////////

/* 
######## ##    ## ########  ########  ######  
   ##     ##  ##  ##     ## ##       ##    ## 
   ##      ####   ##     ## ##       ##       
   ##       ##    ########  ######    ######  
   ##       ##    ##        ##             ## 
   ##       ##    ##        ##       ##    ## 
   ##       ##    ##        ########  ######  
 */

// import * as definitions from '../../types/supabase';
// npx openapi-typescript SUPABASE_URL/rest/v1/?apikey=SUPABASE_KEY --output types/supabase.ts

// https://supabase.com/docs/guides/api/generating-types
