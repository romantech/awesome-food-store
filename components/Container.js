import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const Container = function ({ children }) {
  return (
    <Layout className="h-screen">
      <Header>Header</Header>
      <Content className="bg-white flex items-center justify-center">
        {children}
      </Content>
      <Footer>© 2022 Yohan Jang</Footer>
    </Layout>
  );
};

export default Container;
