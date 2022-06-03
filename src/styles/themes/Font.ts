// The font size of Root DOM (`<html />`)
export const ROOT_FONT_SIZE = 16;

/**
 * 關於註解的 size，
 * 前提為 Root Font Size 為 16
 *
 * @export
 * @enum {string}
 */
export enum FontSize {
  extraLarge = '2.25rem', // 36px
  large = '1.25rem', // 20px
  normal = '1rem', // 16px
  small = '0.875rem', // 14px
  extraSmall = '0.75rem', // 12px
  smallest = '0.625rem', // 10px
}

/**
 * @export
 * @enum {number}
 */
export enum FontWeight {
  medium = 500,
  semiBold = 600,
  extraBold = 800,
}
