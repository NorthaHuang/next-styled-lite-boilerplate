import { ROOT_FONT_SIZE } from '@styles/themes/Font';

/**
 * 不常用的 Font Size 再使用此 helper
 * @see [FontSize](../themes/Font.ts)
 *
 * 單位換算: `px` -> `rem`
 *
 * @example
 * ```tsx
 * import styled from 'styled-components';
 * import { pxToRem } from '@styles/helpers/pxToRem';
 *
 * const TestingStyle = styled.p`
 *   font-size: ${pxToRem(16)};
 * `;
 * ```
 *
 * @export
 * @param  {number} px - 要換算的 `px` 數值
 * @returns {string} 單位為 `rem` 的字串
 */
export const pxToRem = (px: number): string => `${px / ROOT_FONT_SIZE}rem`;
