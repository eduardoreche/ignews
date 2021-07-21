import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>Mar 12, 2021</time>
            <strong>Title</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              iusto eaque neque rerum earum veniam expedita est aspernatur quam
              nesciunt dolorum vitae debitis praesentium exercitationem
              necessitatibus, accusamus nobis quia nam.
            </p>
          </a>
          <a href="">
            <time>Mar 12, 2021</time>
            <strong>Title</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              iusto eaque neque rerum earum veniam expedita est aspernatur quam
              nesciunt dolorum vitae debitis praesentium exercitationem
              necessitatibus, accusamus nobis quia nam.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
