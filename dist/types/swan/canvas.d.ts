/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Canvas {
  /**
   * canvas 组件的唯一标识符
   */
  "canvas-id": string;
  /**
   * 是否禁止屏幕滚动以及下拉刷新。当在 canvas 中同时绑定下列手势事件时，该属性不起作用
   */
  "disable-scroll"?: boolean;
  /**
   * 手指触摸动作开始
   */
  bindTouchStart?: () => void;
  /**
   * 手指触摸后移动
   */
  bindTouchMove?: () => void;
  /**
   * 手指触摸动作结束
   */
  bindTouchEnd?: () => void;
  /**
   * 手指触摸动作被打断，如来电提醒，弹窗
   */
  bindTouchCancel?: () => void;
  /**
   * 手指长按 350ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
   */
  bindLongTap?: () => void;
  /**
   * 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}
   */
  bindError?: () => void;
}
