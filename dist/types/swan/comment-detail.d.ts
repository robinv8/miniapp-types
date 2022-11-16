/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CommentDetail {
  /**
   * 评论核心参数
   */
  "comment-param"?: {
    [k: string]: unknown;
  };
  /**
   * 评论 ID
   */
  srid?: string;
  /**
   * 滚动方式为页面滚动，若组件作为浮层使用，该参数需设为 false
   */
  "is-page-scroll"?: boolean;
  /**
   * 是否需要底部 toolbar，若使用开发者自定义的底部 toolbar，该参数需设为 false
   */
  "need-toolbar"?: boolean;
  /**
   * 是否需要详情顶部父级评论的点赞按钮，默认显示
   */
  "need-like-btn"?: boolean;
  /**
   * 删除详情后是否返回列表项，默认一站式逻辑。若使用浮层，请设置改属性为 false
   */
  "back-list-after-delete"?: boolean;
  /**
   * 用于调起评论发布器发布评论
   */
  "add-comment"?: boolean;
  /**
   * 删除整体详情内容时触发，返回数据为{status, data:{srid}}
   */
  bindDelete?: () => void;
}
