import useSeo from '@/hooks/useSeo';
import MagneticButton from '@/components/animations/MagneticButton';

export default function NotFound() {
  useSeo({ title: 'Page Not Found' });

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-abyss px-6 text-center">
      <p className="heading-xl text-aurora">404</p>
      <p className="mt-4 max-w-md text-base text-mist">
        This road doesn't exist — but six electric ones do.
      </p>
      <div className="mt-10">
        <MagneticButton href="/">Back to Home</MagneticButton>
      </div>
    </div>
  );
}
