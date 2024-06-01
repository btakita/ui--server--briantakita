import { Person_image } from '@btakita/domain--server--briantakita/jsonld'
import { blog_post__description_, blog_post__title_ } from '@rappstack/domain--server--blog/post'
import {
	WebPage__description__set,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { blog_post__main_fragment_ } from '@rappstack/ui--server--blog/post'
import { class_ } from 'ctx-core/html'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
import { sticky__h1_ } from '../sticky/index.js'
type post__doc_html_props_T = {
	ctx:request_ctx_T
}
export function post__doc_html_($p:post__doc_html_props_T) {
	const { ctx } = $p
	const title = blog_post__title_(ctx)!
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
				class: class_(
					'nofouc',
					'relative',
					'prose'),
				h1_dom: sticky__h1_({ title, }),
				article_class: '',
				progress_container_class: 'bg-skin-fill',
				progress_class: 'bg-skin-accent',
				image: Person_image,
				description_class: 'text-2xl',
			}),
			briantakita__footer_({ ctx }),
		])
	)
}
