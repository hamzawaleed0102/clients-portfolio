import Head from 'next/head';
import NavBar from './nav-bar';
import styles from '../styles/home.module.css';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default Layout;
