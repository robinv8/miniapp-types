/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PickerView {
  /**
   * 数组中的数字表示 picker-view-column 中对应的 index （从 0 开始）。
   * 示例：value=“{{[2]}}”
   */
  value?: {
    [k: string]: unknown;
  };
  /**
   * 选中框样式。
   */
  "indicator-style"?: string;
  /**
   * 选中框的类名。
   */
  "indicator-class"?: string;
  /**
   * 蒙层的样式。
   */
  "mask-style"?: string;
  /**
   * 蒙层的类名。
   */
  "mask-class"?: string;
  /**
   * 是否在手指松开时立即触发 change 事件，若不开启则会在滚动动画结束后触发 change 事件。
   */
  "immediate-change"?: boolean;
  /**
   * 滚动选择 value 改变时触发，event.detail = {value: value} value 为数组，表示 picker-view 内的 picker-view-column index 索引 ，从 0 开始。
   */
  onChange?: () => void;
  /**
   * 当滚动选择开始时候触发事件。
   */
  onPickStart?: () => void;
  /**
   * 当滚动选择结束时候触发事件。
   */
  onPickEnd?: () => void;
}
