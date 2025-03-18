import {getProductsByCategory, getCategories} from '@/_utils/products'
import CategoryTemplate from '@/_components/templates/CategoryPage'
import {Product} from '@/_models/Product'

export async function generateStaticParams() {
    const categories = getCategories()
    return categories.map(category => ({category}))
}

export default async function CategoryPage({
    params
}: {
    params: {category: string}
}) {
    const products: Product[] = getProductsByCategory(params.category)

    return (
        <>
        <title>{`Audiophile shop - ${params.category}`}</title>
        <CategoryTemplate products={products}/>
        </>
    )
}