import Sider from "antd/es/layout/Sider";
import styles from "./SideBar.module.scss";
import { Avatar, Flex } from "antd";
import Title from "antd/es/typography/Title";

const projectsList = [
  {
    title: "Building enterprise",
    emoji: "🏙️",
    backgroundColor: "#DBEEFF",
  },
  {
    title: "Web platform",
    emoji: "🌐",
    backgroundColor: "#EDF6FA",
  },
  {
    title: "Mac website",
    emoji: "🍔",
    backgroundColor: "#FCE1C6",
  },
  {
    title: "Cosmetic web app",
    emoji: "🚀",
    backgroundColor: "#F4D7F1 ",
  },
];

const SideBar = () => {
  return (
    <Sider className={styles.sidebar}>
      <div>
        <Title level={1}>Projects</Title>
        <Flex vertical gap={8}>
          {projectsList.map((project) => (
            <div
              key={project.title}
              className={`${styles["project-card"]} ${styles.active}`}
            >
              <Avatar style={{ backgroundColor: project.backgroundColor }}>
                {project.emoji}
              </Avatar>
              <p>{project.title}</p>
            </div>
          ))}
        </Flex>
      </div>
      <Flex>
        <Title level={2}>Analytics</Title>
      </Flex>
    </Sider>
  );
};

export default SideBar;
