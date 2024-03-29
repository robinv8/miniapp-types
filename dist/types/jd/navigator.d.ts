/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Navigator {
  /**
   * 当前小程序内的跳转链接
   */
  url?: string;
  /**
   * 跳转方式
   */
  "open-type"?: "navigate" | "redirect" | "switchTab" | "reLaunch" | "navigateBack";
  /**
   * 当 open-type 为 'navigateBack' 时有效，表示回退的层数
   */
  delta?: number;
  /**
   * 指定点击时的样式类，当 hover-class="none" 时，没有点击态效果
   */
  "hover-class"?: string;
  /**
   * 指定是否阻止本节点的祖先节点出现点击态
   */
  "hover-stop-propagation"?: boolean;
  /**
   * 按住后多久出现点击态，单位毫秒
   */
  "hover-start-time"?: number;
  /**
   * 手指松开后点击态保留时间，单位毫秒
   */
  "hover-stay-time"?: number;
}
