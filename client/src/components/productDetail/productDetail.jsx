import { useParams } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getProductDetail, cleanProductDetail} from '../../redux/actions'
let products = require('../../datamock/Products.json')

export default function ProductDetail() {
    let {id} = useParams()
    
    const dispatch = useDispatch()
    // let productDetail = useSelector(state => state.productDetail)

    useEffect(()=>{
        dispatch(getProductDetail(id))
        return dispatch(cleanProductDetail())
    },[])

    // Para fines de mostrar informacion extraigo del producto del datamock
    let productDetail = products.find( product => product.id == id)

    return (<>
        hola
        <span>{productDetail.product_name}</span>
        <span>{productDetail.brand}</span>
        <span>{productDetail.category}</span>
        <span>{productDetail.cost_by_unit}</span>
        <span>{productDetail.country}</span>
        <span>{productDetail.description}</span>
        <span>{productDetail.discount}</span>
        <span>{productDetail.expiration_date}</span>
        <span>{productDetail.image.map( img => <img src={img} alt="fotico_papa"></img>)}</span>
        <span>{productDetail.stock}</span>
        <span>{productDetail.warraty}</span>
    </>
    )
}