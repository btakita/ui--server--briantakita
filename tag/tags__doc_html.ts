import { site_ } from '@btakita/domain--server--blog'
import { blog_tags__main_fragment_ } from '@btakita/ui--server--blog/tag'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.ts'
import { briantakita__header_ } from '../header/index.ts'
import { layout__doc_html_ } from '../layout/index.ts'
export function tags__doc_html_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
  return (
		layout__doc_html_({
			ctx,
			title: 'Tags | ' + site_(ctx)!.title
		}, [
			briantakita__header_({ ctx }),
			blog_tags__main_fragment_({ ctx }),
			briantakita__footer_({ ctx }),
		])
	)
}
