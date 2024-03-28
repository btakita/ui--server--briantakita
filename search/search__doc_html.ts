import {
	WebPage__description__set,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { site__author_, site__title_ } from '@rappstack/domain--server/site'
import { blog_search__main_fragment_ } from '@rappstack/ui--server--blog/search'
import { class_ } from 'ctx-core/html'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
type search__doc_html_props_T = {
	ctx:request_ctx_T
	h1_class?:string
}
export function search__doc_html_($p:search__doc_html_props_T) {
	const { ctx, h1_class } = $p
	const title = 'Search | ' + site__title_(ctx)
	const description = 'Search through blog posts & articles authored by ' + site__author_(ctx)
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'SearchResultsPage')
	return (
		layout__doc_html_({
			ctx,
			title,
			description,
		}, [
			briantakita__header_({
				ctx,
				active_link: 'search',
			}),
			blog_search__main_fragment_({
				ctx,
				class: 'nofouc',
				hero_class: class_(
					'prose',
					'mb-6'),
				h1_text: `Search ` + site__author_(ctx) + `'s articles & blog posts`,
				h1_class,
			}),
			briantakita__footer_({ ctx })
		])
	)
}
