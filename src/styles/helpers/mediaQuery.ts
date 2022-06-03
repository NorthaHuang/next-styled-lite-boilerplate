/**
 * RWD 斷點清單；單位為 `px`
 *
 * @enum {number}
 */
enum breakpoints {
  mobile = 425,
  tablet = 768,
  laptop = 1024,
  desktop = 1440,
}

/**
 * - 簡化 Media Query 的重複撰寫
 * - 限制斷點的選擇
 *
 * @example
 * ```tsx
 * import styled from 'styled-components';
 * import { media } from '@styles/media-query';
 *
 * const TestingStyle = styled.p`
 *   color: red;
 *
 *   ${media('tablet')`
 *     color: orange;
 *   `}
 * `;
 * ```
 *
 * @export
 * @param  {keyof typeof breakpoints} key - 斷點的 key name
 *    @see {@link breakpoints}
 * @param  {boolean} [isMobileFirst = true] - 是否為行動裝置優先的模式
 * @returns {string} Media Query 的原始 CSS 程式碼字串
 * @mixin
 */
export const media =
  (key: keyof typeof breakpoints, isMobileFirst = true) =>
  (style: TemplateStringsArray | string) => {
    const detectionBasis = isMobileFirst ? 'min' : 'max';
    const breakpoint = breakpoints[key];
    return `
      @media (${detectionBasis}-width: ${breakpoint}px) {
        ${style}
      }
    `;
  };
