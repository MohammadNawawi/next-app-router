"use client";
import Link from "next/link";
import { getData } from "../services/producst";
import Image from "next/image";
import useSWR from "swr";

type ProductPage = {
  params: {
    slug: string[];
  };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductPage(props: ProductPage) {
  const { params } = props;
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product`,
    fetcher
  );
  // const products = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product`
  // );

  const products = {
    data: data?.data,
  };

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 mt-5 place-items-center">
      {/* <h1>{params.slug ? "DetailProductPage" : "Productpage"}</h1> */}
      {products.data?.length > 0 &&
        products.data?.map((product: any) => (
          <Link
            href={`/product/detail/${product.id}`}
            key={product.id}
            className="w-11/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 mx-5"
          >
            <Image
              className="p-8 rounded-t-lg object-cover h-96 w-full"
              src={product.image}
              alt="product image"
              height={500}
              width={500}
              loading="lazy"
            />

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                {product.name}
              </h5>

              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      {params.slug && (
        <>
          <h2>Category : {params.slug[0]}</h2>
          <h2>Gender : {params.slug[1]}</h2>
          <h2>ID : {params.slug[2]}</h2>
        </>
      )}
    </div>
  );
}
