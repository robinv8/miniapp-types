/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Checkbox {
  /**
   * <checkbox>标识，选中时触发<checkbox-group>的 change 事件，并携带 <checkbox> 的 value
   */
  value?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 当前是否选中，可用来设置默认选中
   */
  checked?: boolean;
  /**
   * checkbox的颜色，同css的color
   */
  color?: string;
  /**
   * 无障碍访问，（属性）元素的额外描述
   */
  "aria-label"?: string;
}
