import ProductList from "../components/ProductList.jsx"
import { useFetch } from "../hooks/useFetch.jsx"

function Home() {
  const { data, error, isPending} = useFetch("https://api.jsonbin.io/v3/b/6ac5430cac6210605a1a2066/latest")

  return (
    <section>
      <div className="container">
        {error && <h2 className="error">{error}</h2>}
        {isPending && <h2 className="loader">Loading...</h2>}
        {data && <ProductList products={data.record.products}/>}
      </div>
    </section>
  )
}

export default Home