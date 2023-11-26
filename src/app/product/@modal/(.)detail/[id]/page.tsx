"use client";

import { getData } from "@/app/services/producst";
import Image from "next/image";
import Modal from "@/components/core/Modal";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProductPage(props: any) {
  const { params } = props;
  // const product = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=` + params.id
  // );

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=` + params.id,
    fetcher
  );
  // const products = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product`
  // );

  const product = {
    data: data?.data,
  };

  return (
    <Modal>
      <Image
        src={product.data?.image}
        alt="product"
        width={500}
        height={500}
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-4">
        <h3 className="text-black">{product.data?.name}</h3>
        <p className="text-black">Price : ${product.data?.price}</p>
      </div>
    </Modal>
  );
}
