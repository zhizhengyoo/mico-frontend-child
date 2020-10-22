import {
  RouteReuseStrategy,
  DefaultUrlSerializer,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';
import {Injectable} from '@angular/core';

interface IRouteConfigData {
  reuse: boolean;
}

interface ICachedRoute {
  handle: DetachedRouteHandle;
  data: IRouteConfigData;
}

@Injectable()
export class AppReuseStrategy implements RouteReuseStrategy {

  _cacheRouters: { [key: string]: any } = {};
  private static routeCache = new Map<string, ICachedRoute>();
  private static waitDelete: string; // 当前页未进行存储时需要删除
  private static currentDelete: string;  // 当前页存储过时需要删除
  /** 进入路由触发，判断是否是同一路由 */
  // shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
  //   return future.routeConfig === curr.routeConfig;
  // }

  /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断，这里判断是否有data数据判断是否复用 */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // const url = this.getFullRouteUrl(route);
    // const data = this.getRouteData(route);
    // if (AppReuseStrategy.waitDelete && AppReuseStrategy.waitDelete === url) {
    //   // 如果待删除是当前路由，且未存储过则不存储快照
    //   AppReuseStrategy.waitDelete = null;
    //   return null;
    // } else {
    //   // 如果待删除是当前路由，且存储过则不存储快照
    //   if (AppReuseStrategy.currentDelete && AppReuseStrategy.currentDelete === url) {
    //     AppReuseStrategy.currentDelete = null;
    //     return null;
    //   } else {
    //     AppReuseStrategy.routeCache.set(url, { handle, data });
    //     this.addRedirectsRecursively(route);
    //   }
    // }
    this._cacheRouters[route.routeConfig.path] = {
      snapshot: route,
      handle: handle
    };
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this._cacheRouters[route.routeConfig.path];
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this._cacheRouters[route.routeConfig.path].handle;
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  private getFullRouteUrl(route: ActivatedRouteSnapshot): string {
    return this.getFullRouteUrlPaths(route).filter(Boolean).join('/').replace('/', '_');
  }

  private getFullRouteUrlPaths(route: ActivatedRouteSnapshot): string[] {
    const paths = this.getRouteUrlPaths(route);
    return route.parent ? [ ...this.getFullRouteUrlPaths(route.parent), ...paths ] : paths;
  }

  private getRouteUrlPaths(route: ActivatedRouteSnapshot): string[] {
    return route.url.map(urlSegment => urlSegment.path);
  }

  private getRouteData(route: ActivatedRouteSnapshot): IRouteConfigData {
    return route.routeConfig && route.routeConfig.data as IRouteConfigData;
  }
}

