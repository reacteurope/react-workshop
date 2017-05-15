import React, { Component } from 'react';
import TabGroup from './components/TabGroup';
import Tab from './components/Tab';
import TabTitle from './components/Tab/Title';
import TabContent from './components/Tab/Content';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tab Group #1</h1>
        {/* ⚠️ DO NOT CHANGE THIS CODE ⚠️ */}
        {/* It should work exactly as-is */}
        <TabGroup>
          <Tab>
            <TabTitle>First</TabTitle>
            <TabContent>Some content for the first tab</TabContent>
          </Tab>
          <Tab>
            <TabTitle>Second</TabTitle>
            <TabContent>The second tab also has some content, of course</TabContent>
          </Tab>
          <Tab>
            <TabTitle>Third</TabTitle>
            <TabContent>This is where we hide all the secrets, shhhh</TabContent>
          </Tab>
        </TabGroup>
        <h1>Tab Group #2</h1>
        <TabGroup>
          <Tab>
            <TabTitle>Fourth</TabTitle>
            <TabContent>Yep there's something here too!</TabContent>
          </Tab>
          <Tab>
            <TabTitle>Fifth</TabTitle>
            <TabContent>Go ahead, click the last one and you'll see we put content everywhere</TabContent>
          </Tab>
          <Tab>
            <TabTitle>Sixth</TabTitle>
            <TabContent>You done it!</TabContent>
          </Tab>
        </TabGroup>
      </div>
    );
  }
}

export default App;
