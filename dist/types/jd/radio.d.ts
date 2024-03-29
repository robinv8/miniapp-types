/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Radio {
  /**
   * <radio/> 标识。当该 <radio/> 选中时，<radio-group/> 的 change 事件会携带 <radio/> 的 value
   */
  value?: string;
  /**
   * 当前是否选中
   */
  checked?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * radio 的颜色，同 css 的 color
   */
  color?: string;
}
