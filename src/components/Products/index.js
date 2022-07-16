import React from 'react'
import styles from "./styles.css"

const Products = () => {

    const productsContent = [
        {
            productname: "some item",
            imgUrl: "./assets/product1.png",
            description: "some dummy text some dummy text some dummy text some dummy text",
            price: 4
        },
        {
            productname: "some item",
            imgUrl: "./assets/product2.png",
            description: "some dummy text some dummy text some dummy text some dummy text",
            price: 4
        },
        {
            productname: "some item",
            imgUrl: "./assets/product3.png",
            description: "some dummy text some dummy text some dummy text some dummy text",
            price: 4
        },
        {
            productname: "some item",
            imgUrl: "./assets/product3.png",
            description: "some dummy text some dummy text some dummy text some dummy text",
            price: 4
        },
        {
            productname: "some item",
            imgUrl: "./assets/product3.png",
            description: "some dummy text some dummy text some dummy text some dummy text",
            price: 4
        },
        {
            productname: "some item",
            imgUrl: "./assets/product3.png",
            description: "some dummy text some dummy text some dummy text some dummy text",
            price: 4
        },
    ]
    return (
        <div className="contanet bg-[#f8f8f8] p-10 text-center">

            <div className="mainText ">
                <h1 className='font-bold text-4xl'>Latest Products</h1>

            </div>
            <a href="" className='mt-[1rem] text-blue-400 underline font-bold'>Shop All Latest products</a>


            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-center">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
                            {/* Carousel indicators */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                                <li data-target="#myCarousel" data-slide-to={1} />
                                <li data-target="#myCarousel" data-slide-to={2} />
                            </ol>
                            {/* Wrapper for carousel items */}
                            <div className="carousel-inner">
                                {
                                    [...Array(productsContent.length / 3)].map((item, indexItem) =>
                                        <div className={`item ${indexItem == 0 ? "active" : null}`}>
                                            <div className="row">


                                                {



                                                    productsContent.slice(indexItem, window.innerWidth <= 640 ? 1 + indexItem : 3 + indexItem).map(product =>
                                                        <div className="col-sm-4">
                                                            <div className="thumb-wrapper">
                                                                <div className="img-box">
                                                                    <img src={product.imgUrl} className="img-responsive" alt="" />
                                                                </div>
                                                                <div className="thumb-content">
                                                                    <h4 className='font-bold'>{product.productname}</h4>
                                                                    <p>{product.description}</p>
                                                                    <p className="font-bold text-2xl">{product.price}.00 <i class="fa fa-usd text-xl" aria-hidden="true"></i>
                                                                    </p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                }

                                            </div>
                                        </div>
                                    )
                                }


                            </div>
                            {/* Carousel controls */}
                            <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-angle-left" />
                            </a>
                            <a className="carousel-control right" href="#myCarousel" data-slide="next">
                                <i className="fa fa-angle-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products