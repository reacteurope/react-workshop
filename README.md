# Lab #3: Composition

This lab is split into three parts which can be found in these branches:
- 3-1-compose
- 3-2-compose

# Part 1

Your task in this lab is to create to make your App component functional by using higher order components from recompose. You need fill in the `compose` section of the `src/Favourites.js` component. The goal is to have a list app that allows you to change the image and name of the list as well as add new entries.

The component is used in `index.js` with specific props. Do not change them, but rather map them to the internals of the `Favourites` component. You are able to create all the functionality with only adding code inside the `compose` function. While you can build your own higher order components we recommend to use recompose's `renameProp`, `withState` & `withHandlers`

With `npm start` you can run the application, but it will fail with `TypeError: Cannot read property 'map' of undefined`.

## Testing

To make it easier for you to complete this task, we've added tests verifying that you've arrived at the correct app. Initially they will fail with `TypeError: Cannot read property 'map' of undefined`. This command will run the tests:

```sh
npm run test
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
