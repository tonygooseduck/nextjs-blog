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
		<p>Hello, my name is Iu Chian. I am a software engineer interested in building great applications.</p>
	  </section>
	</Layout>
  )
}
