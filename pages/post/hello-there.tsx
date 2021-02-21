import Head from 'next/head';
import Image from 'next/image';

const Hello = () => (
   <>
   <Head>
       <title>Hellow There</title>
       <meta property="og:title" content="Hellow There" />
   </Head>
    <article>
        <h1>Hello there!</h1>
        <Image 
            src="/post/hello-there/figueirense.jpg"
            width={640}
            height={427}
        />
    </article>
   </>
);

export default Hello;