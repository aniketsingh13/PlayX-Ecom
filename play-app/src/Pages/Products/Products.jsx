import React from 'react'
import { Filter } from '../../Components';
import { ProdCard } from '../../Components/ProdCard/ProdCard';
import { useProudctFilter } from '../../Context/FilterCont';
import { useProduct } from '../../Context/ProductCont';
import {SortedProduct} from "../../Utils/SortedProduct"
import {CategoryList} from  "../../Utils/CategoryList"
import "./Products.css";
import { RatingProduct } from '../../Utils/RatingProduct';
import { sliderProduct } from '../../Utils/sliderProduct';

const Products = () => {
const {prodData} = useProduct();
const {filterState} = useProudctFilter()
const {sortBy,rating,newPrice } = filterState;
const categoryData = CategoryList(prodData,filterState)
const ratingData = RatingProduct(categoryData,rating)
const rangeData = sliderProduct(ratingData,newPrice )
const sortedData = SortedProduct(rangeData,sortBy);
  return (
    <div>
      <div>
      <h3 className='mt-l f-m font-xl' style={{color: 'var(--primary-color)'}}>Showing all Products()</h3>
    <main className="product-container flex">
    <aside className="aside-container pt-l ">
      <Filter />
    </aside>
    <div className="center-container flex mt-l ml-m mb-l mr-m">
      {sortedData.map(cardData => {
      return(
      <ProdCard prod={cardData} key={cardData._id}/>
      )
    } )}
      </div>
      </main>
      </div>
    </div>
  )
}

export {Products} 