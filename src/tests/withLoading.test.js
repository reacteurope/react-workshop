import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import withLoading from '../withLoading';

const Component = ({ style = {} }) => <div style={style}>Test</div>;

const ComponentWithLoading = withLoading(Component);

it('should render loading if the prop loading is set to true', () => {
  const tree = toJson(shallow(<ComponentWithLoading loading={true} />));
  expect(tree).toMatchSnapshot();
});

it('should render loading the original component if loading set to false or is undefined', () => {
  const tree = toJson(shallow(<ComponentWithLoading loading={false} />));
  expect(tree).toMatchSnapshot();
  const tree2 = toJson(shallow(<ComponentWithLoading />));
  expect(tree2).toMatchSnapshot();
});

it('should pass down props e.g. style to the child component', () => {
  const tree = toJson(
    shallow(<ComponentWithLoading style={{ background: 'green' }} />)
  );
  expect(tree).toMatchSnapshot();
});
