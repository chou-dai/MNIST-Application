/* tslint:disable */
/* eslint-disable */
/**
 * MNIST
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "./configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
    DUMMY_BASE_URL,
    assertParamExists,
    setApiKeyToObject,
    setBasicAuthToObject,
    setBearerAuthToObject,
    setOAuthToObject,
    setSearchParams,
    serializeDataIfNeeded,
    toPathString,
    createRequestFunction
} from "./common";
import type { RequestArgs } from "./base";
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from "./base";

/**
 *
 * @export
 * @interface MNISTImageRequestBody
 */
export interface MNISTImageRequestBody {
    /**
     *
     * @type {string}
     * @memberof MNISTImageRequestBody
     */
    imageBase64: string;
}
/**
 *
 * @export
 * @interface MNISTProbabilityResponse
 */
export interface MNISTProbabilityResponse {
    /**
     *
     * @type {Array<number>}
     * @memberof MNISTProbabilityResponse
     */
    probability_list: Array<number>;
}

/**
 * MNISTControllerApi - axios parameter creator
 * @export
 */
export const MNISTControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary getMNISTProbability
         * @param {MNISTImageRequestBody} requestBody requestBody
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMNISTProbability: async (
            requestBody: MNISTImageRequestBody,
            options: AxiosRequestConfig = {}
        ): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists("getMNISTProbability", "requestBody", requestBody);
            const localVarPath = `/mnist`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: "POST", ...baseOptions, ...options };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter["Content-Type"] = "application/json";

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers
            };
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration);

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions
            };
        }
    };
};

/**
 * MNISTControllerApi - functional programming interface
 * @export
 */
export const MNISTControllerApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = MNISTControllerApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary getMNISTProbability
         * @param {MNISTImageRequestBody} requestBody requestBody
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMNISTProbability(
            requestBody: MNISTImageRequestBody,
            options?: AxiosRequestConfig
        ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MNISTProbabilityResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMNISTProbability(requestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
    };
};

/**
 * MNISTControllerApi - factory interface
 * @export
 */
export const MNISTControllerApiFactory = function (
    configuration?: Configuration,
    basePath?: string,
    axios?: AxiosInstance
) {
    const localVarFp = MNISTControllerApiFp(configuration);
    return {
        /**
         *
         * @summary getMNISTProbability
         * @param {MNISTImageRequestBody} requestBody requestBody
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMNISTProbability(requestBody: MNISTImageRequestBody, options?: any): AxiosPromise<MNISTProbabilityResponse> {
            return localVarFp.getMNISTProbability(requestBody, options).then((request) => request(axios, basePath));
        }
    };
};

/**
 * MNISTControllerApi - object-oriented interface
 * @export
 * @class MNISTControllerApi
 * @extends {BaseAPI}
 */
export class MNISTControllerApi extends BaseAPI {
    /**
     *
     * @summary getMNISTProbability
     * @param {MNISTImageRequestBody} requestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MNISTControllerApi
     */
    public getMNISTProbability(requestBody: MNISTImageRequestBody, options?: AxiosRequestConfig) {
        return MNISTControllerApiFp(this.configuration)
            .getMNISTProbability(requestBody, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
