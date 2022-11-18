/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface AnimationVideo {
  /**
   * 组件使用的 video 视频资源的宽度（单位：px）
   */
  "resource-width"?: number;
  /**
   * 组件使用的 video 视频资源的高度（单位：px）
   */
  "resource-height"?: number;
  /**
   * 用于设置动画画布的 CSS 样式
   */
  "canvas-style"?: string;
  /**
   * 动画资源地址，支持相对路径以及远程地址。如果是远程路径，注意 response header 里需要设置 Access-Control-Allow-Origin 来防止跨域问题
   */
  path: string;
  /**
   * 动画是否循环播放
   */
  loop?: boolean;
  /**
   * 动画是否自动播放
   */
  autoplay?: boolean;
  /**
   * 视频资源中 alpha 通道的方向，left 表示 alpha 通道在资源的左边，right 表示 alpha 通道在资源的右边。详情请参考透明视频设计资源示例
   */
  "alpha-direction"?: string;
  /**
   * 动画开始播放的回调
   */
  bindStarted?: () => void;
  /**
   * 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及暂停动画不会触发）
   */
  bindEnded?: () => void;
}