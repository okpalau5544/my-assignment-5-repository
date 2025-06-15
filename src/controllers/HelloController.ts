import { Get, Route, Tags, Controller, Path } from 'tsoa'
import { type ParameterizedContext, type DefaultContext, type Request as koaRequest } from 'koa'
import { BookID } from '../../adapter/assignment-2'
import { AppWarehouseDatabaseState } from '../database_access'

@Route('warehouse')
export class WarehouseRoutes extends Controller {
    @Get('{book}')
    public async getBookInfo (
        @Path() book: BookID,
        @Request() request: koaRequest
    ): Promise<Record<string, number>> {
    const ctx: ParameterizedContext<AppWarehouseDatabaseState, DefaultContext> = request.ctx
    const data = ctx.state.warehouse
    }
}
}