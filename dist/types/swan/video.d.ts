/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Video {
  /**
   * 视频的资源地址，支持云文件 ID
   */
  src: string;
  /**
   * 视频标题，全屏时在视频顶部展示
   */
  title?: string;
  /**
   * 指定视频初始播放位置
   */
  "initial-time"?: number;
  /**
   * 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
   */
  controls?: boolean;
  /**
   * 是否自动播放
   */
  autoplay?: boolean;
  /**
   * 是否循环播放
   */
  loop?: boolean;
  /**
   * 是否静音播放
   */
  muted?: boolean;
  /**
   * 当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含；fill：填充；cover：覆盖
   */
  objectFit?: "contain" | "fill" | "cover";
  /**
   * 视频封面的图片网络资源地址，支持云文件 ID
   */
  poster?: string;
  /**
   * 在非全屏模式下，是否开启使用手势调节亮度与音量，兼容 vslide-gesture 属性
   */
  "page-gesture"?: boolean;
  /**
   * 按设置的视频全屏方向进入全屏。不指定视频全屏方向时则根据设备方向判断全屏方向。0：正常竖向；90：屏幕顺时针 90 度；-90：屏幕逆时针 90 度
   */
  direction?: "0" | "90" | "-90";
  /**
   * 若不设置，宽度大于 240 时才会显示
   */
  "show-progress"?: boolean;
  /**
   * 是否显示全屏按钮
   */
  "show-fullscreen-btn"?: boolean;
  /**
   * 是否开启使用手势控制进度
   */
  "enable-progress-gesture"?: boolean;
  /**
   * 弹幕列表
   */
  "danmu-list"?: {
    [k: string]: unknown;
  };
  /**
   * 是否显示弹幕按钮，只在初始化时有效，不能动态变更
   */
  "danmu-btn"?: boolean;
  /**
   * 是否展示弹幕，只在初始化时有效，不能动态变更
   */
  "enable-danmu"?: boolean;
  /**
   * 是否显示视频底部控制栏的播放按钮
   */
  "show-play-btn"?: boolean;
  /**
   * 是否显示视频中间的播放按钮
   */
  "show-center-play-btn"?: boolean;
  /**
   * 是否显示静音按钮
   */
  "show-mute-btn"?: boolean;
  /**
   * 非 wifi 环境下是否显示继续播放浮层
   */
  "show-no-wifi-tip"?: boolean;
  /**
   * 非全屏模式下，是否开启亮度与音量调节手势，兼容 page-gesture 属性
   */
  "vslide-gesture"?: boolean;
  /**
   * 全屏模式下，是否开启亮度与音量调节手势
   */
  "vslide-gesture-in-fullscreen"?: boolean;
  /**
   * 全屏模式下，是否显示锁屏按钮
   */
  "show-lock-btn"?: boolean;
  /**
   * 是否开启播放手势，即双击切换播放/暂停
   */
  "enable-play-gesture"?: boolean;
  /**
   * 是否显示倍速播放按钮
   */
  "show-rate-btn"?: boolean;
  /**
   * 全屏模式下，是否显示侧边栏控制按钮
   */
  "show-vslide-btn-in-fullscreen"?: boolean;
  /**
   * 是否进入无声视频模式，进入无声视频模式后，视频将静音播放且不响应系统物理音量变化，点击播放器提示无声视频，手势调节失效
   */
  "silent-play"?: boolean;
  /**
   * 当开始播放时触发 play 事件
   */
  bindPlay?: () => void;
  /**
   * 当暂停播放时触发 pause 事件
   */
  bindPause?: () => void;
  /**
   * 当播放到末尾时触发 ended 事件
   */
  bindEnded?: () => void;
  /**
   * 播放进度变化时触发。event.detail = {currentTime, duration}
   */
  bindTimeUpdate?: () => void;
  /**
   * 当视频进入和退出全屏时触发。event.detail = {fullscreen, direction}，direction 取为 vertical 或 horizontal
   */
  bindFullScreenChange?: () => void;
  /**
   * 视频出现缓冲时触发
   */
  bindWaiting?: () => void;
  /**
   * 视频播放出错时触发
   */
  bindError?: () => void;
  /**
   * 视频元数据加载完成时触发。event.detail = {width, height, duration}
   */
  bindLoadedMetaData?: () => void;
}
