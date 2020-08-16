import React from "react";
// import SimpleMDE from 'simplemde'
// import EasyMDE from "easymde";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Tabs, Button } from "antd";

const { TabPane } = Tabs;

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: "Tab 1", content: "Content of Tab Pane 1", key: "1" },
      { title: "Tab 2", content: "Content of Tab Pane 2", key: "2" },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  componentDidMount() {
    // this.editor()
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: "New Tab", content: "New Tab Pane", key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = (targetKey) => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter((pane) => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  editor = () => {
    // var simplemde = new SimpleMDE({
    //     element: document.getElementById("editor"),
    // });

    // new EasyMDE({
    //   element: document.getElementById("my-text-area"),
    // });
  };
  render() {
    return (
      <div style={styles.editor}>
        {/* <div style={{width:600}}> */}

        {/* <SimpleMDE style={{height:800}}></SimpleMDE> */}

          <Tabs
          style={{height:800}}
            hideAdd
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {this.state.panes.map((pane) => (
              <TabPane style={{height:"100%"}} tab={pane.title} key={pane.key}>

                <SimpleMDE options={{
                    minHeight:"100vh"
                }}></SimpleMDE>
              </TabPane>
            ))}
          </Tabs>
        {/* </div> */}
      </div>
    );
  }
}

const styles = {
  editor: {
    flex: 1,
    height: "100vh",
    // overflow:"hidden"
  },
};
