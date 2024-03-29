/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PickerView {
  /**
   * 数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。
   */
  value?: {
    [k: string]: unknown;
  };
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
   * 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件。
   */
  "immediate-change"?: boolean;
  /**
   * 滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）
   */
  bindChange?: () => void;
  /**
   * 当滚动选择开始时候触发事件
   */
  bindPickStart?: () => void;
  /**
   * 当滚动选择结束时候触发事件
   */
  bindPickEnd?: () => void;
}
