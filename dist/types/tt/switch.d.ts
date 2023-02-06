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
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 样式，详见 type 的合法值。
   */
  type?: "switch" | "checkbox";
  /**
   * switch 的颜色，同 CSS 的 color。
   */
  color?: string;
  /**
   * checked 改变时触发该事件，event.detail={value:checked}。
   */
  bindChange?: () => void;
}
