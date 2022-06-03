import type { FC } from 'react';

// Components
import { Layout } from '@components/templates/Layout';

/**
 * 將目標組件嵌入 Layout
 *
 * @export
 * @template P - the type of properties of BaseComponent
 * @param {FC<P>} BaseComponent - 想要加入 Layout 的組件
 * @return {FC<P>} - 已嵌入 Layout 的組件
 */
const withLayout =
  <P extends Record<string, unknown>>(BaseComponent: FC<P>): FC<P> =>
  (props) =>
    (
      <Layout>
        <BaseComponent {...props} />
      </Layout>
    );

export default withLayout;
