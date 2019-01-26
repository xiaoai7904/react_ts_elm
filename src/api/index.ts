/**
 * 搜索参数类型
 */
export interface SearchParamsType {
  kw: string;
  latitude: string;
  longitude: string;
  cityId: string;
}

/**
 * 请求方法
 * @param url 请求地址
 * @param method 请求方法(GET, POST, PUT, DELETE)
 * @param params 请求参数
 * @return Promise
 */
export function $http(url: string, method: string, params?: object): Promise<any> {
  if (method === 'GET') {
    return fetch(url, {
      method
    });
  }
  return fetch(url, {
    method,
    body: params instanceof FormData ? params : JSON.stringify(params)
  });
}

/**
 * 搜索接口
 */
export function search(params: SearchParamsType): Promise<any> {
  return $http(`/restapi/shopping/v1/typeahead?kw=${params.kw}&latitude=${params.latitude}&longitude=${params.longitude}&city_id=${params.cityId}`, 'GET').then(res => res.data);
}
