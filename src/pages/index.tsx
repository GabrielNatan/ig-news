
import Head from "next/head"
import Style from "./home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.News - Home</title>
      </Head>
      <main className={Style.contentContainer}>
        <section className={Style.hero}>
          <span> Hey, welcome</span>
          <h1>News About the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9,98 month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="girl coding"/>
      </main>
    </>
  )
}
