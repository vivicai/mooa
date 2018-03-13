/**
 * Robin Coma Delperier
 * Licensed under the Apache-2.0 License
 * https://github.com/PlaceMe-SAS/single-spa-angular-cli/blob/master/LICENSE
 *
 * modified by Phodal HUANG
 *
 */

declare const history: History

export class Router {
  routes: string[]
  defaultRoute: string

  constructor() {
    this.routes = []
  }

  matchRoute(
    prefix: string,
    isDefaultPage?: boolean
  ): (location: Location) => boolean {
    this.routes.push(prefix)
    if (isDefaultPage) {
      this.defaultRoute = prefix
    }
    return (location: Location): boolean => {
      if (prefix === '/') {
        return location.pathname === '/'
      }
      const route = this.routes.find(r => this.pathMatch(location, r))
      if (route) {
        return this.pathMatch(location, prefix)
      } else {
        this.navigate(this.defaultRoute)
        return false
      }
    }
  }

  public navigate(path: string): void {
    history.pushState(null, null, path)
  }

  private pathMatch(location: Location, path: string): boolean {
    const loc = location.pathname + location.search
    return loc.indexOf(path) !== -1
  }
}

const router = new Router()
export default router
