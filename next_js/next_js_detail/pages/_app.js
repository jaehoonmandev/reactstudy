import '../styles/globals.css'
import Layout from "@/components/layout/Layout";

//인자들은 NextJS에서 자동으로 보낸다.
//Conponents는 실제로 렌더링될 페이지 컨텐츠, pageProps는 페이지가 받는 특수 프로퍼티
function MyApp({ Component, pageProps }) {
  return(
      <Layout>
        <Component {...pageProps} />
      </Layout>
      );
}

export default MyApp
