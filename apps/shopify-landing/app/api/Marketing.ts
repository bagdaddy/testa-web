/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { CreateMarketingLeadPayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Marketing<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Captures a new marketing lead from the landing page. Rate limited to 5 requests per minute per IP.
   *
   * @tags Marketing
   * @name CreateMarketingLead
   * @summary Create Marketing Lead
   * @request POST:/marketing/create-lead
   * @secure
   */
  createMarketingLead = (
    data: CreateMarketingLeadPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      {
        /** @example true */
        success?: boolean;
      },
      | {
          /** @example "The email field is required." */
          message?: string;
          errors?: {
            email?: string[];
          };
        }
      | {
          /** @example "Too Many Attempts." */
          message?: string;
        }
    >({
      path: `/marketing/create-lead`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
