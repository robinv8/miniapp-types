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
   * 指定 placeholder 的样式，只支持 font-size、font-weight、color 三个 CSS 特性。
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
   * 最大输入长度，设置为 -1 的时候不限制最大长度。
   */
  maxlength?: number;
  /**
   * 是否获得焦点，详情见 Bug & Tip。
   */
  focus?: boolean;
  /**
   * 是否自动增高，设置 auto-height 时，设置 height 样式不生效。
   */
  "auto-height"?: boolean;
  /**
   * 指定软键盘弹出时，与光标的距离是多少，单位是 px。
   */
  "cursor-spacing"?: number;
  /**
   * 指定 focus 时的光标位置，详情见光标位置说明。
   */
  cursor?: number;
  /**
   * 指定 focus 时选中片段的起始位置，详情见光标位置说明。
   */
  "selection-start"?: number;
  /**
   * 指定 focus 时选中片段的结束位置，详情见光标位置说明，
   */
  "selection-end"?: number;
  /**
   * 键盘弹起时，是否自动上推页面。
   */
  "adjust-position"?: boolean;
  /**
   * focus 时，点击页面的时候不收起键盘。
   */
  "hold-keyboard"?: boolean;
  /**
   * 是否去掉 iOS 下的默认内边距。
   */
  "disable-default-padding"?: boolean;
  /**
   * 设置键盘右下角按钮的文字，详情见 confirm-type 的合法值。
   */
  "confirm-type"?: "send" | "search" | "next" | "go" | "done" | "return";
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起。
   */
  "confirm-hold"?: boolean;
  /**
   * 是否显示键盘上方带有”完成“按钮那一栏。
   */
  "show-confirm-bar"?: boolean;
  /**
   * 键盘输入时触发，详情见 bindinput 说明。
   */
  bindInput?: () => void;
  /**
   * 输入框聚焦时触发，详情见 bindfocus 说明。
   */
  bindFocus?: () => void;
  /**
   * 输入框失去焦点时触发，详情见 bindblur 说明。
   */
  bindBlur?: () => void;
  /**
   * 用户点击键盘的完成按钮时触发，详情见 bindconfirm 说明。
   */
  bindConfirm?: () => void;
  /**
   * 输入框行数变化时触发，详情见 bindlinechange 说明。
   */
  bindLineChange?: () => void;
  /**
   * 键盘高度发生变化的时候触发此事件，详情见 bindkeyboardheightchange 说明。
   */
  bindKeyboardHeightChange?: () => void;
}
