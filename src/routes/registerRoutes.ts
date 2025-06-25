import Router from 'koa-router'
import { RegisterRoutes } from './routes'

export function registerRoutes(router: Router) {
    RegisterRoutes(router)
}

// Adjust the signature as needed; for now, providing a basic example:
export default function createOrUpdateBook (router: any, books: any): void {
    // ... implementation ...
}