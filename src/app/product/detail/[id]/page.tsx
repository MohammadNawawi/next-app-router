import { getData } from "@/app/services/producst";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border bg-gray-700">
        <img
          src={product.data.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-4">
          <h3>{product.data.title}</h3>
          <p className="text-black">Price : ${product.data.price}</p>
        </div>
      </div>
    </div>
  );
}
