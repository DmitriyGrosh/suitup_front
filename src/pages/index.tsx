import React, { FC, ComponentType, PropsWithChildren } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';
import { viewerModel } from '@entities/viewer';

import { Main } from '@pages/main';
import { Auth } from '@pages/auth';
import { RegisterPage } from '@pages/register';
import { CreateEvent } from '@pages/create-event';
import { ViewEvent } from '@pages/view-event';
import { Category } from '@pages/category';
import { Account } from '@pages/../widgets/account';
import { MyEvents } from '@pages/my-events';

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

const withAdminLayout: IWithLayout = (Component) => {
  const WithLayout: FC<PropsWithChildren> = (props) => (
    <>
      <Header />
      <main>
        <Account />
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

const PrivateRoute: FC<IRoute> = ({ component: Component }) => {
  const { isAuth } = viewerModel.useAuth();

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }

  return <Component />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute component={withLayout(Main)} />,
  },
  {
    path: '/me',
    element: <PrivateRoute component={withLayout(Main)} />,
  },
  {
    path: '/auth',
    element: <PublicRoute component={Auth} />,
  },
  {
    path: '/register',
    element: <PublicRoute component={RegisterPage} />,
  },
  {
    path: '/event',
    children: [
      {
        path: 'all',
        element: <PrivateRoute component={withAdminLayout(MyEvents)} />,
      },
      {
        path: 'add',
        element: <PrivateRoute component={withAdminLayout(CreateEvent)} />,
      },
      {
        path: 'view/:id',
        element: <PublicRoute component={ViewEvent} />,
      },
    ],
  },
  {
    path: '/category',
    element: <PrivateRoute component={withAdminLayout(Category)} />,
  },
]);

const Routing: FC = () => <RouterProvider router={router} />;

export default Routing;
