/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PickerView {
  /**
   * 数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项
   */
  value?: unknown[];
  /**
   * 设置选择器中间选中框的样式
   */
  "indicator-style"?: string;
  /**
   * 设置选择器中间选中框的类名
   */
  "indicator-class"?: string;
  /**
   * 设置蒙层的样式
   */
  "mask-style"?: string;
  /**
   * 设置蒙层的类名
   */
  "mask-class"?: string;
  /**
   * 选择器标题，建议标题控制在 12 个中文汉字长度内，避免出现截断现象, 截断部分将以 ... 形式展示
   */
  title?: string;
  /**
   * 当滚动选择，value 改变时触发 change 事件，event.detail = {value: value};value 为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）
   */
  bindChange?: () => void;
}
