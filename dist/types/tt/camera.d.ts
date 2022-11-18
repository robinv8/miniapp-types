/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Camera {
  /**
   * 模式，不支持动态修改，详情见 mode 的合法值
   */
  mode?: "normal" | "scanCode";
  /**
   * 分辨率，不支持动态修改，详情见 resolution 的合法值
   */
  resolution?: "low" | "medium" | "high";
  /**
   * 摄像头朝向，详情见 device-position 的合法值
   */
  "device-position"?: "front" | "back";
  /**
   * 闪光灯，详情见 flash 的合法值
   */
  flash?: "off" | "torch";
  /**
   * 指定期望的相机帧数据尺寸，详情见 frame-size 的合法值
   */
  "frame-size"?: "small" | "medium" | "large";
  /**
   * 相机初始化完成时触发，e.detail = {maxZoom}
   */
  bindInitDone?: () => void;
  /**
   * 用户不允许使用摄像头或相机异常时触发
   */
  bindError?: () => void;
  /**
   * 摄像头在非正常终止时触发，如退出后台/跳转页面/电话中断等情况
   */
  bindStop?: () => void;
  /**
   * 在扫码识别成功时触发，仅在 mode="scanCode" 时生效
   */
  bindScanCode?: () => void;
}