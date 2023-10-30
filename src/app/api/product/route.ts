import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Mouse",
    price: 140000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe3e6a3f-14a3-42f7-8754-39a95bf2b2c0/zion-3-pf-basketball-shoes-vTjpz4.png",
  },
  {
    id: 2,
    title: "Keyboard",
    price: 240000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe3e6a3f-14a3-42f7-8754-39a95bf2b2c0/zion-3-pf-basketball-shoes-vTjpz4.png",
  },
  {
    id: 3,
    title: "Monitor",
    price: 340000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe3e6a3f-14a3-42f7-8754-39a95bf2b2c0/zion-3-pf-basketball-shoes-vTjpz4.png",
  },
  {
    id: 4,
    title: "Monitor2",
    price: 440000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe3e6a3f-14a3-42f7-8754-39a95bf2b2c0/zion-3-pf-basketball-shoes-vTjpz4.png",
  },
  {
    id: 5,
    title: "Monitor3",
    price: 540000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe3e6a3f-14a3-42f7-8754-39a95bf2b2c0/zion-3-pf-basketball-shoes-vTjpz4.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    // const detailProduct = data.find((item) => item.id === Number(id));
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }
  const products = await retrieveData("products");
  return NextResponse.json({ status: 200, message: "Success", data: products });
}
