import { site__title_ } from '@btakita/domain--server--blog'
import { blog_post__main_fragment_ } from '@btakita/ui--server--blog/post'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
export function post__doc_html_({
	ctx
}:{
	ctx:request_ctx_T
}) {
  return (
		layout__doc_html_({
			ctx,
			title: 'Posts | ' + site__title_(ctx)
		}, [
			briantakita__header_({
				ctx,
				active_link: 'posts'
			}),
			blog_post__main_fragment_({ ctx }),
			briantakita__footer_({ ctx }),
		])
	)
}
