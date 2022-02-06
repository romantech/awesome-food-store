import { Layout, Menu } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import urls from '@/lib/urls';

const { Header, Footer, Content } = Layout;

export default function Container({ children, title }) {
  const router = useRouter();

  return (
    <Layout className="h-screen">
      <Head>
        <title>{`Awesome Food Store | ${title ?? 404}`}</title>
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
      <Content className="w-screen h-[calc(100vh-134px)] bg-white grid place-content-center">
        {children}
      </Content>
      <Footer>© 2022 COLORFILTER</Footer>
    </Layout>
  );
}
