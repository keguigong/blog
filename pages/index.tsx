import Head from "next/head"
import { getSortedPostsData } from "@/utils/posts"
import Link from "next/link"
import Date from "../components/date"
import utilStyles from "@/styles/utils.module.css"
import Layout from "../components/layout"

const personalDescription =
  "Hi there, I am keguigong, a front-end web develeper living in Shanghai. I write my notes here, from front-end questions to anything that interests me."

export default function Home({ allPostsData }: { [key: string]: any }) {
  return (
    <Layout home>
      <Head>
        <title>Blog. - Where keguigong&apos;s thoughts built</title>
        <meta name="description" content={personalDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, type }: { [key: string]: any }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={type === "article" ? `/articles/${id}` : `/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
