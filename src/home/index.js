import React from "react";
import Menus from "./menus";
import Editor from "./markdown_editor";
export default class Sider extends React.Component {
  handleClick = (e) => {
    console.log("click ", e);
  };

  render() {
    return (
      <div style={styles.container}>
                    <Menus></Menus>
                    <Editor></Editor>


        {/* <div style={{ display: "inline-block" }}>
          <Menus></Menus>
        </div>
        <div style={{ display: "inline-block" }}>
          <Editor></Editor>
        </div> */}
      </div>
    );
  }
}

const styles = {
  container: {
      width:"100%",
    display:"flex",
    // alignItems:"center",
    height: "100vh",
    overflow:"hidden"
  },
};
