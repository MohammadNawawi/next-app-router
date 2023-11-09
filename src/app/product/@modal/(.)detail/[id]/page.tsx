import { getData } from "@/app/services/producst";
import Image from "next/image";
import Modal from "@/components/core/Modal";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    <Modal>
      <Image
        src={product.data.image}
        alt="product"
        width={500}
        height={500}
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-4">
        <h3 className="text-black">{product.data.name}</h3>
        <p className="text-black">Price : ${product.data.price}</p>
      </div>
    </Modal>
  );
}
