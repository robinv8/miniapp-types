/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Map {
  /**
   * 中心经度
   */
  longitude: number;
  /**
   * 中心纬度
   */
  latitude: number;
  /**
   * 缩放级别，取值范围为3～20
   */
  scale?: number;
  /**
   * 标记点
   */
  markers?: {
    [k: string]: unknown;
  };
  /**
   * 路线
   */
  polyline?: {
    [k: string]: unknown;
  };
  /**
   * 圆
   */
  circles?: {
    [k: string]: unknown;
  };
  /**
   * 缩放视野以包含所有给定的坐标点
   */
  "include-points"?: {
    [k: string]: unknown;
  };
  /**
   * 显示带有方向的当前定位点
   */
  "show-location"?: boolean;
  /**
   * 多边形
   */
  polygons?: {
    [k: string]: unknown;
  };
  /**
   * 个性化地图使用的key
   */
  subkey?: string;
  /**
   * 个性化地图配置的style，不支持动态修改
   */
  "layer-style"?: number;
  /**
   * 旋转角度，范围0～360，地图正北与设备y轴的夹角角度
   */
  rotate?: number;
  /**
   * 倾斜角度，范围0～40，关于z轴的倾角
   */
  skew?: number;
  /**
   * 展示3D楼块（工具暂不支持）
   */
  "enable-3D"?: boolean;
  /**
   * 显示指南针
   */
  "show-compass"?: boolean;
  /**
   * 显示比例尺（工具暂不支持）
   */
  "show-scale"?: boolean;
  /**
   * 开启俯视
   */
  "enable-overlooking"?: boolean;
  /**
   * 是否支持缩放
   */
  "enable-zoom"?: boolean;
  /**
   * 是否支持拖动
   */
  "enable-scroll"?: boolean;
  /**
   * 是否支持旋转
   */
  "enable-rotate"?: boolean;
  /**
   * 是否开启卫星图
   */
  "enable-satellite"?: boolean;
  /**
   * 是否开启实时路况
   */
  "enable-traffic"?: boolean;
  /**
   * 配置项
   */
  setting?: {
    [k: string]: unknown;
  };
  /**
   * 点击地图时触发，返回经纬度信息
   */
  bindTap?: () => void;
  /**
   * 点击标记点时触发 e.detail = {markerId}
   */
  bindMarkerTap?: () => void;
  /**
   * 在地图渲染更新完成时触发
   */
  bindUpdated?: () => void;
  /**
   * 视野发生变化时触发 会触发两次，返回的type值分别为begin/end。
   */
  bindRegionChange?: () => void;
  /**
   * 点击地图poi点时触发 e.detail = {name, longitude, latitude}
   */
  bindPoiTap?: () => void;
}
