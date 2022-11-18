/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Video {
  /**
   * 是
   */
  src?: string;
  /**
   * 否
   */
  autoplay?: boolean;
  /**
   * 否
   */
  muted?: boolean;
  /**
   * 否
   */
  controls?: boolean;
  /**
   * 否
   */
  loop?: boolean;
  /**
   * 否
   */
  objectFit?: string;
  /**
   * 否
   */
  initialTime?: number;
  /**
   * 否
   */
  poster?: string;
  /**
   * 否
   */
  "mobilenet-hint-type"?: number;
  /**
   * 否
   */
  bindPlay?: () => void;
  /**
   * 否
   */
  bindPause?: () => void;
  /**
   * 否
   */
  bindEnded?: () => void;
  /**
   * 否
   */
  bindTimeUpdate?: () => void;
  /**
   * 否
   */
  bindFullScreenChange?: () => void;
  /**
   * 否
   */
  bindError?: () => void;
  /**
   * 否
   */
  bindWaiting?: () => void;
  /**
   * 否
   */
  bindLoadedData?: () => void;
  /**
   * 否
   */
  bindLoadedMetaData?: () => void;
  /**
   * 否
   */
  bindLoadStart?: () => void;
  /**
   * 否
   */
  bindSeeked?: () => void;
  /**
   * 否
   */
  bindSeeking?: () => void;
}