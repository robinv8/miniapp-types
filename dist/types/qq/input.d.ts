/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Input {
  /**
   * 输入框的初始内容
   */
  value?: string;
  /**
   * input 的类型
   */
  type?: "text" | "number" | "idcard" | "digit";
  /**
   * 是否是密码类型
   */
  password?: boolean;
  /**
   * 输入框为空时占位符
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
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度
   */
  maxlength?: number;
  /**
   * 指定光标与键盘的距离，单位px（2.4.0起支持rpx）。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   */
  "cursor-spacing"?: number | string;
  /**
   * (即将废弃，请直接使用 focus )自动聚焦，拉起键盘
   */
  "auto-focus"?: boolean;
  /**
   * 获取焦点
   */
  focus?: boolean;
  /**
   * 设置键盘右下角按钮的文字，仅在type='text'时生效
   */
  "confirm-type"?: "send" | "search" | "next" | "go" | "done";
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   */
  "confirm-hold"?: boolean;
  /**
   * 指定focus时的光标位置
   */
  cursor?: number;
  /**
   * 光标起始位置，自动聚集时有效，需与selection-end搭配使用
   */
  "selection-start"?: number;
  /**
   * 光标结束位置，自动聚集时有效，需与selection-start搭配使用
   */
  "selection-end"?: number;
  /**
   * 键盘弹起时，是否自动上推页面
   */
  "adjust-position"?: boolean;
  /**
   * 无障碍访问，（属性）元素的额外描述
   */
  "aria-label"?: string;
  /**
   * 键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，处理函数可以直接 return 一个字符串，将替换输入框的内容。
   */
  bindInput?: () => void;
  /**
   * 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度
   */
  bindFocus?: () => void;
  /**
   * 输入框失去焦点时触发，event.detail = {value: value}
   */
  bindBlur?: () => void;
  /**
   * 点击完成按钮时触发，event.detail = {value: value}
   */
  bindConfirm?: () => void;
  /**
   * 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}
   */
  bindKeyboardHeightChange?: () => void;
}
