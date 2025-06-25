import { Get, Route, Controller, Path, Request } from 'tsoa'
import { type ParameterizedContext, type DefaultContext, type Request as koaRequest } from 'koa'
import { BookID } from '../../adapter/assignment-2'
import { type AppWarehouseDatabaseState } from '../database_access'

@Route('warehouse')
export class WarehouseRoutes extends Controller {
  @Get('{book}')
  public async getBookInfo (
    @Path() book: BookID,
      @Request() request: koaRequest
  ): Promise<Record<string, number>> {
    const ctx: ParameterizedContext<AppWarehouseDatabaseState, DefaultContext> = request.ctx
    const data = ctx.state.warehouse
    // Return something meaningful. Example:
    // Assuming data.books is a Record<BookID, number> containing book counts
    return { [book]: data.books[book as keyof typeof data.books] }
  }
}
