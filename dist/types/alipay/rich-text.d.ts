/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RichText {
  /**
   * 节点列表。基础库 2.8.5 开始支持 HTML String，2.8.5 以下版本可使用 mini-html-parser2 将 HTML String 转化为 nodes 数组。
   */
  nodes?:
    | {
        [k: string]: unknown;
      }
    | string;
  /**
   * 显示连续空格。
   * 有效值：
   * nbsp：根据字体设置的空格大小。
   * emsp：中文字符空格大小。
   * ensp：中文字符空格一半大小。
   */
  space?: string;
  /**
   * 触摸。
   */
  onTap?: () => void;
  /**
   * 触摸动作开始。
   */
  onTouchstart?: () => void;
  /**
   * 触摸移动事件。
   */
  onTouchmove?: () => void;
  /**
   * 触摸动作被打断。
   */
  onTouchcancel?: () => void;
  /**
   * 触摸动作结束。
   */
  onTouchend?: () => void;
  /**
   * 触摸后，超过 500ms 再离开。
   */
  onLongtap?: () => void;
}
