import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Header, Footer, Content } = Layout;
const sitemap = [
  {
    name: 'Store',
    path: '/store',
  },
  {
    name: 'About',
    path: '/about',
  },
];

const Container = function ({ children }) {
  const router = useRouter();

  return (
    <Layout className="h-screen">
      <Header className="flex gap-8" style={{ background: '#220C10' }}>
        <Link href={'/'}>
          <a className="text-white font-bold hover:text-white">
            AWESOME FOOD STORE
          </a>
        </Link>
        <Menu
          className="flex-auto"
          style={{ background: '#220C10' }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={router.pathname}
        >
          {sitemap.map(({ name, path }) => (
            <Menu.Item key={path} onClick={() => router.push(path)}>
              {name}
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content className="bg-white flex items-center justify-center">
        {children}
      </Content>
      <Footer>© 2022 Yohan Jang</Footer>
    </Layout>
  );
};

export default Container;
