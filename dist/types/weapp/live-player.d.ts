/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface LivePlayer {
  /**
   * 音视频地址。目前仅支持 flv, rtmp 格式
   */
  src?: string;
  /**
   * 模式
   */
  mode?: "live" | "RTC";
  /**
   * 自动播放
   */
  autoplay?: boolean;
  /**
   * 是否静音
   */
  muted?: boolean;
  /**
   * 画面方向
   */
  orientation?: "vertical" | "horizontal";
  /**
   * 填充模式，可选值有 contain，fillCrop
   */
  "object-fit"?: "contain" | "fillCrop";
  /**
   * 进入后台时是否静音（已废弃，默认退后台静音）
   */
  "background-mute"?: boolean;
  /**
   * 最小缓冲区，单位s（RTC 模式推荐 0.2s）
   */
  "min-cache"?: number;
  /**
   * 最大缓冲区，单位s（RTC 模式推荐 0.8s）。缓冲区用来抵抗网络波动，缓冲数据越多，网络抗性越好，但时延越大。
   */
  "max-cache"?: number;
  /**
   * 声音输出方式
   */
  "sound-mode"?: "speaker" | "ear";
  /**
   * 当跳转到本小程序的其他页面时，是否自动暂停本页面的实时音视频播放
   */
  "auto-pause-if-navigate"?: boolean;
  /**
   * 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放
   */
  "auto-pause-if-open-native"?: boolean;
  /**
   * 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）
   */
  "picture-in-picture-mode"?:
    | ("[]" | "push" | "pop")
    | {
        [k: string]: unknown;
      };
  /**
   * 是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效
   */
  "enable-auto-rotation"?: boolean;
  /**
   * 格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；
   */
  "referrer-policy"?: "origin" | "no-referrer";
  /**
   * 是否支持投屏。开启后，可以通过 LivePlayerContext 上相关方法进行操作。
   */
  "enable-casting"?: boolean;
  /**
   * 播放状态变化事件，detail = {code}
   */
  bindStateChange?: () => void;
  /**
   * 全屏变化事件，detail = {direction, fullScreen}
   */
  bindFullScreenChange?: () => void;
  /**
   * 网络状态通知，detail = {info}
   */
  bindNetStatus?: () => void;
  /**
   * 播放音量大小通知，detail = {}
   */
  bindAudioVolumeNotify?: () => void;
  /**
   * 播放器进入小窗
   */
  bindEnterPictureInPicture?: () => void;
  /**
   * 播放器退出小窗
   */
  bindLeavePictureInPicture?: () => void;
  /**
   * 用户选择投屏设备时触发 detail = { state: "success"/"fail" }
   */
  bindCastingUserSelect?: () => void;
  /**
   * 投屏成功/失败时触发 detail = { type, state: "success"/"fail" }
   */
  bindCastingStateChange?: () => void;
  /**
   * 投屏被中断时触发
   */
  bindCastingInterrupt?: () => void;
}
