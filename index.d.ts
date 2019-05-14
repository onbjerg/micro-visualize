import { RequestHandler } from 'micro'
import { IncomingMessage, ServerResponse, Server } from 'http'

declare function visualize(
  fn: RequestHandler,
  log?: 'dev' | 'prod'
): RequestHandler

export = visualize
