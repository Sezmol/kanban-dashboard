import { Col, Flex, Row } from "antd";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import MainHeader from "./components/MainHeader/MainHeader";
import SideBar from "./components/SideBar/SideBar";
import MainContent from "./components/MainContent/MainContent";

import styles from "./App.module.scss";

function App() {
  return (
    <Row className={styles.app}>
      <Col span={1}>
        <NavBar />
      </Col>
      <Col span={3}>
        <SideBar />
      </Col>
      <Col span={20}>
        <Header />
        <Flex vertical>
          <MainHeader />
          <MainContent />
        </Flex>
      </Col>
    </Row>
  );
}

export default App;
