/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Textarea {
  /**
   * 输入框的内容
   */
  value?: string;
  /**
   * 输入框为空时占位符
   */
  placeholder?: string;
  /**
   * 指定 placeholder 的样式，目前仅支持color,font-size和font-weight
   */
  "placeholder-style"?: string;
  /**
   * 指定 placeholder 的样式类
   */
  "placeholder-class"?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度
   */
  maxlength?: number;
  /**
   * 自动聚焦，拉起键盘。
   */
  "auto-focus"?: boolean;
  /**
   * 获取焦点
   */
  focus?: boolean;
  /**
   * 是否自动增高，设置auto-height时，style.height不生效
   */
  "auto-height"?: boolean;
  /**
   * 如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true
   */
  fixed?: boolean;
  /**
   * 指定光标与键盘的距离。取`textarea`距离底部的距离和`cursor-spacing`指定的距离的最小值作为光标与键盘的距离
   */
  "cursor-spacing"?: number;
  /**
   * 指定focus时的光标位置
   */
  cursor?: number;
  /**
   * 是否显示键盘上方带有”完成“按钮那一栏
   */
  "show-confirm-bar"?: boolean;
  /**
   * 光标起始位置，自动聚集时有效，需与`selection-end`搭配使用
   */
  "selection-start"?: number;
  /**
   * 光标结束位置，自动聚集时有效，需与`selection-start`搭配使用
   */
  "selection-end"?: number;
  /**
   * 键盘弹起时，是否自动上推页面
   */
  "adjust-position"?: boolean;
  /**
   * focus时，点击页面的时候不收起键盘
   */
  "hold-keyboard"?: boolean;
  /**
   * 是否去掉 iOS 下的默认内边距
   */
  "disable-default-padding"?: boolean;
  /**
   * 设置键盘右下角按钮的文字
   */
  "confirm-type"?: "send" | "search" | "next" | "go" | "done" | "return";
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   */
  "confirm-hold"?: boolean;
  /**
   * 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持
   */
  bindFocus?: () => void;
  /**
   * 输入框失去焦点时触发，event.detail = {value, cursor}
   */
  bindBlur?: () => void;
  /**
   * 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}
   */
  bindLineChange?: () => void;
  /**
   * 当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode}，keyCode 为键值，目前工具还不支持返回keyCode参数。**bindinput 处理函数的返回值并不会反映到 textarea 上**
   */
  bindInput?: () => void;
  /**
   * 点击完成时， 触发 confirm 事件，event.detail = {value: value}
   */
  bindConfirm?: () => void;
  /**
   * 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}
   */
  bindKeyboardHeightChange?: () => void;
}
