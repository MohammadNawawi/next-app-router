import React from "react";

export default function Layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-5 flex justify-center items-center">
        {products}
        {analytics}
      </div>
      {payments}
    </div>
  );
}

// apabila kita mencantumkan page pada layout (parallel routes) maka harus dipastikan tercantum seperti diatas semua, folder '@'. jika tidak makan akan shortdump atau terjadi error pada sistem , namun bisa diisi dengan folder @default
