# Lab #2: Higher Order Components

This lab is split into three parts which can be found in these branches:
- 2-1-hoc
- 2-2-hoc
- 2-3-hoc

# Part 3

Your task in this lab is to create a higher order component to show warning in case the `value` of an Input component has less then x characters. The amount of minimum required characters must be provided when the Input component is wrapped.

You need to fill out the `withMinLengthValidation.js`. You can see how this higher order component is used in `index.js`.

```sh
index.js                   # Renders a Counter wrapped by withMinLengthValidation
withMinLengthValidation.js # This should export the higher order component
```

With `npm start` you can run the application, but it will fail until you implemented `withMinLengthValidation`.

## Testing

To make it easier for you to complete this task, we've added snapshot tests verifying that you've arrived at the correct app. This command will run the tests:

```sh
npm run test
```

If you haven't changed anything you should see two test failures saying `TypeError: (0 , _withMinLengthValidation2.default) is not a function` — that's because there's nothing in the `withDefaultCountProp.js` file yet!

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
