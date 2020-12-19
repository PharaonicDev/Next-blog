import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
     
        <p>
        I Am Seeking Challenging Career Opportunity In The Field Of Software
        Engineering To Build Upon And Utilize My Academic Background And
        Software Skills. This Opportunity Will Allow Me To Enter The Market
        And Apply What I Studied And Learned Through My Life Challenges .
        Last Two Years I Was Working As Remote Software Developer Design
        Build And Deployment Websites For Clients Around World ,That Lead
        Me To Founder Cairo Developers Company For Design Brands And
        Developing Software But I Failed ,Because Lack Of Experience In Both
        Business Development And Software Development ,
        In Any Way I Want  Leave A Finger Print In The World
       
        </p>
      </section>
    </Layout>
  )
}
