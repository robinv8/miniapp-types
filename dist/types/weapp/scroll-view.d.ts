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
   * 允许纵向滚动
   */
  "scroll-y"?: boolean;
  /**
   * 距顶部/左边多远时，触发 scrolltoupper 事件
   */
  "upper-threshold"?: number | string;
  /**
   * 距底部/右边多远时，触发 scrolltolower 事件
   */
  "lower-threshold"?: number | string;
  /**
   * 设置竖向滚动条位置
   */
  "scroll-top"?: number | string;
  /**
   * 设置横向滚动条位置
   */
  "scroll-left"?: number | string;
  /**
   * 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
   */
  "scroll-into-view"?: string;
  /**
   * 在设置滚动条位置时使用动画过渡
   */
  "scroll-with-animation"?: boolean;
  /**
   * 暂未支持
   */
  "enable-back-to-top"?: boolean;
  /**
   * 不支持，默认 flex
   */
  "enable-flex"?: boolean;
  /**
   * 暂未支持
   */
  "scroll-anchoring"?: boolean;
  /**
   * 开启 passive 特性，能优化一定的滚动性能
   */
  "enable-passive"?: boolean;
  /**
   * 开启自定义下拉刷新
   */
  "refresher-enabled"?: boolean;
  /**
   * 设置自定义下拉刷新阈值
   */
  "refresher-threshold"?: number;
  /**
   * 设置自定义下拉刷新默认样式，支持设置 `black | white | none`， none 表示不使用默认样式
   */
  "refresher-default-style"?: string;
  /**
   * 设置自定义下拉刷新区域背景颜色
   */
  "refresher-background"?: string;
  /**
   * 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
   */
  "refresher-triggered"?: boolean;
  /**
   * 不支持，默认开启
   */
  enhanced?: boolean;
  /**
   * iOS 下 scroll-view 边界弹性控制 (同时开启 enhanced 属性后生效)
   */
  bounces?: boolean;
  /**
   * 滚动条显隐控制 (同时开启 enhanced 属性后生效)
   */
  "show-scrollbar"?: boolean;
  /**
   * 不支持，可用 Skyline 手势系统实现
   */
  "paging-enabled"?: boolean;
  /**
   * 滑动减速速率控制, 仅在 iOS 下生效 (同时开启 enhanced 属性后生效)
   */
  "fast-deceleration"?: boolean;
  /**
   * 渲染模式
   */
  type: "list" | "custom";
  /**
   * 是否反向滚动。一般初始滚动位置是在顶部，反向滚动则是在底部。
   */
  reverse?: boolean;
  /**
   * 指定视口外渲染区域的距离，默认情况下视口外节点不渲染。指定 cache-extent 可优化滚动体验和加载速度，但会提高内存占用且影响首屏速度，可按需启用。
   */
  "cache-extent"?: number;
  /**
   * 只 scroll-into-view 到 cacheExtent 以内的目标节点，性能更佳
   */
  "scroll-into-view-within-extent"?: boolean;
  /**
   * 指定 scroll-into-view 目标节点在视口内的位置
   */
  "scroll-into-view-alignment"?: "start" | "center" | "end" | "nearest";
  /**
   * 滑动开始事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }
   */
  bindDragStart?: () => void;
  /**
   * 滑动事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft }
   */
  bindDragging?: () => void;
  /**
   * 滑动结束事件 (同时开启 enhanced 属性后生效) detail { scrollTop, scrollLeft, velocity }
   */
  bindDragEnd?: () => void;
  /**
   * 滚动到顶部/左边时触发
   */
  bindScrollToUpper?: () => void;
  /**
   * 滚动到底部/右边时触发
   */
  bindScrollToLower?: () => void;
  /**
   * 滚动事件，多返回 isDrag 字段。event.detail = { isDrag }
   */
  bindScroll?: () => void;
  /**
   * 自定义下拉刷新控件被下拉
   */
  bindRefresherPulling?: () => void;
  /**
   * 自定义下拉刷新被触发
   */
  bindRefresherRefresh?: () => void;
  /**
   * 自定义下拉刷新被复位
   */
  bindRefresherRestore?: () => void;
  /**
   * 自定义下拉刷新被中止
   */
  bindRefresherAbort?: () => void;
  /**
   * 滚动开始事件。event.detail = { isDrag }
   */
  bindScrollStart?: () => void;
  /**
   * 滚动结束事件。event.detail = { isDrag }
   */
  bindScrollEnd?: () => void;
  /**
   * 自定义下拉刷新即将触发刷新（拖动超过 refresher-threshold 时）的事件
   */
  bindRefresherWillRefresh?: () => void;
}
