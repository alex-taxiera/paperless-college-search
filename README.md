# Paperless Parts Demo: College Search

## Running this app
1. Clone this repository
2. Run `npm install`
3. Run `npm start`

## Project Structure
The structure for this app is something of an experiment of mine, so please provide any feedback or thoughts.

The main concept is flatness, at most we only ever go two folders deep into `src`. Also the naming convention using `index` helps with import length (however I am not sold on this approach because it can lead to confusing file tabs in your editor).

## Expansion/Continued Work
One things I would like to have done would be cleaning up the data and/or creating a backend service for the data. Currently 90% of the data points are in strings, so the sort functionality works a little weird for "numerical" values because they are actually strings.

Another thing I would like to do is work more on the search/sort/filtering of schools. For example we could apply search to the city name in addition to the school name to get smarter results. Also I would have liked to debounce that search box. I refrained from adding a submit button because the form was so small, but without debounce the list filters quite frequently.

## Notes on Libraries
I did use a few libraries throughout this app. These are libraries I consider to be standard fare for front end development. Without the libraries I would have simply omitted some features or had messier/worse code.

One of my favorite libraries to play with is akita, for state management. There are a lot of ways to use it and it seems to be 9001% more straightforward to use than competitors such as redux.
