# Lab #3: Composition

This lab is split into two parts which can be found in these branches:
- 3-1-compose
- 3-2-compose

# Part 1

Your task in this lab is to make your Planets component load planets from the Star Wars universe. In this case the `compose` function has already one higher order component `withFetch` to fetch the data. Unfortunately it breaks since we don't handle the loading state yet. Since we are going to re-use loading screens many times we want to create a higher order component `withLoading`.

You need to build the `withLoading` component and then use it in the `compose` section of the `src/Planets.js` component. The goal is that a loading screen is shown until the data is successfully fetched.

With `npm start` you can run the application, but it will fail with `TypeError: Cannot read property 'map' of null`.

## Testing

To make it easier for you to complete this task, we've added tests verifying that you've arrived at the correct app. Initially they will fail with `TypeError: Cannot read property 'map' of null`. This command will run the tests:

```sh
npm test
```

## License

Copyright (C) 2017  Maximilian Stoiber & Nikolaus Graf. You may use this repo for non-commercial use under the GPLv3 license.

```
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```

(see [LICENSE.md](LICENSE.md) for the full license text)
