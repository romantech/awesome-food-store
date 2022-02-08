import { Layout, Menu } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
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
          <a className="font-heading text-lg text-white font-bold hover:text-white text-ellipsis overflow-hidden whitespace-nowrap">
            AWESOME FOOD STORE
          </a>
        </Link>
        <Menu
          className="flex-auto"
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
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
      <Content className="overflow-y-auto bg-primary-bg w-screen h-[calc(100vh-134px)] grid place-content-center">
        {children}
      </Content>
      <Footer className="flex items-center gap-4">
        © 2022 COLORFILTER{' '}
        <GithubOutlined
          className="text-lg"
          onClick={() =>
            window.open('https://github.com/romantech/awesome-food-store')
          }
        />
      </Footer>
    </Layout>
  );
}

export default withRouter(Container);
