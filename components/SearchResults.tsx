import { useMemo } from "react"
import { List, ListRowRenderer } from "react-virtualized"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
  results: Array<{
    id: number
    price: number
    title: string
    priceFormatted: string
  }>
  totalPrice: string
  onAddToWishList: (id: number) => void
}

export function SearchResults({
  results,
  totalPrice,
  onAddToWishList,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>Total: {totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={600}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/* {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishList={onAddToWishList}
        />
      ))} */}
    </div>
  )
}
