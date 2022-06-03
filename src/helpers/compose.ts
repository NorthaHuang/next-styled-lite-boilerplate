/**
 * 組合 Functions 用；
 * 大多拿來合併 HOC。
 *
 * @export
 * @template T
 * @param {...Array<(a: T) => T>} functions - 合併後的 function/component
 */
export const compose =
  <T>(...functions: Array<(a: T) => T>) =>
  (props: T) =>
    functions.reduceRight(
      (accumulator, currentFunc) => currentFunc(accumulator),
      props
    );
