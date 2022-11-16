/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface MovableView {
  /**
   * movable-view 的移动方向，属性值有 all、vertical、horizontal、none。
   */
  direction?: string;
  /**
   * movable-view 是否带有惯性。
   */
  inertia?: boolean;
  /**
   * 超过可移动区域后，movable-view 是否还可以移动。
   */
  "out-of-bounds"?: boolean;
  /**
   * 定义 x 轴方向的偏移，会换算为 left 属性，如果 x 的值不在可移动范围内，会自动移动到可移动范围。
   */
  x?: number;
  /**
   * 定义 y 轴方向的偏移，会换算为 top 属性，如果 y 的值不在可移动范围内，会自动移动到可移动范围。
   */
  y?: number;
  /**
   * 阻尼系数，用于控制 x 或 y 改变时的动画和过界回弹的动画，值越大移动越快。
   */
  damping?: number;
  /**
   * 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于 0，否则会被设置成默认值。
   */
  friction?: number;
  /**
   * 是否禁用。
   */
  disabled?: boolean;
  /**
   * 是否支持双指缩放，默认缩放手势生效区域是在 movable-view 内。
   */
  scale?: boolean;
  /**
   * 定义缩放倍数最小值。
   */
  "scale-min"?: number;
  /**
   * 定义缩放倍数最大值。
   */
  "scale-max"?: number;
  /**
   * 定义缩放倍数，取值范围为 0.5 - 10。
   */
  "scale-value"?: number;
  /**
   * 是否使用动画。
   */
  animation?: boolean;
  /**
   * 触摸动作开始，事件会向父节点传递。
   */
  onTouchStart?: () => void;
  /**
   * 触摸动作开始，事件仅作用于组件，不向父节点传递。
   */
  catchTouchStart?: () => void;
  /**
   * 触摸移动事件，事件会向父节点传递。
   */
  onTouchMove?: () => void;
  /**
   * 触摸移动事件，事件仅作用于组件，不向父节点传递。
   */
  catchTouchMove?: () => void;
  /**
   * 触摸动作结束，事件会向父节点传递。
   */
  onTouchEnd?: () => void;
  /**
   * 触摸动作结束，事件仅作用于组件，不向父节点传递。
   */
  catchTouchEnd?: () => void;
  /**
   * 触摸动作被打断，如来电提醒、弹窗。
   */
  onTouchCancel?: () => void;
  /**
   * 拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中 source 表示产生移动的原因，值可为 touch（拖动）。
   */
  onChange?: () => void;
  /**
   * 拖动结束触发的事件，event.detail = {x: x, y: y}。
   */
  onChangeEnd?: () => void;
  /**
   * 缩放过程中触发的事件，event.detail = {x, y, scale}。
   */
  onScale?: () => void;
}
