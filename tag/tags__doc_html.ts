import { Person_id_ref_, Person_image } from '@btakita/domain--server--briantakita/jsonld'
import { site__author_a1_, site__title_ } from '@rappstack/domain--server/site'
import { blog_tags__main_fragment_ } from '@rappstack/ui--server--blog/tag'
import { class_ } from 'ctx-core/html'
import { type request_ctx_T } from 'relysjs/server'
import { briantakita__footer_ } from '../footer/index.js'
import { briantakita__header_ } from '../header/index.js'
import { layout__doc_html_ } from '../layout/index.js'
type tags__doc_html_props_T = {
	ctx:request_ctx_T
	class?:string
	h1_class?:string
}
export function tags__doc_html_($p:tags__doc_html_props_T) {
	const { ctx, h1_class } = $p
	const title = 'Tags | ' + site__title_(ctx)
	const description = 'Tags used in all articles & posts by ' + site__author_a1_(ctx)![0].name + '.'
	return (
		layout__doc_html_({
			ctx,
			title,
			description,
		}, [
			briantakita__header_({
				ctx,
				active_link: 'tags',
			}),
			blog_tags__main_fragment_({
				ctx,
				class: class_(
					'nofouc',
					$p.class),
				h1_class: class_(
					'mb-0',
					h1_class),
				author_id_ref: Person_id_ref_(ctx),
				image: Person_image,
			}),
			briantakita__footer_({ ctx }),
		])
	)
}
