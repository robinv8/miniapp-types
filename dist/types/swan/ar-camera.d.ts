/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ArCamera {
  /**
   * AR 项目唯一标识，在 DuMixAR 内容开放平台上传生成 AR 项目后获取 AR Key
   */
  key: string;
  /**
   * AR 相机类型，在 DuMixAR 内容开放平台上传生成 AR 项目后获取 AR Type：
   * 2D 跟踪类型：0
   * SLAM 类型：5
   * IMU 类型：8
   */
  type: "0" | "5" | "8";
  /**
   * 闪光灯，值为 auto、on、off
   */
  flash?: "auto" | "on" | "off";
  /**
   * 用户不允许使用摄像头或扫码失败时触发
   */
  bindError?: () => void;
  /**
   * AR 加载成功时触发
   */
  bindLoad?: () => void;
  /**
   * 开发者制作 AR 项目时可自定义按键，用户点击时会收到事件和数据，用户自定义事件格式参见代码示例 2：用户自定义事件
   */
  bindMessage?: () => void;
  /**
   * 扫描识图结束后触发
   */
  bindScanCode?: () => void;
}