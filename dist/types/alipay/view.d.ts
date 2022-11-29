/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface View {
  /**
   * 是否阻止区域内滚动页面。说明： 如果 view 中嵌套 view，外层 view 设置 disable-scroll 为 true 时禁止内部的滚动。
   */
  "disable-scroll"?: boolean;
  /**
   * 触摸时添加的样式类。
   */
  "hover-class"?: string;
  /**
   * 按住多久后出现点击状态，单位毫秒。
   */
  "hover-start-time"?: number;
  /**
   * 松开后点击状态保留时间，单位毫秒。
   */
  "hover-stay-time"?: number;
  /**
   * 是否隐藏。
   */
  hidden?: boolean;
  /**
   * 自定义样式名。
   */
  class?: string;
  /**
   * 内联样式。
   */
  style?: string;
  /**
   * 用于动画，详见 my.createAnimation 。使用 my.createAnimation 生成的动画是通过过渡（Transition）实现的，只会触发 onTransitionEnd，不会触发 onAnimationStart, onAnimationIteration, onAnimationEnd。
   */
  animation?: {
    [k: string]: unknown;
  };
  /**
   * 是否阻止当前元素的祖先元素出现点击态。
   */
  "hover-stop-propagation"?: boolean;
  /**
   * 点击。
   */
  onTap?: () => void;
  /**
   * 触摸动作开始。
   */
  onTouchStart?: () => void;
  /**
   * 触摸后移动。
   */
  onTouchMove?: () => void;
  /**
   * 触摸动作结束。
   */
  onTouchEnd?: () => void;
  /**
   * 触摸动作被打断，如来电提醒，弹窗。
   */
  onTouchCancel?: () => void;
  /**
   * 长按 500ms 之后触发，触发了长按事件后进行移动将不会触发屏幕的滚动。
   */
  onLongTap?: () => void;
  /**
   * 过渡（Transition）结束时触发。
   */
  onTransitionEnd?: () => void;
  /**
   * 每开启一次新的动画过程时触发。（第一次不触发）
   */
  onAnimationIteration?: () => void;
  /**
   * 动画开始时触发。
   */
  onAnimationStart?: () => void;
  /**
   * 动画结束时触发。
   */
  onAnimationEnd?: () => void;
  /**
   * 当前元素可见面积超过50%时触发。
   */
  onAppear?: () => void;
  /**
   * 当前元素不可见面积超过50%时触发。
   */
  onDisappear?: () => void;
  /**
   * 当前元素首次可见面积达到50%时触发。
   */
  onFirstAppear?: () => void;
  /**
   * 表示组件的语义角色。设置为 img 时，组件聚焦后读屏软件会朗读出 图像 ；设置为 button 时，聚焦后读屏软件会朗读出 按钮 。详情请参见 aria-component。
   */
  role?: {
    [k: string]: unknown;
  };
}
