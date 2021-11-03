import Link from "next/link";

function ProductList() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>
        <Link href="/product/1">
          <a>product1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/2">
          <a>product2</a>
        </Link>
      </h2>
      <h2>
        {/* replace will take you back to home page when you click reverse in chrom browser */}
        <Link href="/product/3" replace>
          <a>product3</a>
        </Link>
      </h2>
    </>
  );
}
export default ProductList;
