import { Layout, Menu } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import urls from 'lib/urls';

const { Header, Footer, Content } = Layout;

const Container = function ({ children, title }) {
  const router = useRouter();

  return (
    <Layout className="h-screen">
      <Head>
        <title>{`Purple-IO 사전과제 | ${title ?? 404}`}</title>
      </Head>
      <Header className="flex gap-8 items-center">
        <Link href={'/'}>
          <a className="text-lg text-white font-bold hover:text-white">
            AWESOME FOOD STORE
          </a>
        </Link>
        <Menu
          className="flex-auto"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={router.pathname}
        >
          {urls.map(({ name, path }) => (
            <Menu.Item key={path} onClick={() => router.push(path)}>
              {name}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content className="bg-white flex items-center justify-center">
        {children}
      </Content>
      <Footer>© 2022 YOHAN JANG</Footer>
    </Layout>
  );
};

export default Container;
