/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Map {
  /**
   * 内联样式。
   */
  style?: string;
  /**
   * 样式名。
   */
  class?: string;
  /**
   * 中心纬度。
   */
  latitude?: number;
  /**
   * 中心经度。
   */
  longitude?: number;
  /**
   * 缩放级别，取值范围为 5-18。
   */
  scale?: number;
  /**
   * 倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角。
   */
  skew?: number;
  /**
   * 顺时针旋转的角度，范围 0 ~ 360。
   */
  rotate?: number;
  /**
   * 覆盖物，在地图上的一个点绘制图标。
   */
  markers?: unknown[];
  /**
   * 覆盖物，多个连贯点的集合（路线）。
   */
  polyline?: unknown[];
  /**
   * 覆盖物，圆。
   */
  circles?: unknown[];
  /**
   * 在地图 View 之上的一个控件。
   */
  controls?: unknown[];
  /**
   * 覆盖物，多边形。
   */
  polygon?: unknown[];
  /**
   * 是否显示带有方向的当前定位点。
   */
  "show-location"?: boolean;
  /**
   * 视野将进行小范围延伸包含传入的坐标。
   *
   * [{
   *
   *    latitude: 30.279383,
   *
   *    longitude: 120.131441,
   *
   * }]
   */
  "include-points"?: unknown[];
  /**
   * 视野在地图 padding 范围内展示。
   *
   * {
   *
   *     left:0, right:0,
   *
   *     top:0, bottom:0
   *
   * }
   */
  "include-padding"?: {
    [k: string]: unknown;
  };
  /**
   * 覆盖物，自定义贴图。
   *
   * [{
   *
   *     // 刷新的时候需要变更id值
   *
   *     id:'0',
   *
   *     // 右上，左下
   *
   *     'include-points':[{
   *
   *         latitude: 39.935029,
   *
   *         longitude: 116.384377,
   *
   *     },{
   *
   *         latitude: 39.939577,
   *
   *         longitude: 116.388331,
   *
   *     }],
   *
   *     image:'/image/overlay.png',
   *
   *     alpha:0.25,
   *
   *     zIndex:1
   *
   * }]
   */
  "ground-overlays"?: unknown[];
  /**
   * 覆盖物，网格贴图。
   *
   * {
   *
   *     url:'http://xxx',
   *
   *     type:0, // url类型
   *
   *     tileWidth:256,
   *
   *     tileHeight:256,
   *
   *     zIndex:1,
   *
   * }
   */
  "tile-overlay"?: {
    [k: string]: unknown;
  };
  /**
   * 设置地图样式。
   *
   * default：默认样式
   * light：精简样式
   */
  "custom-map-style"?: string;
  /**
   * 基于 map 高级定制渲染，设置覆盖在地图上的 view。
   */
  panels?: unknown[];
  /**
   * 设置。
   *
   * {
   *
   *   // 手势
   *
   *   gestureEnable: 1,
   *
   *   // 比例尺
   *
   *   showScale: 1,
   *
   *   // 指南针
   *
   *   showCompass: 1,
   *
   *   //双手下滑
   *
   *   tiltGesturesEnabled: 1,
   *
   *   // 交通路况展示
   *
   *   trafficEnabled: 0,
   *
   *   // 地图 POI 信息
   *
   *   showMapText: 0,
   *
   *   // 高德地图 logo 位置
   *
   *   logoPosition: {
   *
   *     centerX: 150,
   *
   *     centerY: 90
   *
   *   }
   *
   * // 自定义地图样式
   *
   *  customMapStyleSrc: "/resources/style/style_v7.data"
   *
   * }
   */
  setting?: {
    [k: string]: unknown;
  };
  /**
   * 内联样式。
   */
  optimize?: string;
  /**
   * 点击 Marker 时触发。
   *
   * {
   *
   *     markerId,
   *
   *     latitude,
   *
   *     longitude,
   *
   * }
   */
  onMarkerTap?: () => void;
  /**
   * 点击 Marker 对应的 callout 时触发。
   *
   * {
   *
   *     markerId,
   *
   *     latitude,
   *
   *     longitude,
   *
   * }
   */
  onCalloutTap?: () => void;
  /**
   * 点击 control 时触发。
   *
   * {
   *
   *     controlId
   *
   * }
   */
  onControlTap?: () => void;
  /**
   * 视野发生变化时触发。
   *
   * 基础库 1.24.0 版本新增 skew、rotate、causedBy 返回；
   *
   * begin 阶段 causedBy 有效值为 update(接口触发)、gesture(手势触发)；
   *
   * end 阶段 causedBy 有效值为 update(接口触发)、drag/scale/skew/rotate (手势触发)。
   *
   * {
   *
   *     type: "begin/end",
   *
   *     latitude,
   *
   *     longitude,
   *
   *     scale,
   *
   *     skew,
   *
   *     rotate,
   *
   *     causedBy: "update/gesture"
   *
   * }
   */
  onRegionChange?: () => void;
  /**
   * 点击地图时触发。
   *
   * {
   *
   *     latitude,
   *
   *     longitude,
   *
   * }
   */
  onTap?: () => void;
  /**
   * 点击 panel 时触发。
   *
   * {
   *
   *    panelId,
   *
   *    layoutId,
   *
   * }
   */
  onPanelTap?: () => void;
  /**
   * 显示指南针。
   */
  "show-compass"?: boolean;
  /**
   * 显示比例尺。
   */
  "show-scale"?: boolean;
  /**
   * 开启俯视。
   */
  "enable-overlooking"?: boolean;
  /**
   * 是否支持缩放。
   */
  "enable-zoom"?: boolean;
  /**
   * 是否支持拖动。
   */
  "enable-scroll"?: boolean;
  /**
   * 是否支持旋转。
   */
  "enable-rotate"?: boolean;
  /**
   * 是否开启实时路况。
   */
  "enable-traffic"?: boolean;
  /**
   * 是否展示 POI 点。
   */
  "enable-poi"?: boolean;
  /**
   * 是否展示建筑物。
   */
  "enable-building"?: boolean;
  /**
   * 是否开启卫星图。
   */
  "enable-satellite"?: boolean;
  /**
   * 地图初始化完成即将开始渲染第一帧时触发。
   */
  onInitComplete?: () => void;
}
