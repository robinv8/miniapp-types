/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface LivePusher {
  /**
   * 推流地址。目前仅支持 rtmp 格式
   */
  url?: string;
  /**
   * SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话）
   */
  mode?: string;
  /**
   * 自动推流
   */
  autopush?: boolean;
  /**
   * 自定义渲染，允许开发者自行处理所采集的视频帧，详见LivePusherContext
   */
  enableVideoCustomRender?: boolean;
  /**
   * 是否静音。即将废弃，可用 enable-mic 替代
   */
  muted?: boolean;
  /**
   * 开启摄像头
   */
  "enable-camera"?: boolean;
  /**
   * 自动聚集
   */
  "auto-focus"?: boolean;
  /**
   * 画面方向
   */
  orientation?: "vertical" | "horizontal";
  /**
   * 美颜，取值范围 0-9 ，0 表示关闭
   */
  beauty?: number;
  /**
   * 美白，取值范围 0-9 ，0 表示关闭
   */
  whiteness?: number;
  /**
   * 宽高比，可选值有 3:4, 9:16
   */
  aspect?: string;
  /**
   * 最小码率
   */
  "min-bitrate"?: number;
  /**
   * 最大码率
   */
  "max-bitrate"?: number;
  /**
   * 高音质(48KHz)或低音质(16KHz)，值为high, low
   */
  "audio-quality"?: string;
  /**
   * 进入后台时推流的等待画面
   */
  "waiting-image"?: string;
  /**
   * 等待画面资源的MD5值
   */
  "waiting-image-hash"?: string;
  /**
   * 调整焦距
   */
  zoom?: boolean;
  /**
   * 前置或后置，值为front, back
   */
  "device-position"?: string;
  /**
   * 进入后台时是否静音（已废弃，默认退后台静音）
   */
  "background-mute"?: boolean;
  /**
   * 设置推流画面是否镜像，产生的效果在 live-player 反应到
   */
  mirror?: boolean;
  /**
   * 同 mirror 属性，后续 mirror 将废弃
   */
  "remote-mirror"?: boolean;
  /**
   * 控制本地预览画面是否镜像
   */
  "local-mirror"?: "auto" | "enable" | "disable";
  /**
   * 音频混响类型
   */
  "audio-reverb-type"?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7";
  /**
   * 开启或关闭麦克风
   */
  "enable-mic"?: boolean;
  /**
   * 是否开启音频自动增益
   */
  "enable-agc"?: boolean;
  /**
   * 是否开启音频噪声抑制
   */
  "enable-ans"?: boolean;
  /**
   * 音量类型
   */
  "audio-volume-type"?: "auto" | "media" | "voicecall";
  /**
   * 上推的视频流的分辨率宽度
   */
  "video-width"?: number;
  /**
   * 上推的视频流的分辨率高度
   */
  "video-height"?: number;
  /**
   * 设置美颜类型
   */
  "beauty-style"?: "smooth" | "nature";
  /**
   * 设置色彩滤镜
   */
  filter?:
    | "standard"
    | "pink"
    | "nostalgia"
    | "blues"
    | "romantic"
    | "cool"
    | "fresher"
    | "solor"
    | "aestheticism"
    | "whitening"
    | "cerisered";
  /**
   * 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）
   */
  "picture-in-picture-mode"?:
    | ("[]" | "push" | "pop")
    | {
        [k: string]: unknown;
      };
  /**
   * 0：关闭变声；1：熊孩子；2：萝莉；3：大叔；4：重金属；6：外国人；7：困兽；8：死肥仔；9：强电流；10：重机械；11：空灵
   */
  "voice-changer-type"?: 0 | 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11;
  /**
   * 是否启动自定义特效，设定后不能更改
   */
  "custom-effect"?: boolean;
  /**
   * 自定义特效美白效果，取值 0~1。需要开启 custom-effect
   */
  "skin-whiteness"?: number;
  /**
   * 自定义特效磨皮效果，取值 0~1。需要开启 custom-effect
   */
  "skin-smoothness"?: number;
  /**
   * 自定义特效瘦脸效果，取值 0~1。需要开启 custom-effect
   */
  "face-thinness"?: number;
  /**
   * 自定义特效大眼效果，取值 0~1。需要开启 custom-effect
   */
  "eye-bigness"?: number;
  /**
   * 帧率，有效值为 1~30
   */
  fps?: number;
  /**
   * 状态变化事件，detail = {code}
   */
  bindStateChange?: () => void;
  /**
   * 网络状态通知，detail = {info}
   */
  bindNetStatus?: () => void;
  /**
   * 渲染错误事件，detail = {errMsg, errCode}
   */
  bindError?: () => void;
  /**
   * 背景音开始播放时触发
   */
  bindBgmStart?: () => void;
  /**
   * 背景音进度变化时触发，detail = {progress, duration}
   */
  bindBgmProgress?: () => void;
  /**
   * 背景音播放完成时触发
   */
  bindBgmComplete?: () => void;
  /**
   * 返回麦克风采集的音量大小
   */
  bindAudioVolumeNotify?: () => void;
  /**
   * 进入小窗
   */
  bindEnterPictureInPicture?: () => void;
  /**
   * 退出小窗
   */
  bindLeavePictureInPicture?: () => void;
}
