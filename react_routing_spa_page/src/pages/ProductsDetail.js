import {Link, useParams} from "react-router-dom";

function ProductsDetail() {
    const params = useParams();
    return (<>
        <h1>Product Details!</h1>
        <p>{params.productId}</p> {/*라우터에 지정한 이름으로*/}
        <Link to={'../'}
              relative={"path"} //Link는 지정한 위치로 보내고 path는 경로로 보낸다.
        >Back</Link>
    </>
    )
}

export default ProductsDetail;