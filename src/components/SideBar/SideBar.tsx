import Sider from "antd/es/layout/Sider";
import styles from "./SideBar.module.scss";
import { Card, Flex, List } from "antd";
import Title from "antd/es/typography/Title";

const projectsList = [
  {
    title: "Building enterprise",
    emoji: "🏙️",
  },
  {
    title: "Web platform",
    emoji: "🌐",
  },
  {
    title: "Mac website",
    emoji: "🍔",
  },
  {
    title: "Cosmetic web app",
    emoji: "🚀",
  },
];

const SideBar = () => {
  return (
    <Sider className={styles.sidebar}>
      <Flex vertical>
        <Title>Projects</Title>
        {projectsList.map((project) => (
          <Card key={project.title}>{project.title}</Card>
        ))}
      </Flex>
    </Sider>
  );
};

export default SideBar;
