import * as Router from 'koa-router',
import { RegisterRoutes } from './routes',

export function registerRoutrs(router: Router) {
    RegisterRoutes(router)
}

export default function createOrUpdateBook (router: ZodRouter, books:
BookDatabaseAccessor): void {
...
}