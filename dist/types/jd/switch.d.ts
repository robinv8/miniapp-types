/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Switch {
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 样式，有效值：switch, checkbox
   */
  type?: string;
  /**
   * switch 的颜色，同 css 的 color
   */
  color?: string;
  /**
   * checked 改变时触发 change 事件，event.detail={ value:checked}
   */
  bindChange?: () => void;
}
