import React, { FC, ComponentType, PropsWithChildren } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from '../widgets/header';
import { Footer } from '../widgets/footer';

interface IWithLayout {
  (component: ComponentType<any>): ComponentType<any>;
}

interface IRoute {
  component: ComponentType<any>;
}

const withPureLayout: IWithLayout = (Component) => {
  const WithPureLayout: FC = (props) => (
    <div>
      <Component {...props} />
    </div>
  );

  WithPureLayout.displayName = `WithPureLayout(${
    Component?.displayName ?? Component?.name
  })`;
  return WithPureLayout;
};

const withLayout: IWithLayout = (Component) => {
  const WithLayout: FC<PropsWithChildren> = (props) => (
    <>
      <Header />
      <main>
        <Component {...props} />
      </main>
      <Footer />
    </>
  );

  WithLayout.displayName = `WithPureLayout(${
    Component?.displayName ?? Component?.name
  })`;
  return WithLayout;
};

const PublicRoute: FC<IRoute> = ({ component: Component }) => {
  return <Component />;
};

const Main: FC = () => {
  return <div>Main</div>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute component={withLayout(Main)} />,
  },
]);

const Routing: FC = () => <RouterProvider router={router} />;

export default Routing;
