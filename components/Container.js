import { Layout, Menu } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import urls from '@/lib/urls';

const { Header, Footer, Content } = Layout;

function Container({ router, children }) {
  const selectedKeys = router.pathname.split('/')[1];
  const title = urls.reduce(
    (title, url) =>
      url.name.toLowerCase() === selectedKeys.toLowerCase() ? url.name : title,
    '',
  );

  return (
    <Layout className="h-screen">
      <Head>
        <title>{`AFS | ${title || 'Oops'}`}</title>
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
          defaultSelectedKeys={selectedKeys}
        >
          {urls.map(({ name, path }) => (
            <Menu.Item
              key={name.toLowerCase()}
              onClick={() => router.push(path)}
            >
              {name}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content className="w-screen h-[calc(100vh-134px)] bg-white grid place-content-center">
        {children}
      </Content>
      <Footer>© 2022 COLORFILTER</Footer>
    </Layout>
  );
}

export default withRouter(Container);
