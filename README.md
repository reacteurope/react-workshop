# Lab #1: Children

Your job in this lab is to build four components: `TabGroup`, `Tab`, `TabTitle` and `TabContent`. These four components should be used like so:

```html
<TabGroup>
	<Tab>
		<TabTitle>Some title</TabTitle>
		<TabContent>Some content</TabContent>
	</Tab>
	<Tab>
		<TabTitle>Some title</TabTitle>
		<TabContent>Some content</TabContent>
	</Tab>
	<Tab>
		<TabTitle>Some title</TabTitle>
		<TabContent>Some content</TabContent>
	</Tab>
</TabGroup>
```

**To see what it should look like at the end go to `children-solution.surge.sh`!**

The `TabTitle` of each tab should always be visible, but the content should only be shown when the tab is selected by clicking on the title.

## Tips

You should not use any CSS tricks to make this happen, we want to see a pure JavaScript solution. (brownie points for making it look good, though)

The `TabGroup` needs to manage the tab selection. The trick is to pass two properties down to each `Tab`:

- `selected` (Boolean): Is this the selected tab
- `onClick` (Function): When called should select the tab that the call came from

The `Tab` itself then needs to render its `Title` and `Content`, making sure to always show the `Title`, calling `props.onClick` when that is pressed and only show the `Content` when `props.selected` is `true`.

## Bonus

If you finish this exercise early, you can try enforcing that the `TabGroup` only has `Tab` components as children, and that the `Tab` component only has `TabTitle` and `TabContent` (and each only once) as children!

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
