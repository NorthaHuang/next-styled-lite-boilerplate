import Head from 'next/head';
import type { FC } from 'react';

// Types
import type { Metadata } from './type';

/**
 * 為 BaseComponent 加上元資料
 *
 * @export
 * @param {Metadata} metaData - 網頁元資料物件。 [See type source](./types.tsx)
 * @return {FC<P>} - 已嵌入 Metadata 的組件
 */
const withMetadata =
  ({ title, description, keywords, openGraphArray }: Metadata) =>
  <P extends Record<string, unknown>>(BaseComponent: FC<P>): FC<P> =>
  (props) =>
    (
      <>
        <Head>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
          {keywords && <meta name="keywords" content={keywords} />}

          {/* Open Graph */}
          {openGraphArray?.map(({ property, content }) => (
            <meta property={`og:${property}`} content={content} />
          ))}
        </Head>

        <BaseComponent {...props} />
      </>
    );

export default withMetadata;
