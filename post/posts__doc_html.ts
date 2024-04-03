import { Person_image } from '@btakita/domain--server--briantakita/jsonld'
import {
	WebPage__description__set,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { site__author_a1_, site__title_ } from '@rappstack/domain--server/site'
import { blog_posts__main_fragment_, blog_posts__nav_ } from '@rappstack/ui--server--blog/post'
import { class_ } from 'ctx-core/html'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
type posts__doc_html_props_T = {
	ctx:request_ctx_T
	h1_class?:string
}
export function posts__doc_html_($p:posts__doc_html_props_T) {
	const { ctx, h1_class } = $p
	const title = 'Posts | ' + site__title_(ctx)
	const description = 'All articles & posts by ' + site__author_a1_(ctx)![0].name + '.'
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'CollectionPage')
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
			blog_posts__main_fragment_({
				ctx,
				class: 'nofouc',
				h1_class,
				image: Person_image,
				description: 'The articles that I have posted to this site…',
				description_class: class_(
					'mb-6'),
			}),
			blog_posts__nav_({ ctx }),
			briantakita__footer_({ ctx }),
		])
	)
}
