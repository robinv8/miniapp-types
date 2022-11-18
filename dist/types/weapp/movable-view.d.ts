/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MovableView {
  /**
   * movable-view的移动方向，属性值有all、vertical、horizontal、none
   */
  direction?: string;
  /**
   * movable-view是否带有惯性
   */
  inertia?: boolean;
  /**
   * 超过可移动区域后，movable-view是否还可以移动
   */
  "out-of-bounds"?: boolean;
  /**
   * 定义 x 轴方向的偏移，如果 x 的值不在可移动范围内，会自动移动到可移动范围；改变 x 的值会触发动画；单位支持px（默认）、rpx；
   */
  x?: number | string;
  /**
   * 定义 y 轴方向的偏移，如果 y 的值不在可移动范围内，会自动移动到可移动范围；改变 y 的值会触发动画；单位支持px（默认）、rpx；
   */
  y?: number | string;
  /**
   * 阻尼系数，用于控制 x 或y改变时的动画和过界回弹的动画，值越大移动越快
   */
  damping?: number;
  /**
   * 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值
   */
  friction?: number;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否支持双指缩放，默认缩放手势生效区域是在 movable-view 内
   */
  scale?: boolean;
  /**
   * 定义缩放倍数最小值
   */
  "scale-min"?: number;
  /**
   * 定义缩放倍数最大值
   */
  "scale-max"?: number;
  /**
   * 定义缩放倍数，取值范围为 0.5 - 10
   */
  "scale-value"?: number;
  /**
   * 是否使用动画
   */
  animation?: boolean;
  /**
   * 拖动过程中触发的事件，event.detail = {x, y, source}
   */
  bindChange?: () => void;
  /**
   * 缩放过程中触发的事件，event.detail = {x, y, scale}，x和 y 字段在2.1.0之后支持
   */
  bindScale?: () => void;
  /**
   * 初次手指触摸后移动为横向的移动时触发，如果 catch 此事件，则意味着 touchmove 事件也被catch
   */
  bindHTouchMove?: () => void;
  /**
   * 初次手指触摸后移动为纵向的移动时触发，如果 catch 此事件，则意味着 touchmove 事件也被catch
   */
  bindVTouchMove?: () => void;
}