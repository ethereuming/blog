import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Blog";
export const siteTitle = "Omers Blog";

export default function Layout({ children, home, Blogindex }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Omers blog made using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="Omers Blog made using Next.js"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="all" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
      {!home && !Blogindex && (
        <div className={styles.backToHome}>
          <Link href="/posts/blog-index">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      {Blogindex ? (
        <>
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
