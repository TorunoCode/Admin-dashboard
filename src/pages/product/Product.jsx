import { Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import './product.css'

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
                <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png" alt="" className="productInfoImg" />
                    <span className='productName'>Apple AirPods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfo">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfo">sales:</span>
                        <span className="productInfoValue">321</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfo">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfo">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className='productForm'>
                <div className="productFormLeft">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder='Apple AirPod'/>
                    <label htmlFor="">Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                    <label htmlFor="">Active</label>
                    <select name="active" id="active">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                    <img src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png" alt="" className="productInfoImg" />
                   <label htmlFor="file">
                    <Publish/>
                   </label>
                   <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
