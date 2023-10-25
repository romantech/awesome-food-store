import { Layout, Menu } from 'antd';
import Head from 'next/head';
import { withRouter } from 'next/router';
import urls from '@/lib/urls';
import { GithubOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

function Container({ router, children }) {
  const selectedKeys = router.pathname.split('/')[1];
  const title = urls.reduce(
    (title, url) =>
      url.name.toLowerCase() === selectedKeys.toLowerCase() ? url.name : title,
    '',
  );

  return (
    <Layout className="min-h-screen overflow-x-hidden">
      <Head>
        <title>{`AFS | ${title || 'Oops'}`}</title>
      </Head>
      <Header className="fixed top-0 z-10 flex w-full items-center gap-8">
        <a
          data-title="AWESOME FOOD STORE"
          target="_blank"
          className="overflow-hidden text-ellipsis whitespace-nowrap font-heading text-lg font-bold text-white before:content-['AFS'] hover:text-white ss:before:content-[attr(data-title)]"
        />
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
      <Content className="flex w-screen flex-col items-center justify-center bg-primary-bg px-4 pt-28 pb-12 min-h-content">
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
