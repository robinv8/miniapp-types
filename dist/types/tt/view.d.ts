/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface View {
  /**
   * 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果
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
