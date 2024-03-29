/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ShareElement {
  /**
   * 映射标记，页面内唯一
   */
  key: string;
  /**
   * 是否进行动画
   */
  transform?: boolean;
  /**
   * 动画时长，单位毫秒
   */
  duration?: number;
  /**
   * `css`缓动函数
   */
  "easing-function"?: string;
  /**
   * 手势返回时是否进行动画
   */
  "transition-on-gesture"?: boolean;
  /**
   * 指定 push 阶段的飞跃物
   */
  "shuttle-on-push"?: "from" | "to";
  /**
   * 指定 pop 阶段的飞跃物
   */
  "shuttle-on-pop"?: string;
  /**
   * 动画帧回调
   */
  "on-frame"?: {
    [k: string]: unknown;
  };
  /**
   * 动画插值曲线
   */
  "rect-tween-type"?:
    | "materialRectArc"
    | "materialRectCenterArc"
    | "linear"
    | "elasticIn"
    | "elasticOut"
    | "elasticInOut"
    | "bounceIn"
    | "bounceOut"
    | "bounceInOut"
    | "cubic-bezier(x1, y1, x2, y2)";
}
