/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Camera {
  /**
   * 应用模式。
   */
  mode?: "normal" | "scanCode";
  /**
   * 摄像头朝向，前置或后置。
   */
  "device-position"?: "front" | "back";
  /**
   * 闪光灯。
   */
  flash?: "auto" | "on" | "off";
  /**
   * 相机拍照，录制的分辨率。
   */
  "output-dimension"?: "360P" | "540P" | "720P" | "1080P" | "max";
  /**
   * 指定期望的相机帧数据尺寸。
   */
  "frame-size"?: "small" | "medium" | "large";
  /**
   * 相机初始化成功时触发。
   */
  onReady?: () => void;
  /**
   * 摄像头在非正常终止时触发，如退出后台等情况。
   */
  onStop?: () => void;
  /**
   * 用户不允许使用摄像头时触发。event.detail = { errorCode, errorMessage }。
   */
  onError?: () => void;
  /**
   * 在扫码识别成功时触发，仅在 mode="scanCode" 时生效。
   */
  onScanCode?: () => void;
}
