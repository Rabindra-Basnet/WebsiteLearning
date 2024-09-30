
// some of the errors using fetch in useeffect
// useEffect(
//     ; (async fetchProducts = () => {
//     const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
//     const data = await response.json()

// }) ()
//     , [])
{/* {products.map((product, index) => (
        <span key={index}>
            <img src={product.thumbnail} alt="" />
        </span>
    ))
    } */}
{/* for pagination on system on a front we could use slice method for slicing like page as a state {page * 10- 10, page* 10} as a logic  */ }
{/* incase of no backend part we could use this  */ }
{/* {products.slice(page * 10 - 10, page * 10).map((product) => ( */ }
{/* pagination process comes from here and above is to add the products to the page through fetch */ }

import { useEffect, useState } from 'react'
import "./pagination.css"

function Pagination() {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        ; (async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page}&order=asc`)
                const data = await response.json()
                console.log(data)
                if (data && data.products) {
                    setProducts(data.products)
                    setTotalPages(Math.ceil(data.total / 10))
                    // console.log(Math.ceil(data.total / 10))
                }
            } catch (error) {
                console.error("Failed to fetch products:", error)
            }
        })()
        // fetchProducts()
    }, [page])

    console.log(products)
    // console.log(data.products)

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page)
            setPage(selectedPage)
    }
    return <>
        <h1>This is product section</h1>
        {products.length > 0 && <div className='products'>
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="product-image-wrapper">
                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                    </div>
                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <span className="product-price">{product.price}</span>
                    </div>
                </div>
            ))}
        </div>}

        {products.length > 0 && <div className='pagination'>
            <span
                className={page > 1 ? "" : "page__disabled"}
                onClick={() => selectPageHandler(page - 1)}>⬅️ Prevpage</span>
            {/* {
                [Array(totalPages)].map((_, i) => (
                    <span
                        key={i}
                        onClick={() => selectPageHandler(i + 1)}
                        className={page == i + 1 ? "page_selected" : ""}
                    >
                        {i + 1}
                    </span>
                ))
            } */}
            < span
                onClick={() => selectPageHandler(page + 1)}
                className={` ${page < totalPages ? "" : "page__disabled"}`}
            > Nextpage ➡️ </span>
        </div >}
    </>
}
export default Pagination

