import { Avatar, Flex, Input, Layout } from "antd";
import EmailIcon from "../../icons/EmailIcon";
import BellIcon from "../../icons/BellIcon";

import styles from "./Header.module.scss";
import AvatarIcon from "../../icons/AvatarIcon";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import SearchIcon from "../../icons/SearchIcon";

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Flex>
        <Input
          className={styles.search}
          placeholder='Search'
          prefix={<SearchIcon />}
        />
      </Flex>
      <Flex justify='center' align='center' gap={16}>
        <Flex gap={12}>
          <EmailIcon />
          <BellIcon />
        </Flex>
        <Flex justify='center' align='center' gap={8}>
          <Avatar
            className={styles.avatar}
            src={<AvatarIcon />}
            alt='User Avatar'
          />
          <Flex vertical justify='center' align='center'>
            <Title>Alexandra C. </Title>
            <Paragraph>Admin</Paragraph>
          </Flex>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};

export default Header;
