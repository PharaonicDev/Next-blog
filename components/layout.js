import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Abubakr Elghazawy'
export const siteTitle = 'Abubakr Elghazawy'
export const  SiteContactInfoEmail = 'abubakrelghazawy@gmail.com' 
export const SiteContactInfoPhone  = '01555504957'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Software Developer Engineer Write Code With Javascript"
        />
        <meta 
         name="keyword"
         content= " Top 10 Developer in The World ,portfolio, Javascript, developer, React Developer , Front End Developer , React Native Developer , Freelancer Developer , Mobile Apps Developer "
        />
         <meta property="og:title" content="Abubake Elghzawy | Front End Web Developer"/>
        <meta property="og:description" content="JavaScript wizard, chaotic good" />
        <meta property="og:image" content="/imahes/profile.jpg"/>
        <meta property="og:url" content="www.abubakrelghazawy.com" />
        <meta property="og:type" content="website" />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.headingMd}>{name}</h1>
          <div className={utilStyles.headingContact}>
              
          <a href='mailto:abubaker8911@gmail.com' target='_blank'>
               <img
                 src='/images/email.png'
                 className={utilStyles.headingIcon}
               />
           
           </a>
           {/* <a href='tel:+2001555504957' target='_blank'>
               <img
                 src='/images/phone-call.png'
                 className={utilStyles.headingIcon}
               />
               
           </a> */}
          </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
