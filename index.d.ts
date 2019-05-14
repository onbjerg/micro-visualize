import { RequestHandler } from 'micro'

declare function visualize(
  fn: RequestHandler,
  log?: 'dev' | 'prod'
): RequestHandler

export = visualize
