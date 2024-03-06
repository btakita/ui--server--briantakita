import { blog_post__description_, blog_post__title_ } from '@rappstack/domain--server--blog/post'
import { site__title_ } from '@rappstack/domain--server/site'
import { blog_post__main_fragment_ } from '@rappstack/ui--server--blog/post'
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
			title: blog_post__title_(ctx) + ' | ' + site__title_(ctx),
			description: blog_post__description_(ctx),
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
