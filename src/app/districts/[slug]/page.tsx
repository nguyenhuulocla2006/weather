type PageProps = {
  params: {
    slug: string;
  };
};

export default async function DetailPage({ params }: PageProps) {
    const { slug } = await params;
    // console.log(params)

    return <div>{ slug}</div>;
}
