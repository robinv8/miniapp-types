/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ErrorView {
  /**
   * 是否展示全屏错误视图，状态图案及文案大小会有差异。
   */
  fullscreen?: boolean;
  /**
   * 异常类型。
   * 可选值：default、busy、error、network、trade
   */
  type?: string;
  /**
   * 异常状态主要文案，详情可查看 默认界面及文案。
   */
  title?: string;
  /**
   * 异常状态次要文案，仅在全屏状态显示，详情可查看 全屏状态。
   */
  message?: string;
  /**
   * 异常状态主要文案的自定义颜色。
   */
  "title-color"?: {
    [k: string]: unknown;
  };
  /**
   * 异常状态次要文案的自定义颜色。
   */
  "message-color"?: {
    [k: string]: unknown;
  };
}
