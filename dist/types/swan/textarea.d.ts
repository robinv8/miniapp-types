/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Textarea {
  /**
   * 输入框的内容，若要动态设置输入框内容，需设置value = "{= value =}"（注：若要取键盘输入后的 value 请通过 bindinput 获取）
   */
  value?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度
   */
  maxlength?: number;
  /**
   * 输入框为空时占位符。其样式暂时只支持设置 text-align、font-size、font-weight、color
   */
  placeholder?: string;
  /**
   * 指定 placeholder 的样式
   */
  "placeholder-style"?: string;
  /**
   * 指定 placeholder 的样式类
   */
  "placeholder-class"?: string;
  /**
   * 是否自动增高，设置 auto-height 时，style.height 不生效
   */
  "auto-height"?: boolean;
  /**
   * 指定 focus 时的光标位置，自动聚焦时才会生效
   */
  cursor?: number;
  /**
   * 自动聚焦，调起键盘
   */
  "auto-focus"?: boolean;
  /**
   * 设置键盘右下角按钮的文字
   */
  "confirm-type"?: "default" | "done" | "send" | "search" | "next" | "go";
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   */
  "confirm-hold"?: boolean;
  /**
   * 获取焦点，调起键盘
   */
  focus?: boolean;
  /**
   * 如果 textarea 是在一个position: fixed的区域，需要显示指定属性 fixed 为 true
   */
  fixed?: boolean;
  /**
   * 指定光标与键盘的距离（单位：px）。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   */
  "cursor-spacing"?: number;
  /**
   * 是否显示键盘上方带有“完成”按钮那一栏
   */
  "show-confirm-bar"?: boolean;
  /**
   * 光标起始位置，自动聚焦时有效，需与 selection-end 搭配使用
   */
  "selection-start"?: number;
  /**
   * 光标结束位置，自动聚焦时有效，需与 selection-start 搭配使用
   */
  "selection-end"?: number;
  /**
   * 键盘弹起时，是否自动上推页面
   */
  "adjust-position"?: boolean;
  /**
   * 输入框聚焦时触发，event.detail = {value, height}，height 为键盘高度
   */
  bindFocus?: () => void;
  /**
   * 输入框失去焦点时触发，event.detail = {value, cursor}
   */
  bindBlur?: () => void;
  /**
   * 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0, lineHeight: 0}
   */
  bindLineChange?: () => void;
  /**
   * 当键盘输入时，触发 input 事件，event.detail = {value, cursor}，bindinput 处理函数的返回值并不会反映到 textarea 上
   */
  bindInput?: () => void;
  /**
   * 点击完成时，触发 confirm 事件，event.detail = {value: value}
   */
  bindConfirm?: () => void;
}