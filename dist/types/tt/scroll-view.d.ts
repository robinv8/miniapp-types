/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ScrollView {
  /**
   * 允许横向滚动
   */
  "scroll-x"?: boolean;
  /**
   * 允许竖向滚动
   */
  "scroll-y"?: boolean;
  /**
   * 在设置滚动条位置时使用动画过渡
   */
  "scroll-with-animation"?: boolean;
  /**
   * 距顶部/左边多远时（单位 px），触发 scrolltoupper 事件
   */
  "upper-threshold"?: number;
  /**
   * 距底部/右边多远时（单位 px），触发 scrolltolower 事件
   */
  "lower-threshold"?: number;
  /**
   * 设置内容垂直滚动的像素数
   */
  "scroll-top"?: number;
  /**
   * 设置内容水平滚动的像素数
   */
  "scroll-left"?: number;
  /**
   * 值应为某子元素 id（id 不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
   */
  "scroll-into-view"?: string;
  /**
   * 滚动时触发
   */
  bindScroll?: () => void;
  /**
   * 滚动到顶部/左边
   */
  bindScrollToUpper?: () => void;
  /**
   * 滚动到底部/右边
   */
  bindScrollToLower?: () => void;
}