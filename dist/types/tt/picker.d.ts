/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Picker {
  /**
   * 选择器类型，详见 mode 的合法值。
   */
  mode?: "selector" | "multiSelector" | "time" | "date" | "region";
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 取消选择收起 picker 时触发
   */
  bindCancel?: () => void;
}
