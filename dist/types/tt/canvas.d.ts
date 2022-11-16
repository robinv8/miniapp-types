/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Canvas {
  /**
   * [v1]canvas 组件的标识
   */
  "canvas-id": string;
  /**
   * [v2]指定 canvas 类型，有效值为 "2d" 和 "webgl"
   */
  type: string;
  /**
   * [v2]手指触摸动作开始
   */
  bindTouchStart?: () => void;
  /**
   * [v2]手指触摸后移动
   */
  bindTouchMove?: () => void;
  /**
   * [v2]手指触摸动作结束
   */
  bindTouchEnd?: () => void;
  /**
   * [v2]手指触摸动作被打断
   */
  bindTouchCancel?: () => void;
}
