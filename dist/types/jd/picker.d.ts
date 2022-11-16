/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Picker {
  /**
   * mode 为 selector 或 multiSelector 时，range 有效
   */
  range?: {
    [k: string]: unknown;
  };
  /**
   * 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
   */
  "range-key"?: string;
  /**
   * value 的值表示选择了 range 中的第几个（下标从 0 开始）
   */
  value?: number;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * value 改变时触发 change 事件，event.detail = {value: value}
   */
  bindChange?: () => void;
  /**
   * 取消选择或点遮罩层收起 picker 时触发
   */
  bindCancel?: () => void;
}
