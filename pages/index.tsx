import type { NextPage } from 'next';
import type { FC } from 'react';

// Helpers
import { compose } from '@helpers/compose';

// HOC
import withMetadata from '@hoc/withMetadata';
import withLayout from '@hoc/withLayout';

const HomePage: NextPage = () => <h1>Hello World!</h1>;

export default compose<FC>(
  withMetadata({ title: 'Home' }),
  withLayout
)(HomePage);
