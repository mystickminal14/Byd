import { useParams } from '@tanstack/react-router';
import { getVehicle, getOtherVehicles } from '@/data/vehicles';
import { SITE } from '@/data/site';
import useSeo from '@/hooks/useSeo';
import VehicleHero from '@/components/sections/vehicle/VehicleHero';
import VehicleStory from '@/components/sections/vehicle/VehicleStory';
import VehicleCinematic from '@/components/sections/vehicle/VehicleCinematic';
import VehicleSpecs from '@/components/sections/vehicle/VehicleSpecs';
import VehicleFeatures from '@/components/sections/vehicle/VehicleFeatures';
import AdasTheatre from '@/components/sections/vehicle/AdasTheatre';
import VideoExperience from '@/components/sections/VideoExperience';
import VariantStudio from '@/components/sections/vehicle/VariantStudio';
import VehicleGallery from '@/components/sections/vehicle/VehicleGallery';
import RelatedVehicles from '@/components/sections/vehicle/RelatedVehicles';
import EnquiryCTA from '@/components/sections/EnquiryCTA';
import NotFound from '@/routes/NotFound';

export default function VehicleDetail() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const vehicle = getVehicle(slug);

  useSeo({
    title: vehicle ? `${vehicle.name} — ${vehicle.tagline}` : 'Model',
    description: vehicle
      ? `${vehicle.overview} Explore variants, EMI and book a test drive with BYD Nepal.`
      : undefined,
    jsonLd: vehicle
      ? {
          '@context': 'https://schema.org',
          '@type': 'Car',
          name: vehicle.name,
          brand: { '@type': 'Brand', name: 'BYD' },
          description: vehicle.overview,
          image: `${SITE.url}${vehicle.heroImage}`,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'NPR',
            price: vehicle.startingPrice,
            seller: { '@type': 'Organization', name: SITE.legalName },
          },
        }
      : undefined,
  });

  if (!vehicle) return <NotFound />;

  const related = getOtherVehicles(slug, 3);

  return (
    <>
      <VehicleHero vehicle={vehicle} />
      <VehicleStory blocks={vehicle.story} />
      <VehicleCinematic image={vehicle.cinematicImage} tagline={vehicle.tagline} name={vehicle.name} />
      <VehicleSpecs specs={vehicle.specs} interiorImage={vehicle.interiorImage} />
      <VehicleFeatures features={vehicle.features} />
      {vehicle.adas && <AdasTheatre clips={vehicle.adas} />}
      <VariantStudio vehicle={vehicle} />
      {vehicle.youtubeId && (
        <VideoExperience
          youtubeId={vehicle.youtubeId}
          kicker="Official Film"
          title={`See the ${vehicle.name.replace('BYD ', '')} in Motion`}
          caption="The official BYD film. Tap Sound On for the full experience."
        />
      )}
      <VehicleGallery images={vehicle.gallery} />
      <EnquiryCTA vehicleName={vehicle.name} />
      <RelatedVehicles vehicles={related} />
    </>
  );
}
