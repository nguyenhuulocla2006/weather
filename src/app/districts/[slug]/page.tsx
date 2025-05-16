// import { districtCoordinates } from '@/lib/districtCoordinates';
// import DistrictCard from '@/components/districts/DistrictCard';
type PageProps = {
    params: {
        slug: string;
    };
};
export default function DetailPage({ params }: PageProps) {
    const { slug } = params;
    // const coords = districtCoordinates[slug];
    return (
        <div>
            {slug}
        </div>
    );
}