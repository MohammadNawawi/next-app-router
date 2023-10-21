type DetailProductPage = {
  params: {
    slug: string[];
  };
};

export default function DetailProductPage(props: DetailProductPage) {
  const { params } = props;
  console.log(params);

  return (
    <div>
      <h1>{params.slug ? "DetailProductPage" : "Productpage"}</h1>
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
