
export default async function DetailPage({ params }) {
  const { slug } = await params; // ✅ Đúng cách
  return <div>{slug}</div>;
}
