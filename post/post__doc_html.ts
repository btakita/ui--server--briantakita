import { Person_id_ref_, Person_image } from '@btakita/domain--server--briantakita/jsonld'
import { blog_post__description_, blog_post__title_ } from '@rappstack/domain--server--blog/post'
import {
	WebPage__description__set,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { site__title_ } from '@rappstack/domain--server/site'
import { blog_post__main_fragment_ } from '@rappstack/ui--server--blog/post'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
import { prose_class } from '../prose/index.js'
export function post__doc_html_({
	ctx
}:{
	ctx:request_ctx_T
}) {
	const title = blog_post__title_(ctx) + ' | ' + site__title_(ctx)
	const description = blog_post__description_(ctx)
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'ItemPage')
  return (
		layout__doc_html_({
			ctx,
			title,
			description,
		}, [
			briantakita__header_({
				ctx,
				active_link: 'posts'
			}),
			blog_post__main_fragment_({
				ctx,
				class: 'nofouc',
				article_class: prose_class,
				progress_container_class: 'bg-skin-fill',
				progress_class: 'bg-skin-accent',
				author_id_ref: Person_id_ref_(ctx),
				image: Person_image,
				h1_class: 'text-4xl',
				description_class: 'text-2xl',
			}),
			briantakita__footer_({ ctx }),
		])
	)
}
