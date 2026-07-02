import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import RootLayout from '@/layout/RootLayout';
import Home from '@/routes/Home';
import Models from '@/routes/Models';
import VehicleDetail from '@/routes/VehicleDetail';
import Technology from '@/routes/Technology';
import Pricing from '@/routes/Pricing';
import About from '@/routes/About';
import Contact from '@/routes/Contact';
import TestDrive from '@/routes/TestDrive';
import NotFound from '@/routes/NotFound';

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const modelsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/models', component: Models });
const vehicleDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/models/$slug',
  component: VehicleDetail,
});
const technologyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/technology', component: Technology });
const pricingRoute = createRoute({ getParentRoute: () => rootRoute, path: '/pricing', component: Pricing });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact });
const testDriveRoute = createRoute({ getParentRoute: () => rootRoute, path: '/test-drive', component: TestDrive });

const routeTree = rootRoute.addChildren([
  indexRoute,
  modelsRoute,
  vehicleDetailRoute,
  technologyRoute,
  pricingRoute,
  aboutRoute,
  contactRoute,
  testDriveRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: false,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
