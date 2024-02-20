import { site__title_ } from '@rappstack/domain--server/site'
import { blog_tags__main_fragment_ } from '@rappstack/ui--server--blog/tag'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
export function tags__doc_html_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
  return (
		layout__doc_html_({
			ctx,
			title: 'Tags | ' + site__title_(ctx)
		}, [
			briantakita__header_({ ctx }),
			blog_tags__main_fragment_({ ctx }),
			briantakita__footer_({ ctx }),
		])
	)
}
