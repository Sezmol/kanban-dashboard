import styles from "./MainHeader.module.scss";
import { Avatar, Button, Flex, Progress } from "antd";
import ReloadIcon from "../../icons/ReloadIcon";
import MoveIcon from "../../icons/MoveIcon";
import FilterIcon from "../../icons/FilterIcon";
import AvatarIcon from "../../icons/AvatarIcon";

const MainHeader = () => {
  return (
    <Flex vertical gap={"1rem"} className={styles["main-header"]}>
      <Flex justify='space-between' align='center' gap={"32rem"}>
        <Flex align='center' justify='center' gap={"0.625rem"} flex={1}>
          <Avatar
            className={styles.icon}
            style={{ backgroundColor: "#DBEEFF" }}
          >
            🏙️
          </Avatar>
          <Progress
            strokeColor='#6e6af0'
            className={styles.progress}
            percent={68}
          />
          <span>complete</span>
        </Flex>
        <Flex align='center' gap={"1.25rem"}>
          <Avatar.Group maxCount={4}>
            <Avatar>
              <AvatarIcon />
            </Avatar>
            <Avatar>
              <AvatarIcon />
            </Avatar>
            <Avatar>
              <AvatarIcon />
            </Avatar>
            <Avatar>
              <AvatarIcon />
            </Avatar>
            <Avatar>
              <AvatarIcon />
            </Avatar>
          </Avatar.Group>
          <Button className={styles["add-button"]} type='primary'>
            + Add board
          </Button>
        </Flex>
      </Flex>

      <Flex justify='space-between'>
        <Flex gap={38} className={styles.tabs}>
          <span>Description</span>
          <span className={styles.acitve}>Board</span>
          <span>Notes</span>
          <span>Test</span>
        </Flex>
        <Flex gap={16}>
          <ReloadIcon />
          <MoveIcon />
          <FilterIcon />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainHeader;
