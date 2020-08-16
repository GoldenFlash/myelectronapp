import React from "react";
import { Menu } from "antd";
import {
  FolderOutlined,
  FolderOpenOutlined,
  FileOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default class Sider extends React.Component {
  state = {
    menus: [
      {
        title: "Navigation Three",
        key: "Navigation Three",
        children: [
          {
            title: "Option1",
            key: "Option1",
          },
          {
            title: "Option2",
            key: "Option2",
          },
          {
            title: "Option3",
            key: "Option3",
          },
          {
            title: "Option4",
            key: "Option4",
          },
          {
            title: "Option5",
            key: "Option5",
          },
        ],
      },
    ],
  };
  handleClick = (e) => {
    console.log("click ", e);
  };

  onTitleClick = (e) => {
    console.log("onTitleClick", e);
  };

  render() {
    return (
      <div style={styles.menus}>
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          overflowedIndicator={<FolderOutlined />}
        >
          {this.state.menus.map((subs) => {
            return (
              <SubMenu
                key={subs.key}
                onTitleClick={this.onTitleClick}
                icon={<FolderOpenOutlined />}
                title={subs.title}
              >
                {
                    subs.children.map(item=>{
                        return(
                            <Menu.Item 
                                icon={<FileOutlined />} 
                                key={item.key}
                            >
                                {item.title}
                            </Menu.Item>
                        )
                    })
                }
              </SubMenu>
            );
          })}
        </Menu>
      </div>
    );
  }
}

const styles = {
  menus: {
    // width:256,
    height: "100vh",
    overflowY: "scroll",
  },
};
