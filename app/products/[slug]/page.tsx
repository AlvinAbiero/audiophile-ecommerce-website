import { getProductsPaths, getProductBySlug } from '@/_utils/products'
import ProductPageTemplate from '@/_components/templates/ProductPage'
import { Product } from '@/_models/Product'

export async function  generateStaticParams() {
    const paths = getProducts()
    return paths.map(({category, slug}) => ({category, slug}))
}

export default async function ProductPage({
    params,
}: {
    params: {slug: string}
}) {
    const product: Product | undefined = getProductBySlug(params.slug)

    if (!product) {
        return <h1>Product Not Found</h1>
    }

    return (
    <>
      <title>{`Audiophile shop - ${product.name}`}</title>
      <ProductPageTemplate product={product} />
    </>
    )
}