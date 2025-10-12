import Tarjetita from "../tarjetita/Tarjetita.jsx";
import './Home.css'
import products from "../../Data/products.json"
function Home()  {
  const productList = products.map(v=> {
    return <Tarjetita key={v.id} title={v.title} description={v.description} />
  })

  return (
    <div className="HomeStyles">
      <div>
      <h3>Título de la sección</h3>
      <div className="container">
      {productList}
      </div>
    </div>
    </div>
  )
}


export default Home;


