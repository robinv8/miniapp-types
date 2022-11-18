/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Swiper {
  /**
   * 是否显示面板指示点
   */
  "indicator-dots"?: boolean;
  /**
   * 指示点颜色
   */
  "indicator-color"?: string;
  /**
   * 当前选中的指示点颜色
   */
  "indicator-active-color"?: string;
  /**
   * 是否自动切换
   */
  autoplay?: boolean;
  /**
   * 当前所在页面的 index
   */
  current?: number;
  /**
   * 当前所在滑块的 item-id ，不能与 current 被同时指定
   */
  "current-item-id"?: string;
  /**
   * 自动切换时间间隔（单位：ms）
   */
  interval?: number;
  /**
   * 滑动动画时长（单位：ms）
   */
  duration?: number;
  /**
   * 是否采用衔接滑动
   */
  circular?: boolean;
  /**
   * 滑动方向是否为纵向
   */
  vertical?: boolean;
  /**
   * 前边距，可用于露出前一项的一小部分，支持 px 和 rpx
   */
  "previous-margin"?: string;
  /**
   * 后边距，可用于露出后一项的一小部分，支持 px 和 rpx
   */
  "next-margin"?: string;
  /**
   * 同时显示的滑块数量
   */
  "display-multiple-items"?: number;
  /**
   * 是否停止响应用户 touchmove 操作
   */
  "disable-touchmove"?: boolean;
  /**
   * current 改变时会触发 change 事件，event.detail = {current: current, source: source}
   */
  bindChange?: () => void;
  /**
   * 动画结束时会触发 animationfinish 事件，event.detail 同上
   */
  bindAnimationFinish?: () => void;
}