/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CheckboxGroup {
  /**
   * 组件名字，用于表单提交获取数据。
   */
  name?: string;
  /**
   * 中选中项发生改变时触发， detail = {value: 选中的 checkbox 项 value 的值}。
   */
  onChange?: () => void;
}
